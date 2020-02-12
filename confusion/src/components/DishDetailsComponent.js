import React, { Component } from 'react';

import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';
import { ListGroup, ListGroupItem, ListGroupItemText } from 'reactstrap';

class DishDetails extends Component {
    // a. selected dish overview:
    renderOverview(dish) {
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

    // b. comments:
    renderDate(datetime) {
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

    renderComment(comment) {        
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
                                {this.renderDate(comment.date)}
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
                        comments.map(
                            (comment) => this.renderComment(comment)
                        )
                    }
                </ListGroup>
            </div>
        );
    } 

    render() {
        const dish = this.props.dish;

        /*
            display nothing for null:
         */
        if (dish === undefined) {
            return (
                <div></div>
            );
        }

        return (
            <div className="row">
                <div className="row col-12 col-md-5 m-1">
                    {this.renderOverview(dish)}
                </div>
                <div className="row col-12 col-md-5 m-1">
                    {this.renderComments(dish.comments)}
                </div>
            </div>
        );
    }
}

export default DishDetails