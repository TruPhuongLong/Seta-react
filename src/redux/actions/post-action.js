import {
    getPosts,
    createPost
} from '../../service/post-service';

import {
    GET_POST,
    CREATE_POST
} from './type-action'
import {
    startLoadingAction,
    stopLoadingAction
} from './status-action'

const MESSAGE = {
    success: 'success',
    fail: 'fail'
}

//test ok
export const getPostsAction = (query) => {
    return (dispatch) => {
        dispatch(startLoadingAction);
        return getPosts(query)
            .then(posts => {
                dispatch({
                    type: GET_POST,
                    payload: posts
                })
                return MESSAGE.success;
            })
            .catch(_ => {
                throw new Error(MESSAGE.fail)
            })
            .finally(dispatch(stopLoadingAction))
    }
}

export const createPostAction = (model) => {
    return (dispatch, getState, extraArgument) => {
        dispatch(startLoadingAction);
        return createPost(model)
            .then(_ => {
                return MESSAGE.success;
            })
            .catch(_ => {
                throw new Error(MESSAGE.fail)
            })
            .finally(dispatch(stopLoadingAction))
    }
}