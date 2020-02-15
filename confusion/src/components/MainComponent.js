import React, { Component } from 'react';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as ActionCreators from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

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
        fetchDishes: () => dispatch(ActionCreators.fetchDishes()),

        addComment: (dishId, rating, author, comment) => dispatch(
            ActionCreators.addComment(dishId, rating, author, comment)
        ),

        resetFeedbackForm: () => dispatch(actions.reset('feedback')),
    };
}

class Main extends Component {
    componentDidMount() {
        this.props.fetchDishes();
    }

    render() {
        const HomePage = () => {
            const dish = this.props.dishes.data.find((dish) => dish.featured);
            const promotion = this.props.promotions.find((promotion) => promotion.featured);
            const leader = this.props.leaders.find((leader) => leader.featured);
    
            return <Home 
                dish={dish} dishIsLoading={this.props.dishes.isLoading} dishErrMsgs={this.props.dishes.errMsgs}
                promotion={promotion} 
                leader={leader}
            />;
        };
    
        const AboutPage = () => {
            return <About leaders={this.props.leaders} />;
        };
    
        const MenuPage = () => {
            return <Menu 
                dishes={this.props.dishes.data}
                isLoading={this.props.dishes.isLoading} errMsgs={this.props.dishes.errMsgs} 
            />
        };

        const DishPage = ({match}) => {
            // parse dish id as int:
            const dishId = parseInt(match.params.dishId, 10);
            
            // identify dish and comments:
            const dish = this.props.dishes.data.find((dish) => dish.id === dishId);
            const comments = this.props.comments.filter((comment) => comment.dishId === dishId);
    
            return <DishDetails 
                dish={dish} dishIsLoading={this.props.dishes.isLoading} dishErrMsgs={this.props.dishes.errMsgs}
                comments={comments} addComment={this.props.addComment}
            />;
        };
    
        const ContactPage = () => {return <Contact resetFeedbackForm={this.props.resetFeedbackForm} />}
    
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
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));