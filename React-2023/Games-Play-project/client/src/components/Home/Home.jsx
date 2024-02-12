import { useEffect, useState } from "react"
import * as gameService from '../../services/gameService.js'
import LatestGameCard from "../LatestGameCard/LatestGameCard.jsx"

export default function Home() {

const [latestGames,setLatestGames] = useState([])

useEffect(() => {
 gameService.getLatestGames()
 .then((result) => {
   setLatestGames(result)
 })
},[])

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>

            {latestGames.length > 0
            ? latestGames.map((game) =>
            <LatestGameCard
            key={game._id}
            imageUrl={game.imageUrl}
            _id={game._id}
            title={game.title}
            />
            )
            : (<p className="no-articles">No games yet</p>)
        }
                
                
            </div>
        </section>
    )
}