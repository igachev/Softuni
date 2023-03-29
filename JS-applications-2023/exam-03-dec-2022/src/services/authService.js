

export const getUser = () => {
    let serializedUser = localStorage.getItem('user')
    if(serializedUser) {
        let user = JSON.parse(serializedUser)
        return user;
    }
}

export const setUser = (data) => {
    if(data.accessToken) {
        localStorage.setItem('user',JSON.stringify(data))
    }
}

export const getToken = () => {
    return getUser()?.accessToken
}