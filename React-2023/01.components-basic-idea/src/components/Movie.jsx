export default function Movie(props) {
    return (
        <div>
            <article>
                <h3>{props.movieData.title}</h3>
                <p>{props.movieData.year}</p>
                <p>Cast:{props.movieData.actors}</p>
            </article>
        </div>
    )
}