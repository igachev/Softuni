import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import {Routes,Route} from "react-router-dom"
import Login from "./components/Login/Login"
import {AuthWrapper} from "./contexts/AuthContext"
import Logout from "./components/Logout/Logout"
import AllGames from "./components/AllGames/AllGames"
import GameDetails from "./components/GameDetails/GameDetails"
import CreateGame from "./components/CreateGame/CreateGame"
import EditGame from "./components/EditGame/EditGame"

function App() {
  

  return (
    <AuthWrapper>
    <>
     <Header />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<AllGames />} />
      <Route path="/games/:id/details" element={<GameDetails />} />
      <Route path="/games/:id/edit-game" element={<EditGame />} />
      <Route path="/games/create-game" element={<CreateGame />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
     </Routes>
    </>
    </AuthWrapper>
  )
}

export default App
