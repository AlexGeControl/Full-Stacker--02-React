import React, { Component } from 'react';

import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetails from './DishDetailsComponent';

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
            return <DishDetails dish={dish} />;
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

            {this.renderSelectedDish(this.state.selectedDish)}
          </div>
        );
    }
}

export default Menu;