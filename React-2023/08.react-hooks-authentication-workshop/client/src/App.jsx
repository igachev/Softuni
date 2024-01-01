import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import {Routes,Route, useNavigate} from 'react-router-dom'
import GameList from "./components/game-list/GameList"
import GameCreate from "./components/GameCreate/GameCreate"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import GameDetails from "./components/GameDetails/GameDetails"
import { useState } from "react"
import authContext from './contexts/authContext'
import * as authService from './services/authService'
import Logout from "./components/Logout/Logout"

function App() {
  
  const [auth,setAuth] = useState(() => {
    localStorage.removeItem('accessToken')
    return {}
  })
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
    isAuthenticated: !!auth.email,
  }

  return (
    <authContext.Provider value={values}>
   <div id="box">
    <Header />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<GameList />} />
      <Route path="/games/create" element={<GameCreate />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/games/:gameId" element={<GameDetails />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>

   </div>
   </authContext.Provider>
  )
}

export default App
