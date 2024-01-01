
const buildOptions = (data) => {
    const options = {}
    if(data) {
        options.body = JSON.stringify(data);
        options.headers = {
            'Content-Type': 'application/json'
        }
    }

    const accessToken = localStorage.getItem('accessToken')

    if(accessToken) {
        options.headers = {
            ...options.headers,
            'X-Authorization': accessToken
        }
    }

    return options;
}

 const request = async (method,url,data) => {
   try {
    const response = await fetch(url, {
        method,
        ...buildOptions(data)
    })

    if(response.status === 204) {
        return {}
    }

    const result = await response.json()

    if(!result.ok) {
    //    throw result
    }

    return result
   } catch (err) {
    console.log(err)
   }
}

export const get = request.bind(null,'GET')
export const post = request.bind(null,'POST')
export const put = request.bind(null,'PUT')
export const del = request.bind(null,'DELETE')