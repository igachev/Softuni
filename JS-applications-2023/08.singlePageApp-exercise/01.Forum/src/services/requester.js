
const request = (method,url,data) => {
let options = {}

if(method !== 'get') {
    options.method = method
    options.headers = {'Content-Type':'application/json'}
    options.body = JSON.stringify(data)
}

return fetch(url,options)
.then((res) => res.json())
}

export const get = request.bind(null,'get')
export const post = request.bind(null,'post')
