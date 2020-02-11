import React, { Component } from 'react';
import { Media } from 'reactstrap'
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';


class Menu extends Component {
    constructor(props) {
        super(props);
        /*
         states: 
            state can only be manipulated using this.setState
         */
        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState(
            {
                selectedDish: dish
            }
        );
    }

    renderSelectedDish(dish) {
        if (dish == null) {
            return (
                <div></div>
            );
        } else {
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
    }

    /*
        render the view of the component
     */
    render() {
        const menu = this.props.dishes.map(
            (dish) => {
                return (
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                        <Card
                            onClick={() => {this.onDishSelect(dish)}}
                        >
                            <CardImg className="img-responsive" src={dish.image} alt={dish.name} />
                            <CardImgOverlay>
                                <CardTitle>
                                    <strong>{dish.name}</strong>
                                </CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>
                );
            }
        );

        return (
          <div className="container">
            <div className="row">
                {menu}
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderSelectedDish(this.state.selectedDish)}
                </div>
            </div>
          </div>
        );
    }
}

export default Menu;