import { createStore, combineReducers  } from 'redux';

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
        )
    );

    return store;
}

