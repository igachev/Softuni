import { createContext } from "react";
import { usePersistedState } from "../hooks/usePersistedState";
import * as userService from '../services/userService.js'
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

export const AuthWrapper = ({children}) => {

const [auth,setAuth] = usePersistedState('auth',{})
const navigate = useNavigate()

const loginHandler = async (values) => {
const result = await userService.login(values.email,values.password)
setAuth(result)
localStorage.setItem('accessToken',result.accessToken)
navigate('/')
}

const logoutHandler = () => {
    setAuth({})
    localStorage.removeItem('accessToken')
    navigate('/')
}

const values = {
    loginHandler,
    logoutHandler,
    username: auth.email,
    email: auth.email,
    userId: auth._id,
    isAuthenticated: !!auth.accessToken
}

return (
    <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
)

}

export default AuthContext