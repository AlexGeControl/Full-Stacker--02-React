import React, { Component } from 'react';

import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';
import { ListGroup, ListGroupItem, ListGroupItemText } from 'reactstrap';

/*
    DishDetails: functional component
 */
    // a. selected dish overview:
    function Overview({dish}) {
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
            <ListGroupItem>
                <ListGroupItemText>
                <blockquote className="blockquote">
                    <p class="mb-0  text-left">
                        {comment.comment}
                    </p>
                    <footer className="blockquote-footer mt-0 text-right">
                        {comment.author}, 
                        <cite>
                            <DateFormatted datetime={comment.date} />
                        </cite>
                    </footer>
                </blockquote>
                </ListGroupItemText>
            </ListGroupItem>
        );
    }

    function Comments({comments}) {
        return (
            <div>
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
                    <Overview dish={dish} />
                </div>
                <div className="row col-12 col-md-5 m-1">
                    <Comments comments={dish.comments} />
                </div>
            </div>
        );
    }

export default DishDetails