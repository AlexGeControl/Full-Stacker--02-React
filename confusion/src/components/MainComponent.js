import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './HeaderComponent';

import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';

import Footer from './FooterComponent';

import DISHES from '../shared/dishes';
import PROMOTIONS from '../shared/promotions';
import LEADERS from '../shared/leaders';

/*
    Main: container component
 */
class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            promotions: PROMOTIONS,
            leaders: LEADERS,
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
        
        const HomePage = () => {
            const dish = this.state.dishes.find((dish) => dish.featured);
            const promotion = this.state.promotions.find((promotion) => promotion.featured);
            const leader = this.state.leaders.find((leader) => leader.featured);

            return <Home dish={dish} promotion={promotion} leader={leader} />;
        }
        const MenuPage = () => {return <Menu dishes={this.state.dishes} onDishSelect={(dishId) => this.onDishSelect(dishId)} />}
        const ContactPage = () => {return <Contact />}

        return (
            <div>                
                <Header />

                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={MenuPage} />
                    <Route exact path='/contact' component={ContactPage} />
                    <Redirect to="/home" />
                </Switch>
                
                    
                <Footer />
          </div>
        );
    }
}

export default Main;