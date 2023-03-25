import * as request from './requester.js'

const baseUrl = 'http://localhost:3030/data/donations'

export const makeDonation = (postId) => {
    return request.post(baseUrl,postId)
}

export const postTotalDonations = (postId) => {
    return request.get(`${baseUrl}?where=postId%3D%22${postId}%22&distinct=_ownerId&count`)
}