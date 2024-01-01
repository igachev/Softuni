import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as gameService from '../../services/gameService'
import * as commentService from '../../services/commentService'
import authContext from "../../contexts/authContext"

export default function GameDetails() {

    const {email} = useContext(authContext)
    const [game,setGame] = useState({})
    const [comments,setComments] = useState([])
    const {gameId} = useParams()

    useEffect(() => {

        gameService.getOne(gameId)
        .then((result) => setGame(result));

        commentService.getAll(gameId)
        .then((result) => setComments(result));

    },[gameId])

   const addCommentHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)

   const newComment = await commentService.create(
        gameId,
        
        formData.get('comment')
        )
    
        setComments((state) => [...state,{...newComment,owner: {email}}])
      //  console.log(comments)
        
    }

    return (
        <section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">

            <div className="game-header">
                <img className="game-img" src={game.imageUrl} />
                <h1>{game.title}</h1>
                <span className="levels">MaxLevel: {game.maxLevel}</span>
                <p className="type">{game.category}</p>
            </div>

            <p className="text">
                {game.summary}
            </p>

            
            <div className="details-comments">
                <h2>Comments:</h2>
                <ul>

                    {comments.map((comment) => (
                     <li key={comment._id} className="comment">
                     <p>{comment.owner.email}: {comment.text}</p>
                 </li>
                    ))}
                   
                </ul>
                
                {comments.length === 0 && (
                     <p className="no-comment">No comments.</p>
                )}
               
            </div>

            
            <div className="buttons">
                <a href="#" className="button">Edit</a>
                <a href="#" className="button">Delete</a>
            </div>
        </div>

        
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={addCommentHandler}>
                
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>

    </section>
    )
}