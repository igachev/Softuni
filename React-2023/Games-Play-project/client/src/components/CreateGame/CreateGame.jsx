import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import * as gameService from "../../services/gameService.js"

const CreateGameFormKeys = {
    Title: 'title',
    Category: 'category',
    MaxLevel: 'maxLevel',
    ImageUrl: 'imageUrl',
    Summary: 'summary'
}

export default function CreateGame() {

const navigate = useNavigate()
const {values,onChange,onSubmit} = useForm({
    [CreateGameFormKeys.Title]: '',
    [CreateGameFormKeys.Category]: '',
    [CreateGameFormKeys.MaxLevel]: '',
    [CreateGameFormKeys.ImageUrl]: '',
    [CreateGameFormKeys.Summary]: ''
},
    createGame)

async function createGame(values) {
 await gameService.createGame(values.title,values.category,values.maxLevel,values.imageUrl,values.summary)
 navigate('/games')
}


    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input 
                    type="text"
                     id="title" 
                     name={CreateGameFormKeys.Title}
                     placeholder="Enter game title..." 
                     value={values[CreateGameFormKeys.Title]}
                     onChange={onChange}
                     />

                    <label htmlFor="category">Category:</label>
                    <input 
                    type="text" 
                    id="category" 
                    name={CreateGameFormKeys.Category}
                    placeholder="Enter game category..."
                    value={values[CreateGameFormKeys.Category]} 
                    onChange={onChange}
                    />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input 
                    type="number" 
                    id="maxLevel" 
                    name={CreateGameFormKeys.MaxLevel}
                    min="1" 
                    placeholder="1"
                    value={values[CreateGameFormKeys.MaxLevel]} 
                    onChange={onChange}
                    />

                    <label htmlFor="game-img">Image:</label>
                    <input 
                    type="text" 
                    id="imageUrl" 
                    name={CreateGameFormKeys.ImageUrl} 
                    placeholder="Upload a photo..." 
                    onChange={onChange}
                    value={values[CreateGameFormKeys.ImageUrl]}
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea 
                    name={CreateGameFormKeys.Summary}
                    onChange={onChange}
                    value={values[CreateGameFormKeys.Summary]}
                     id="summary"
                     ></textarea>
                    <input className="btn submit" type="submit" value="Create Game" />
                </div>
            </form>
        </section>
    )
}