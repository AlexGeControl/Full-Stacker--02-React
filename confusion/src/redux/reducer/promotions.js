import * as Types from '../ActionTypes';

const Promotions = (
    state = {
        data: [],
        isLoading: true,
        errMsgs: null
    }, 
    action
) => {
    switch (action.type) {
        case Types.PROMOTIONS_READ:
        {
            let promotions = action.payload;

            let newState = {
                data: promotions,
                isLoading: false,
                errMsgs: null
            }

            return newState;
        }
        case Types.PROMOTIONS_LOADING:
        {
            let newState = {
                data: state.data,
                isLoading: true,
                errMsgs: null
            }

            return newState;
        }
        case Types.PROMOTIONS_FAILED:
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

export default Promotions;