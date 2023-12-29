import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import {Routes,Route} from 'react-router-dom'
import GameList from "./components/game-list/GameList"
import GameCreate from "./components/GameCreate/GameCreate"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import GameDetails from "./components/GameDetails/GameDetails"


function App() {
  

  return (
   <div id="box">
    <Header />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<GameList />} />
      <Route path="/games/create" element={<GameCreate />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/games/:gameId" element={<GameDetails />} />
    </Routes>

   </div>
  )
}

export default App
