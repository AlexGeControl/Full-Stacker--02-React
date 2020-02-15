import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FormGroup, Label, Button } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';

import { Link } from 'react-router-dom';

import { Loading } from './LoadingComponent';

function Navigation({dish}) {
    const title = dish === undefined ? "Loading..." : dish.name;

    return (
        <div className="row">
            <div className="col-12">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/menu">Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        <Link to="#">{title}</Link>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="col-12">
                <h3>{title}</h3>
                <hr />
            </div>
        </div>
    );
}

function Overview({dish}) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg className="img-responsive" src={dish.image} alt={dish.name}/>
                
                <CardBody>
                    <CardTitle>
                        <strong>{dish.name}</strong>
                    </CardTitle>
                    <CardText>
                        {dish.description}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function DateFormatted({datetime}) {
    // define format:
    const options = {
        month: "short",
        day: "2-digit",
        year: "numeric"
    }

    return new Intl.DateTimeFormat(undefined, options).format(
        new Date(datetime)
    );
}

function Comment({comment}) {        
    return (
        <div>
            <ListGroupItem>
                <blockquote className="blockquote">
                    <p className="mb-0 text-left">
                        {comment.comment}
                    </p>
                    <footer className="blockquote-footer mt-0 text-right">
                        {comment.author}, 
                        <cite>
                            <DateFormatted datetime={comment.date} />
                        </cite>
                    </footer>
                </blockquote>
            </ListGroupItem>
        </div>            
    );
}

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCommentOpen: false
        };
    }

    onCommentToggle() {
        this.setState(
            { isCommentOpen: !this.state.isCommentOpen }
        )
    }

    onCommentSubmit(values) {
        alert("[Comment]: " + JSON.stringify(values));

        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment)
    }

    render() {
        const CommentModal = () => {
            const required = (value) => value && value.length;
            const minLength = (len) => (value) => (!value) || (value.length >= len);
            const maxLength = (len) => (value) => value && (value.length <= len);

            return (
                <div>
                    <Modal isOpen={this.state.isCommentOpen} toggle={() => this.onCommentToggle()}>
                        <ModalHeader toggle={() => this.onCommentToggle()} charCode="X">
                            Submit Comment
                        </ModalHeader>
            
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.onCommentSubmit(values)}>
                                <FormGroup>
                                    <div className="form-row align-items-center">
                                        <div className="col-12">
                                            <Label for="rating">Rating</Label>
                                        </div>
                                        <div className="col-12">
                                            <Control.select className="form-control"
                                                model=".rating" id="rating"
                                                name="rating"
                                            >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Control.select>
                                        </div>
                                    </div>
                                </FormGroup>
                                <FormGroup>
                                    <div className="row align-items-center">
                                        <div className="col-12">
                                            <Label for="author">Your Name</Label>
                                        </div>
                                        <div className="col-12">
                                            <Control.text className="form-control"
                                                model=".author" id="author"
                                                name="author" placeholder="Your Name"
                                                validators={
                                                    {
                                                        required: required,
                                                        minLength: minLength(3),
                                                        maxLength: maxLength(15)
                                                    }
                                                }
                                            />
                                            <Errors className="text-danger"
                                                model=".author" show="touched"
                                                messages={
                                                    {
                                                        required: 'Required',
                                                        minLength: 'Your Name should be no less than 3 characters',
                                                        maxLength: 'Your Name should be no more than 15 characters'
                                                    }
                                                }
                                            />
                                        </div>
                                    </div>
                                </FormGroup>
                                <FormGroup>
                                    <div className="row align-items-center">
                                        <div className="col-12">
                                            <Label for="comment">Your Feedback</Label>
                                        </div>
                                        <div className="col-12">
                                            <Control.textarea className="form-control"
                                                model=".comment" id="comment" 
                                                name="comment" rows="6" 
                                            />
                                        </div>
                                    </div>
                                </FormGroup>                                
                                <FormGroup>
                                    <div className="form-row">
                                        <Button 
                                            className="mr-auto" color="primary" type="submit" 
                                        >
                                            Submit
                                        </Button>
                                    </div>
                                </FormGroup>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </div>
            );
        };

        return (
            <Row>
                <Col>
                    <Button outline onClick={() => this.onCommentToggle()}>
                        <span className="fa fa-comment fa-lg mr-1"></span>
                        Submit Comment
                    </Button> 
                </Col>
                <CommentModal /> 
            </Row>      
        );
    }
}

function Comments({comments, dishId, addComment}) {
    if (comments === undefined) {
        return (
            <div></div>
        );
    }

    return (
        <div className="col-12 col-md-5 m-1">
            <Row>
                <h4 className="text-left m-2">Comments</h4>
            </Row>
            
            <Row>
                <ListGroup className="list-group-flush"> 
                    {
                        comments.map(
                            (comment) => {
                                return (
                                    <div key={comment.id}>
                                        <Comment comment={comment} />
                                    </div>
                                );
                            }
                        )
                    }
                </ListGroup>
            </Row>

            <CommentForm dishId={dishId} addComment={addComment} />
        </div>
    );
} 

const DishDetails = (props) => {
    const dish = props.dish;
    const isLoading = props.dishIsLoading;
    const errMsgs = props.dishErrMsgs;
    const comments = props.comments;
    const addComment = props.addComment;

    if (errMsgs) 
        return (
            <Container>
                <Navigation dish={dish} />

                <div className="row row-content justify-content-center">
                    <h4>{props.errMsgs}</h4>
                </div>
            </Container>
        );
    else if (isLoading)
        return (
            <Container>
                <Navigation dish={dish} />

                <div className="row row-content justify-content-center">
                    <Loading />
                </div>
            </Container>
        );
    else if (dish === undefined) {
        return (
            <Container>
                <Navigation dish={dish} />

                <div></div>
            </Container>
        );
    }

    return (
        <Container>
            <Navigation dish={dish} />

            <div className="row">
                <Overview dish={dish} />
                <Comments comments={comments} dishId={dish.id} addComment={addComment} />
            </div>
        </Container>
    );
}

export default DishDetails