import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './HeaderComponent';

import Home from './HomeComponent';
import Menu from './MenuComponent';

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
        
        const HomePage = () => {return <Home />}
        const MenuPage = () => {return <Menu dishes={this.state.dishes} onDishSelect={(dishId) => this.onDishSelect(dishId)} />}

        return (
            <div>                
                <Header />

                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={MenuPage} />
                    <Redirect to="/home" />
                </Switch>
                
                    
                <Footer />
          </div>
        );
    }
}

export default Main;