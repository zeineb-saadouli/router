import React from "react";
import {Link} from "react-router-dom"
const MovieCard=({movie}) =>{
    return(
        <div className="movie-card">
            <h1>{movie.title}</h1>
            <img src={movie.urlImg} alt={movie.title}/>
            <p>description:{movie.description}</p>
            <p>Rating: {movie.rating}</p>
            <Link to={`/movie/${movie.id}`}>View Details</Link>
        </div>
    )
}
export default MovieCard;
