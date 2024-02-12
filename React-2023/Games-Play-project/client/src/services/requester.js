
//const baseUrl = 'http://localhost:3030'

async function request(method,url,data) {

    const accessToken = localStorage?.getItem('accessToken')

    const headers = {
      'Content-Type': 'application/json'
    }

    if(accessToken) {
      headers['X-Authorization'] = accessToken
    }

  try {
    const response = await fetch(url, {
        method: method,
        headers:headers,
        body: JSON.stringify(data)
       })

       if(response.ok === false) {
        
        if(response.status === 403 || response.status === 401) {
            localStorage.removeItem('accessToken')
        }
       
        const error = await response.json()
        throw new Error(error.message)
       }
    
       const result = await response.json()
       return result

  } catch (err) {
    throw(err)
  }
}

export const get = request.bind(null,'GET')
export const post = request.bind(null,'POST')
export const put = request.bind(null,'PUT')
export const del = request.bind(null,'DELETE')