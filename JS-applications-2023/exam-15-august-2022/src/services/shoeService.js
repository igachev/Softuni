import * as request from './requester.js'

const baseUrl = 'http://localhost:3030/data/shoes'

export const getAll = () => {
    return request.get(`${baseUrl}?sortBy=_createdOn%20desc`)
}

export const createShoe = (shoeData) => {
    return request.post(baseUrl,shoeData)
}

export const getOne = (shoeId) => {
    return request.get(`${baseUrl}/${shoeId}`)
}

export const deleteOne = (shoeId) => {
    return request.del(`${baseUrl}/${shoeId}`)
}

export const editOne = (shoeId,data) => {
    return request.put(`${baseUrl}/${shoeId}`,data)
}

export const searchShoes = (query) => {
    return request.get(`${baseUrl}?where=brand%20LIKE%20%22${query}%22`)
}