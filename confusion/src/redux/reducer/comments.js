import COMMENTS from '../../shared/comments';

import * as Types from '../action/comments/Types';

const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case Types.ADD:
            let newComment = action.payload;

            newComment.id = state.length;
            newComment.date = new Date().toISOString();

            console.log('[Redux Comment Reducer]: Add Comment ' + JSON.stringify(newComment));

            let newState = state.concat(newComment);

            return newState
        default:
            return state;
    }
};

export default Comments;