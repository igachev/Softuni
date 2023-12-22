import Heading from "./Heading";
import Movie from "./Movie";

export default function MovieList(props) {
return (
    <div className="movie-list">
        <Heading>{props.headingText}</Heading>
        <ul>
        <li><Movie movieData={props.movies[0]} /></li>
        </ul>
    </div>
)
}