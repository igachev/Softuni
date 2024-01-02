import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import {Routes,Route, useNavigate} from 'react-router-dom'
import GameList from "./components/game-list/GameList"
import GameCreate from "./components/GameCreate/GameCreate"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import GameDetails from "./components/GameDetails/GameDetails"

import {AuthProvider} from './contexts/authContext'

import Logout from "./components/Logout/Logout"
import GameEdit from "./components/GameEdit/GameEdit"

function App() {


  return (
    <AuthProvider>
   <div id="box">
    <Header />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<GameList />} />
      <Route path="/games/create" element={<GameCreate />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/games/:gameId" element={<GameDetails />} />
      <Route path="/games/:gameId/edit" element={<GameEdit />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>

   </div>
   </AuthProvider>
  )
}

export default App
