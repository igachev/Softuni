import * as request from "./requester.js"

const baseUrl = 'http://localhost:3030/users'

export const login = async (email,password) => {
    const result = await request.post(`${baseUrl}/login`,{email,password})
    return result;
}

export const logout = async () => {
    const result = await request.get(`${baseUrl}/logout`)
    return result
}