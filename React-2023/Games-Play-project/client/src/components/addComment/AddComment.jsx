
export default function AddComment({
    addCommentSubmit,
    comment,
    setComment
}) {

    return (
        <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" onSubmit={addCommentSubmit}>
            <textarea name="comment"
             value={comment}
              onChange={(e) => setComment(e.target.value)} 
              placeholder="Comment......"></textarea>
            <input className="btn submit" type="submit" value="Add Comment" />
        </form>
    </article>
    )
    
}