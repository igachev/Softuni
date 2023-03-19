import * as authService from './authService.js'

const request = (method,url,data) => {
let options = {}
let token = authService.getToken()

if(method !== 'get') {
    options.method = method
    options.headers = {'Content-Type':'application/json'}

    options.body = JSON.stringify(data)

if(token) {
    options.headers['X-Authorization'] = token;
}
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

export const get = request.bind(null,'get')
export const post = request.bind(null,'post')
export const put = request.bind(null,'put')
export const del = request.bind(null,'delete')