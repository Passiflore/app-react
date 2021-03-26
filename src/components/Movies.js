import { useEffect, useState, } from 'react';
import axios from "axios"
import Card from "./Card"



const Movies = () => {

    useEffect(() => {
        fetchTopRatedMovie();
      });
        const [topRatedMovies, settopRatedMovies] = useState([]);
    
        const topRatedMovieUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=2f071489721e98854152263cf924a450&language=en-US&page=1&include_adult=false'
        const fetchTopRatedMovie = () =>{
          axios(topRatedMovieUrl).then(data =>{ 
            settopRatedMovies(data.data.results)
          })
        }
    

    return (
        <div className="movies">
<<<<<<< Updated upstream
            <ul className="moviesList">
                {topRatedMovies.map((movie) => (
                    <Card movie={movie} key={movie.id}/>
                ))}
                
            </ul>
=======
            <h2>Les films les mieux notés</h2>
            <div className="moviesList">
                {topRatedMovies.map((movie) => (
                    <Card movie={movie} key={movie.id}/>
                ))}
                {topRatedMovies.map((movie) => (
                    <Details movie={movie} key={movie.id}/>
                ))}
            </div>
>>>>>>> Stashed changes
        </div>
    );
};

export default Movies;