import * as Types from './Types';

export const addComment = (dishId, rating, author, comment) => {
    return {
        type: Types.ADD,
        payload: {
            dishId: dishId, 
            rating: rating,
            author: author, 
            comment: comment
        }
    };
}

