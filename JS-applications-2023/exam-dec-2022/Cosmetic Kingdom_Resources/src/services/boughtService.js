import * as request from './requester.js'

const baseUrl = 'http://localhost:3030/data/bought'

export const addBuys = (data) => {
    return request.post(baseUrl,data)
}

export const totalBought = (productId) => {
    return request.get(`${baseUrl}?where=productId%3D%22${productId}%22&distinct=_ownerId&count`)
}