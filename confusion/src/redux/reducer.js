// state:
import COMMENTS from '../shared/comments';
import DISHES from '../shared/dishes';
import LEADERS from '../shared/leaders';
import PROMOTIONS from '../shared/promotions';

export const initialState = {
    comments: COMMENTS,
    dishes: DISHES,
    leaders: LEADERS,
    promotions: PROMOTIONS
};

export function Reducer(state = initialState, action) {
    return state;
};