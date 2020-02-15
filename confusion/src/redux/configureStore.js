import { createStore, combineReducers, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'; 

import Comments from './reducer/comments';
import Dishes from './reducer/dishes';
import Leaders from './reducer/leaders';
import Promotions from './reducer/promotions';

export function configureStore() {
    const store = createStore(
        combineReducers(
            {
                comments: Comments,
                dishes: Dishes,
                leaders: Leaders,
                promotions: Promotions
            }
        ),
        applyMiddleware(thunk, logger)
    );

    return store;
}

