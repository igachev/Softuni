import * as request from './requester.js'

const baseUrl = `http://localhost:3030/data/offers`

export const getAll = () => {
    return request.get(`${baseUrl}?sortBy=_createdOn%20desc`)
}

export const create = (data) => {
    return request.post(baseUrl,data)
}

export const getOne = (offerId) => {
    return request.get(`${baseUrl}/${offerId}`)
}

export const edit = (offerId,data) => {
    return request.put(`${baseUrl}/${offerId}`,data)
}

export const deleteOne = (offerId) => {
    return request.del(`${baseUrl}/${offerId}`)
}