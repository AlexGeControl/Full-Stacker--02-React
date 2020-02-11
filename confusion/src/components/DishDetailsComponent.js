import React, { Component } from 'react';

import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';
import { ListGroup, ListGroupItem, ListGroupItemText } from 'reactstrap';

class DishDetails extends Component {
    constructor(props) {
        super(props);
    }

    renderComment(comment) {
        const datetime = new Date(comment.date);
        const date = datetime.toDateString();

        return (
            <div key={comment.id}>
                <ListGroupItem>
                    <ListGroupItemText>
                    <blockquote className="blockquote">
                        <p class="mb-0  text-left">
                            {comment.comment}
                        </p>
                        <footer className="blockquote-footer mt-0 text-right">
                            {comment.author},
                            <cite>
                                {date}
                            </cite>
                        </footer>
                    </blockquote>
                    </ListGroupItemText>
                </ListGroupItem>
            </div>
        );
    }

    renderComments(comments) {
        return (
            <div>
                <h4 className="text-left m-2">Comments</h4>

                <ListGroup className="list-group-flush"> 
                    {
                        comments.map(this.renderComment)
                    }
                </ListGroup>
            </div>
        );
    } 

    render() {
        const selectedDish = this.props.selectedDish;

        return (
            <div className="row">
                <div className="row col-12 col-md-5 m-1">
                    <Card>
                        <CardImg className="img-responsive" src={selectedDish.image} alt={selectedDish.name}/>
                        <CardBody>
                            <CardTitle>
                                <strong>{selectedDish.name}</strong>
                            </CardTitle>
                            <CardText>
                                {selectedDish.description}
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="row col-12 col-md-5 m-1">
                    {this.renderComments(selectedDish.comments)}
                </div>
            </div>
        );

    }
}

export default DishDetails