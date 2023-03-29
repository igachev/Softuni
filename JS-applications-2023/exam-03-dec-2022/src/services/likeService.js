import * as request from './requester.js'

const baseUrl = 'http://localhost:3030/data/likes'

export const addLike = (albumId) => {
   return request.post(baseUrl,albumId)
}

export const getAllLikes = (albumId) => {
   return request.get(`${baseUrl}?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`)
}