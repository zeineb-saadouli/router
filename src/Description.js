import React from 'react'
import { useParams,Link} from "react-router-dom";


function Description({movies}) {
    const { id } = useParams();
    const movie = movies.find((movie) => movie.id === parseInt(id));
   
    if (!movie) {
      return <h2>Movie not found!</h2>;
    }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <video controls> 
        <source src={movie.movieTrailer} type=''>
        </source> 
        </video>
      <Link to="/">Back to Home</Link>
    </div>
  )
} 
export default Description