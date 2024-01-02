import { useContext, useEffect, useMemo, useReducer, useState } from "react"
import { Link, useParams } from "react-router-dom"
import * as gameService from '../../services/gameService'
import * as commentService from '../../services/commentService'
import authContext from "../../contexts/authContext"
import useForm from "../../hooks/useForm"

const reducer = (state,action) => {
    switch(action?.type) {

        case 'GET_ALL_COMMENTS':
        return [...action.payload]

        case 'ADD_COMMENT':
            return [...state,action.payload]

        default:
            return state;
    }
    
}

export default function GameDetails() {

    const {email,userId} = useContext(authContext)
    const [game,setGame] = useState({})
   // const [comments,setComments] = useState([])
      const [comments,dispatch] = useReducer(reducer,[])
    const {gameId} = useParams()
    

    useEffect(() => {

        gameService.getOne(gameId)
        .then((result) => setGame(result));

        commentService.getAll(gameId)
        .then((result) => {
            dispatch({
                type: 'GET_ALL_COMMENTS',
                payload: result
            })
        });

    },[gameId])

   const addCommentHandler = async (values) => {
    
   const newComment = await commentService.create(
        gameId,
        values.comment
        )
        newComment.owner = {email}
       // setComments((state) => [...state,{...newComment,owner: {email}}])
      //  console.log(comments)
        dispatch({
            type: 'ADD_COMMENT',
            payload: newComment
        })
    }

    const initialValues = useMemo(() => ({
        comment: ''
    }),[])

    const {values,onChange,onSubmit} = useForm(initialValues,addCommentHandler)

    const isOwner = userId === game._ownerId;

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

            
            {isOwner && (
                <div className="buttons">
                <Link to={`/games/${gameId}/edit`} className="button">Edit</Link>
                <Link to={`/games/${gameId}/delete`} className="button">Delete</Link>
            </div>
            )}

        </div>

        
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={onSubmit}>
                
                <textarea name="comment" value={values.comment} onChange={onChange} placeholder="Comment......"></textarea>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>

    </section>
    )
}