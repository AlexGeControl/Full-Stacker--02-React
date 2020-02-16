import * as Types from '../ActionTypes';

const Comments = (
    state = {
        data: [],
        isLoading: true,
        errMsgs: null
    }, 
    action
) => {
    switch (action.type) {
        case Types.COMMENTS_CREATE:
        {
            let newComment = action.payload;

            newComment.id = state.length;
            newComment.date = new Date().toISOString();

            let newState = {
                data: state.data.concat(newComment),
                isLoading: false,
                errMsgs: null
            }

            return newState;
        }
        case Types.COMMENTS_READ:
        {
            let comments = action.payload;

            let newState = {
                data: comments,
                isLoading: false,
                errMsgs: null
            }

            return newState;
        }
        case Types.COMMENTS_LOADING:
        {
            let newState = {
                data: state.data,
                isLoading: true,
                errMsgs: null
            }

            return newState;
        }
        case Types.COMMENTS_FAILED:
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

export default Comments;