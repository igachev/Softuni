import * as request from './requester.js'

const baseUrl = `http://localhost:3030/data/applications`

export const addApplication = (data) => {
    return request.post(baseUrl,data)
}

export const getTotal = (offerId) => {
    return request.get(`${baseUrl}?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`)
}