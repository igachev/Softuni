import * as request from './requester.js'

const baseUrl = 'http://localhost:3030/data/gameComments'

export const addComment = async (username,comment,gameId) => {
    const result = await request.post(baseUrl,{gameId,username,comment})
    return result
}

export const getCommentsForSpecificGame = async (gameId) => {
    const query = new URLSearchParams({
        where: `gameId="${gameId}"`
    })
    const result = await request.get(`${baseUrl}?${query}`)
    return result
}