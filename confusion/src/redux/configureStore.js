import { createStore } from 'redux';

import { Reducer, initialState } from './reducer';

export function configureStore() {
    const store = createStore(
        Reducer,
        initialState
    );

    return store;
}

