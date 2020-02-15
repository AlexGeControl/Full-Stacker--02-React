import * as Types from '../ActionTypes';

const Dishes = (
    state = {
        data: [],
        isLoading: true,
        errMsgs: null
    }, 
    action
) => {
    switch (action.type) {
        case Types.DISHES_CREATE:
        {
            let newDishes = action.payload;

            let newState = {
                data: state.data.concat(newDishes),
                isLoading: false,
                errMsgs: null
            }

            return newState;
        }
        case Types.DISHES_READ:
        {
            let dishes = action.payload;

            let newState = {
                data: dishes,
                isLoading: false,
                errMsgs: null
            }

            return newState;
        }
        case Types.DISHES_LOADING:
        {
            let newState = {
                data: state.data,
                isLoading: true,
                errMsgs: null
            }

            return newState;
        }
        case Types.DISHES_FAILED:
        {
            let errMsgs = action.payload;

            let newState = {
                data: state.data,
                isLoading: false,
                errMsgs: errMsgs
            }

            return newState;
        }
        default:
            return state;
    }
};

export default Dishes;