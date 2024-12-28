// import React from "react";
// import MovieCard from "./MovieCard.js";
// const MovieList = ({ movies }) => {
//     if (!movies || movies.length === 0) {
//       return <p>No movies to display</p>;
//     }
//     return(
//         <div className="movie-list">
//         {movies.map((movie) => (
//         <MovieCard key={movie.id} movie={movie} />
//       ))}
//         </div>
//     )

// }
// export default MovieList;import React from 'react'
import MovieCard from './MovieCard'

function MovieList(props) {
    const{movies}=props;
  return (
    <div className='movie-list'>
        {
            movies.map((movie)=>(
                <MovieCard key={movie.id} movie={movie}/>
            ))
        }

    </div>
  )
}

export default MovieList