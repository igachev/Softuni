import * as request from './requester.js'

const baseUrl = 'http://localhost:3030/data/games'

export const getAll = async () => {
    const result = await request.get(baseUrl)
    return result
}

export const getOne = async (gameId) => {
    const result = await request.get(`${baseUrl}/${gameId}`)
    return result
}

export const createGame = async (title,category,maxLevel,imageUrl,summary) => {
    const gameData = {title,category,maxLevel,imageUrl,summary}
    const result = await request.post(`${baseUrl}`,gameData)
    return result
}

export const deleteGame = async (gameId) => {
    const result = await request.del(`${baseUrl}/${gameId}`)
    return result
}

export const editGame = async (gameId,gameData) => {
    const result = await request.put(`${baseUrl}/${gameId}`,gameData)
    return result
}

export const getLatestGames = async() => {
    const query = new URLSearchParams({
        offset: 0,
        pageSize:3,
        sortBy: `_createdOn`
    })
    const result = await request.get(`${baseUrl}?${query} desc`)
    return result
}