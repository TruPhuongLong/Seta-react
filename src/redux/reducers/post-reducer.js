import initState from '../store/state';
import {
    GET_POST,
    CREATE_POST,
    START_LOADING,
    STOP_LOADING
} from '../actions/type-action';

export default (state = initState.postState, action) => {
    switch (action.type) {
        case GET_POST:
            return {
                ...state,
                list: action.payload
            }
        case CREATE_POST:
            return {
                ...state,
                current: action.payload
            }
        case START_LOADING:
        case STOP_LOADING:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}