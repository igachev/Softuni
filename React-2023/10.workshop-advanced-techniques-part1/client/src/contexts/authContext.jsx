import { createContext,useState } from "react";
import * as authService from '../services/authService'
import {useNavigate} from 'react-router-dom'
import usePersistedState from "../hooks/usePersistedState";


 const AuthContext = createContext()
 AuthContext.displayName = 'AuthContext'

 export const AuthProvider = ({
    children,
    
 }) => {
      
  const [auth,setAuth] = usePersistedState('auth',{})
  const navigate = useNavigate()

  const loginSubmitHandler = async (values) => {
   const result = await authService.login(values.email,values.password)
   //console.log(result)
   setAuth(result)
   localStorage.setItem('accessToken',result.accessToken)
   navigate('/')
  }

  const registerSubmitHandler = async (values) => {
    //console.log(values)
    const result = await authService.register(values.email,values.password)
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
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.email,
    email: auth.email,
    userId: auth._id,
    isAuthenticated: !!auth.email,
  }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
 }

 export default AuthContext