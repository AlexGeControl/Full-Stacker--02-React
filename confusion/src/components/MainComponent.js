import React, { Component } from 'react';

import { Navbar, NavbarBrand } from 'reactstrap';

import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetails from './DishDetailsComponent';
import Footer from './FooterComponent';

import DISHES from '../shared/dishes';

/*
    Main: container component
 */
class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDishId: null
        };
    }

    onDishSelect(dishId) {
        this.setState(
            {selectedDishId: dishId}
        )
    }

    render() {
        const selectedDish = this.state.dishes.find(
            (dish) => dish.id === this.state.selectedDishId
        );

        return (
            <div className="App">
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                
                <Header />

                <div className="container">
                    <Menu dishes={this.state.dishes} onDishSelect={(dishId) => this.onDishSelect(dishId)} />

                    <DishDetails dish={selectedDish} />
                </div>

                <Footer />
          </div>
        );
    }
}

export default Main;