import React, { Component } from 'react';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as CommentCreators from '../redux/action/comments/Creators';

import Header from './HeaderComponent';

import Home from './HomeComponent';
import About from './AboutComponent';
import Menu from './MenuComponent';
import DishDetails from './DishDetailsComponent';
import Contact from './ContactComponent';

import Footer from './FooterComponent';

const mapStateToProps = (state) => {
    const props = {
        comments: state.comments,
        dishes: state.dishes,
        leaders: state.leaders,
        promotions: state.promotions
    };

    return props;
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (dishId, rating, author, comment) => dispatch(
            CommentCreators.addComment(dishId, rating, author, comment)
        )
    };
}

const Main = (props) => {        
    const HomePage = () => {
        const dish = props.dishes.find((dish) => dish.featured);
        const promotion = props.promotions.find((promotion) => promotion.featured);
        const leader = props.leaders.find((leader) => leader.featured);

        return <Home dish={dish} promotion={promotion} leader={leader} />;
    };

    const AboutPage = () => {
        return <About leaders={props.leaders} />;
    }

    const MenuPage = () => {return <Menu dishes={props.dishes} />}
    const DishPage = ({match}) => {
        // parse dish id as int:
        const dishId = parseInt(match.params.dishId, 10);
        
        // identify dish and comments:
        const dish = props.dishes.find((dish) => dish.id === dishId);
        const comments = props.comments.filter((comment) => comment.dishId === dishId);

        return <DishDetails 
                    dish={dish} comments={comments} 
                    addComment={props.addComment}
                />;
    };

    const ContactPage = () => {return <Contact />}

    return (
        <div>                
            <Header />

            <Switch>
                <Route path='/home' component={HomePage} />
                <Route path='/about' component={AboutPage} />
                <Route exact path='/menu' component={MenuPage} />
                <Route path='/menu/:dishId' component={DishPage} />
                <Route exact path='/contact' component={ContactPage} />
                <Redirect to="/home" />
            </Switch>
            
                
            <Footer />
        </div>
    );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));