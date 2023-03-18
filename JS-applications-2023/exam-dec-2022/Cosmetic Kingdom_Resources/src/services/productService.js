import * as request from '../services/requester.js'

const baseUrl = 'http://localhost:3030/data/products'

export const allProducts = () => {
    return request.get(`${baseUrl}?sortBy=_createdOn%20desc`)
}

export const createProduct = (productData) => {
    return request.post(baseUrl,productData)
}

export const getOne = (productId) => {
    return request.get(`${baseUrl}/${productId}`)
}

export const editProduct = (productId,productData) => {
    return request.put(`${baseUrl}/${productId}`,productData)
}

export const deleteOne = (productId) => {
    return request.del(`${baseUrl}/${productId}`)
}