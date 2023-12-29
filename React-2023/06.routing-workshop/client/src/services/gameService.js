import * as request from '../lib/request'
const baseUrl = 'http://localhost:3030/jsonstore'

export const getAll = async () => {
    const result = await request.get(`${baseUrl}/games`)
    return Object.values(result)
}

export const getOne = async (gameId) => {
    const result = await request.get(`${baseUrl}/games/${gameId}`)
    return result
}

export const create = async (gameData) => {
    const result = await request.post(`${baseUrl}/games`,gameData)
    return result
}