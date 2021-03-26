import { useEffect, useState, } from 'react';
import axios from "axios"
import Card from "./Card"

//Fetching the most popular movies from the TMDb API
//With this, we can display page 1 of the most popular movies in our website

const Movies = () => {

    useEffect(() => {
        fetchPopularMovie();
      });
        const [PopularMovies, setPopularMovies] = useState([]);
    
        const PopularMovieUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=2f071489721e98854152263cf924a450&language=fr-FR&page=1&include_adult=false'
        
        const fetchPopularMovie = () =>{
          axios(PopularMovieUrl).then(data =>{ 
            setPopularMovies(data.data.results)
          })
        }
    
    return (
        /*Make the most popualr movies appear in our Card.js page*/
        <div className="movies">
            <h2>Les films les plus populaires :</h2>
            <ul className="moviesList">
                {PopularMovies.map((movie) => (
                    <Card movie={movie} key={movie.id}/>
                ))}
            </ul>
        </div>
    );
};

export default Movies;