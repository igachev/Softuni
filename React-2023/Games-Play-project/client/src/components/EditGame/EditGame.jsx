import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import * as gameService from "../../services/gameService.js"
import EditGameForm from "../EditGameForm/EditGameForm.jsx"

export default function EditGame() {

const {id} = useParams()
const [game,setGame] = useState({title:'',category:'',maxLevel:'',imageUrl:'',summary:''})
const navigate = useNavigate()

useEffect(() => {
    gameService.getOne(id)
    .then((result) => setGame(result))
    .catch((err) => console.log(err))
},[id])

function onChange(e) {
    setGame((state) => ({
        ...state,
        [e.target.name]:e.target.value
    }))
}

async function onSubmit(e) {
    e.preventDefault()
    const editedGame = await gameService.editGame(id,game)
    navigate(`/games/${id}/details`)
}

    return (
<section id="edit-page" className="auth">
            <EditGameForm 
            game={game}
            onChange={onChange}
            onSubmit={onSubmit}
            />
        </section>
    )

}