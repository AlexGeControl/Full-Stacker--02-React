import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './HeaderComponent';

import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetails from './DishDetailsComponent';
import Contact from './ContactComponent';

import Footer from './FooterComponent';

import DISHES from '../shared/dishes';
import PROMOTIONS from '../shared/promotions';
import LEADERS from '../shared/leaders';
import COMMENTS from '../shared/comments';

/*
    Main: container component
 */
class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,

            comments: COMMENTS,

            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    }

    render() {        
        const HomePage = () => {
            const dish = this.state.dishes.find((dish) => dish.featured);
            const promotion = this.state.promotions.find((promotion) => promotion.featured);
            const leader = this.state.leaders.find((leader) => leader.featured);

            return <Home dish={dish} promotion={promotion} leader={leader} />;
        };
        const MenuPage = () => {return <Menu dishes={this.state.dishes} />}
        const SelectedDish = ({match}) => {
            // parse dish id as int:
            const dishId = parseInt(match.params.dishId, 10);
            
            // identify dish and comments:
            const dish = this.state.dishes.find((dish) => dish.id === dishId);
            const comments = this.state.comments.filter((comment) => comment.dishId === dishId);

            return <DishDetails dish={dish} comments={comments} />;
        };
        const ContactPage = () => {return <Contact />}

        return (
            <div>                
                <Header />

                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={MenuPage} />
                    <Route path='/menu/:dishId' component={SelectedDish} />
                    <Route exact path='/contact' component={ContactPage} />
                    <Redirect to="/home" />
                </Switch>
                
                    
                <Footer />
          </div>
        );
    }
}

export default Main;