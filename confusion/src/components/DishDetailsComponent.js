import React, { Component } from 'react';

import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';
import { ListGroup, ListGroupItem, ListGroupItemText } from 'reactstrap';

class DishDetails extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        return (
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
        );
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

    renderComments(dish) {
        const comments = dish.comments;

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
        const dish = this.props.dish;

        return (
            <div className="row">
                <div className="row col-12 col-md-5 m-1">
                    {this.renderDish(dish)}
                </div>
                <div className="row col-12 col-md-5 m-1">
                    {this.renderComments(dish)}
                </div>
            </div>
        );

    }
}

export default DishDetails