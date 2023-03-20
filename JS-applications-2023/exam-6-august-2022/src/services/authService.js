

export const getUser = () => {
    let serializedUser = localStorage.getItem('user')
    if(serializedUser) {
        let user = JSON.parse(serializedUser)
        return user;
    }
}

export const setUser = (userData) => {
    if(userData.accessToken) {
        localStorage.setItem('user',JSON.stringify(userData))
    }
}

export const getToken = () => {
   return getUser()?.accessToken
}