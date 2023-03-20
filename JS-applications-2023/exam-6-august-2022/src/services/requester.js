import * as authService from './authService.js'

const requester = (method,url,data) => {
    let token = authService.getToken()
    let options = {}

    if(method !== 'get') {
        options.method = method
        options.headers = {
            'Content-Type':'application/json'
        }

        if(token) {
            options.headers['X-Authorization'] = token
        }

        options.body = JSON.stringify(data)
    }

    return fetch(url,options)
    .then((res) => {
        if(!res.ok) {

            if(res.status === 403) {
                localStorage.removeItem('user')
            }

            return res.json()
            .then((error) => {
                throw new Error(error.message)
            })
        }

        return res.json()
    })
    .catch((err) => {
        alert(err.message)
        throw err
    })
    
}

export const get = requester.bind(null,'get')
export const post = requester.bind(null,'post')
export const put = requester.bind(null,'put')
export const del = requester.bind(null,'delete')