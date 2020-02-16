import * as Types from '../ActionTypes';

const Leaders = (
    state = {
        data: [],
        isLoading: true,
        errMsgs: null
    }, 
    action
) => {
    switch (action.type) {
        case Types.LEADERS_READ:
        {
            let leaders = action.payload;

            let newState = {
                data: leaders,
                isLoading: false,
                errMsgs: null
            }

            return newState;
        }
        case Types.LEADERS_LOADING:
        {
            let newState = {
                data: state.data,
                isLoading: true,
                errMsgs: null
            }

            return newState;
        }
        case Types.LEADERS_FAILED:
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

export default Leaders;