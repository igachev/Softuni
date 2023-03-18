import * as authService from './authService.js'

const request = (method,url,data) => {
    const options = {}

    const token = authService.getToken()

    if(method !== 'GET') {
        options.method = method
        options.headers = {
            'Content-Type':'application/json'
        }
        options.body = JSON.stringify(data)

        if(token) {
            options.headers['X-Authorization'] = token
        }
    }

    return fetch(url, options)
    .then((response) => {
      if (!response.ok) {

        if(response.status === 403) {
            localStorage.removeItem('user')
        }

        return response.json()
        .then((error) => {
            throw new Error(error.message)
        })
      }

      return response.json();
    })
    .catch((error) => {
        alert(error)
      throw error;
    });
}

export const get = request.bind(null,'GET')
export const post = request.bind(null,'POST')
export const put = request.bind(null,'PUT')
export const del = request.bind(null,'DELETE')