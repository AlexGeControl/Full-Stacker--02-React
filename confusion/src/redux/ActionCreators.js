import { baseUrl } from '../shared/baseUrl';

import * as Types from './ActionTypes';

// URL-join:
const urljoin = require('url-join');

// comments:
export const commentsLoading = () => (
    { type: Types.COMMENTS_LOADING }
);
export const commentsFailed = (errMsgs) => (
    { 
        type: Types.COMMENTS_FAILED,
        payload: errMsgs
    }
);

export const createComment = (dishId, rating, author, comment) => {
    return {
        type: Types.COMMENTS_CREATE,
        payload: {
            dishId: dishId, 
            rating: rating,
            author: author, 
            comment: comment
        }
    };
};
export const readComments = (comments) => {
    return {
        type: Types.COMMENTS_READ,
        payload: comments
    };
};

export const fetchComments = () => (
    (dispatch) => {
        // simulate fetching from the server:
        dispatch(commentsLoading());

        // provide data after 2 seconds:
        fetch(urljoin(baseUrl, 'comments'))
            .then(response => response.json())
            .then(
                comments => dispatch(readComments(comments))
            )
    }
);

// dishes:
export const dishesLoading = () => (
    { type: Types.DISHES_LOADING }
);
export const dishesFailed = (errMsgs) => (
    { 
        type: Types.DISHES_FAILED,
        payload: errMsgs
    }
);

export const readDishes = (dishes) => {
    return {
        type: Types.DISHES_READ,
        payload: dishes
    };
};

export const fetchDishes = () => (
    (dispatch) => {
        // simulate fetching from the server:
        dispatch(dishesLoading());

        // provide data after 2 seconds:
        fetch(urljoin(baseUrl, 'dishes'))
            .then(response => response.json())
            .then(
                dishes => dispatch(readDishes(dishes))
            )
    }
);

// leaders:
export const leadersLoading = () => (
    { type: Types.LEADERS_LOADING }
);
export const leadersFailed = (errMsgs) => (
    { 
        type: Types.LEADERS_FAILED,
        payload: errMsgs
    }
);

export const readLeaders = (leaders) => {
    return {
        type: Types.LEADERS_READ,
        payload: leaders
    };
};

export const fetchLeaders = () => (
    (dispatch) => {
        // simulate fetching from the server:
        dispatch(leadersLoading());

        // provide data after 2 seconds:
        fetch(urljoin(baseUrl, 'leaders'))
            .then(response => response.json())
            .then(
                leaders => dispatch(readLeaders(leaders))
            )
    }
);

// promotions:
export const promotionsLoading = () => (
    { type: Types.PROMOTIONS_LOADING }
);
export const promotionsFailed = (errMsgs) => (
    { 
        type: Types.PROMOTIONS_FAILED,
        payload: errMsgs
    }
);

export const readPromotions = (promotions) => {
    return {
        type: Types.PROMOTIONS_READ,
        payload: promotions
    };
};

export const fetchPromotions = () => (
    (dispatch) => {
        // simulate fetching from the server:
        dispatch(promotionsLoading());

        // provide data after 2 seconds:
        fetch(urljoin(baseUrl, 'promotions'))
            .then(response => response.json())
            .then(
                promotions => dispatch(readPromotions(promotions))
            )
    }
);
