import {get, post} from './data-service'

const urlGet = "https://jsonplaceholder.typicode.com/posts"
const urlPost = ""

export const getPosts = (query) => {
    return get(urlGet + (query || ''));
}

export const createPost = (model) => {
    return post(urlPost, model);
}