// dishes:
import DISHES from '../shared/dishes';

import * as Types from './ActionTypes';

// comments:
export const addComment = (dishId, rating, author, comment) => {
    return {
        type: Types.COMMENTS_ADD,
        payload: {
            dishId: dishId, 
            rating: rating,
            author: author, 
            comment: comment
        }
    };
}

export const dishesLoading = () => (
    { type: Types.DISHES_LOADING }
);
export const dishesFailed = (errMsgs) => (
    { 
        type: Types.DISHES_FAILED,
        payload: errMsgs
    }
);

export const createDishes = (dishes) => {
    return {
        type: Types.DISHES_CREATE,
        payload: dishes
    };
};
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
        setTimeout(
            () => dispatch(readDishes(DISHES)),
            2000
        );
    }
);

