import * as request from './requester.js'

const baseUrl = 'http://localhost:3030/jsonstore/collections/myboard/posts'

export const getAllPosts = () => {
    return request.get(baseUrl)
}

export const createPost = (data) => {
    return request.post(baseUrl,data)
}

export const getPostById = (id) => {
    return request.get(`${baseUrl}/${id}`)
}