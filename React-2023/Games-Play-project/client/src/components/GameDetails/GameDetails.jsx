import { Link, useNavigate, useParams } from "react-router-dom"
import * as gameService from '../../services/gameService.js'
import * as commentService from '../../services/commentService.js'
import { useContext, useEffect, useState } from "react"
import AuthContext from "../../contexts/AuthContext.jsx"
import AddComment from "../addComment/addComment.jsx"



export default function GameDetails() {

    const {id} = useParams()
    const [game,setGame] = useState({})
    const [comment,setComment] = useState('')
    const [comments,setComments] = useState([])
    const {username,userId} = useContext(AuthContext)
    const navigate = useNavigate()
    
    useEffect(() => {
        gameService.getOne(id)
        .then((result) => setGame(result))
        .catch((err) => console.log(err))
    },[id]);

    useEffect(() => {
        commentService.getCommentsForSpecificGame(id)
        .then((result) => setComments(result))
        .catch((err) => console.log(err))
    },[])

   async function addCommentSubmit(e) {
    e.preventDefault()
    const newComment = await commentService.addComment(username,comment,id)

    setComments((oldComments) => [
        ...oldComments,
        newComment
    ])

    setComment('')
    }

    async function deleteGame() {
        const confirmDelete = confirm(`Are you sure you want to delete ${game.title}?`)
        if(confirmDelete) {
            const deletedGame = await gameService.deleteGame(id)
            navigate('/games')
        }
    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.genre}</p>
                </div>

                <p className="text">
                  {game.summary}
                </p>

                
                
                    <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        
                        {comments.length > 0 && (
                        comments.map((comment) => (
                            <li key={comment._id} className="comment">
                            <p>{comment.username}: {comment.comment}</p>
                        </li>
                        ))
                        )}
                       
                       
                    </ul>
                   
                   {comments.length === 0 && (
                    <p className="no-comment">No comments.</p>
                   )}
                    
                </div>
                

                
                {game._ownerId === userId && (
                    <div className="buttons">
                    <Link to={`/games/${id}/edit-game`} className="button">Edit</Link>
                    <button className="button" onClick={deleteGame}>Delete</button>
                </div>
                )}

            </div>

            
            {game._ownerId !== userId && userId && (
              <AddComment 
              addCommentSubmit={addCommentSubmit} 
              comment={comment}
              setComment={setComment}
              />
            )}

        </section>
    )
}