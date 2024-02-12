
export default function EditGameForm({
    game,
    onChange,
    onSubmit
}) {

    return (
<form id="edit" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input 
                    type="text" 
                    id="title" 
                    name="title" 
                    value={game.title}
                    onChange={onChange} 
                    />

                    <label htmlFor="category">Category:</label>
                    <input 
                    type="text" 
                    id="category" 
                    name="category" 
                    value={game.category}
                    onChange={onChange} 
                    />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input 
                    type="number" 
                    id="maxLevel" 
                    name="maxLevel" 
                    min="1" 
                    value={game.maxLevel} 
                    onChange={onChange}
                    />

                    <label htmlFor="game-img">Image:</label>
                    <input 
                    type="text" 
                    id="imageUrl" 
                    name="imageUrl"
                    value={game.imageUrl} 
                    onChange={onChange}
                     />

                    <label htmlFor="summary">Summary:</label>
                    <textarea 
                    name="summary" 
                    id="summary" 
                    value={game.summary} 
                    onChange={onChange}
                    ></textarea>
                    
                    <input 
                    className="btn submit" 
                    type="submit" 
                    />

                </div>
            </form>
    )

}