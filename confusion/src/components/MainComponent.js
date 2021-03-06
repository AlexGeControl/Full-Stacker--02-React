import React, { Component } from 'react';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as ActionCreators from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
        fetchComments: () => dispatch(ActionCreators.fetchComments()),
        fetchDishes: () => dispatch(ActionCreators.fetchDishes()),
        fetchLeaders: () => dispatch(ActionCreators.fetchLeaders()),
        fetchPromotions: () => dispatch(ActionCreators.fetchPromotions()),

        postComment: (dishId, rating, author, comment) => dispatch(
            ActionCreators.postComment(dishId, rating, author, comment)
        ),
        
        postFeedback: (feedback) => dispatch(ActionCreators.postFeedback(feedback)),
        resetFeedbackForm: () => dispatch(actions.reset('feedback')),
    };
}

class Main extends Component {
    componentDidMount() {
        this.props.fetchComments();
        this.props.fetchDishes();
        this.props.fetchLeaders();
        this.props.fetchPromotions();
    }

    render() {
        const HomePage = () => {
            const dish = this.props.dishes.data.find((dish) => dish.featured);
            const promotion = this.props.promotions.data.find((promotion) => promotion.featured);
            const leader = this.props.leaders.data.find((leader) => leader.featured);
    
            return <Home 
                dish={dish} dishIsLoading={this.props.dishes.isLoading} dishErrMsgs={this.props.dishes.errMsgs}
                promotion={promotion} promotionIsLoading={this.props.promotions.isLoading} promotionErrMsgs={this.props.promotions.errMsgs}
                leader={leader} leaderIsLoading={this.props.leaders.isLoading} leaderErrMsgs={this.props.leaders.errMsgs}
            />;
        };
    
        const AboutPage = () => {
            return <About 
                leaders={this.props.leaders.data} 
                isLoading={this.props.leaders.isLoading} errMsgs={this.props.leaders.errMsgs}
            />;
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
            const comments = this.props.comments.data.filter((comment) => comment.dishId === dishId);
    
            return <DishDetails 
                dish={dish} dishIsLoading={this.props.dishes.isLoading} dishErrMsgs={this.props.dishes.errMsgs}
                comments={comments} dishIsLoading={this.props.comments.isLoading} dishErrMsgs={this.props.comments.errMsgs}
                postComment={this.props.postComment}
            />;
        };
    
        const ContactPage = () => {
            return <Contact 
                postFeedback={this.props.postFeedback}
                resetFeedbackForm={this.props.resetFeedbackForm} 
            />;
        }
    
        return (
            <div>                
                <Header />
                
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>    
                        <Switch location={this.props.location}>
                            <Route path='/home' component={HomePage} />
                            <Route path='/about' component={AboutPage} />
                            <Route exact path='/menu' component={MenuPage} />
                            <Route path='/menu/:dishId' component={DishPage} />
                            <Route exact path='/contact' component={ContactPage} />
                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>                
                    
                <Footer />
            </div>
        );
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));