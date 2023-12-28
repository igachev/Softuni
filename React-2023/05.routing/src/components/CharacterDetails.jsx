import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function CharacterDetails() {
    const [character,setCharacter] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}`)
    .then((res) => {
        if(!res.ok) {
            throw new Error('Not Found')
        }
       return res.json()
    })
    .then((result) => setCharacter(result))
    .catch((error) => {
        navigate('/')
    })
},[id])

    return (
        <>
        <h1>{character.name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus explicabo quidem fugit, accusamus corrupti obcaecati voluptatibus. Dignissimos, ipsa. Perspiciatis, optio.</p>
        </>
    )
}