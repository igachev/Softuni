import * as request from './requester.js'

const baseUrl = 'http://localhost:3030/jsonstore/collections/myboard/comments'

export const getAllComments = () => {
return request.get(`${baseUrl}`)
}

export const postComment = (comment) => {
    return request.post(baseUrl,comment)
}