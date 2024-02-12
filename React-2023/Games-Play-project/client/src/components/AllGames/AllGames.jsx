import { useEffect, useState } from "react"
import * as gameService from '../../services/gameService.js'
import GameCard from "../GameCard/GameCard.jsx"

export default function AllGames() {

const [games,setGames] = useState([])

useEffect(() => {
 gameService.getAll()
 .then((result) => setGames(result))
},[])

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            
            {games.length > 0
            ? (
                games.map((game) => (
                    <GameCard 
                    key={game._id} 
                    _id={game._id}
                    title={game.title}
                    category={game.category}
                    imageUrl={game.imageUrl}
                    />
                ))
            )
            : (
            <h3 className="no-articles">No articles yet</h3>
            )}
           

            
            
        </section>
    )
}