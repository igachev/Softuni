import * as request from './requester.js'

const baseUrl = 'http://localhost:3030/data/posts'

export const getAllPosts = () => {
    return request.get(`${baseUrl}?sortBy=_createdOn%20desc`)
}

export const createPost = (data) => {
    return request.post(baseUrl,data)
}

export const getOnePost = (postId) => {
    return request.get(`${baseUrl}/${postId}`)
}

export const editPost = (postId,data) => {
    return request.put(`${baseUrl}/${postId}`,data)
}

export const deletePost = (postId) => {
    return request.del(`${baseUrl}/${postId}`)
}

export const getOwnPosts = (userId) => {
    return request.get(`${baseUrl}?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}