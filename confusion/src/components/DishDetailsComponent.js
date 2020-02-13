import React from 'react';

import { Container } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Link } from 'react-router-dom';

function Navigation({dish}) {
    return (
        <div className="row">
            <div className="col-12">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/menu">Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        <Link to="#">{dish.name}</Link>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="col-12">
                <h3>{dish.name}</h3>
                <hr />
            </div>
        </div>
    );
}

function Overview({dish}) {
    if (dish === undefined) {
        return (
            <div></div>
        );
    }

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

function Comments({comments}) {
    if (comments === undefined) {
        return (
            <div></div>
        );
    }

    return (
        <div className="col-12 col-md-5 m-1">
            <h4 className="text-left m-2">Comments</h4>

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
        </div>
    );
} 

const DishDetails = (props) => {
    const dish = props.dish;
    const comments = props.comments;

    return (
        <Container>
            <Navigation dish={dish} />

            <div className="row">
                <Overview dish={dish} />
                <Comments comments={comments} />
            </div>
        </Container>
    );
}

export default DishDetails