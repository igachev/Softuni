import * as request from './requester.js'

const baseUrl = 'http://localhost:3030/data/albums'

export const getAll = () => {
    return request.get(`${baseUrl}?sortBy=_createdOn%20desc`)
}

export const createAlbum = (data) => {
    return request.post(baseUrl,data)
}

export const getOneAlbum = (albumId) => {
    return request.get(`${baseUrl}/${albumId}`)
}

export const editAlbum = (albumId,data) => {
    return request.put(`${baseUrl}/${albumId}`,data)
}

export const deleteAlbum = (albumId) => {
    return request.del(`${baseUrl}/${albumId}`)
}
