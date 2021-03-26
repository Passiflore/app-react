import { useEffect, useState, } from 'react';
import axios from "axios"
import Card from "./Card"

const Movies = () => {

    useEffect(() => {
        fetchTopRatedMovie();
      });
        const [topRatedMovies, settopRatedMovies] = useState([]);
    
        const topRatedMovieUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=2f071489721e98854152263cf924a450&language=fr-FR&page=1&include_adult=false'
        const fetchTopRatedMovie = () =>{
          axios(topRatedMovieUrl).then(data =>{ 
            settopRatedMovies(data.data.results)
          })
        }
    useEffect(() => {
        fetchupComming();
        });
        const [upComming, setupComming] = useState([]);
            
        const upCommingUrl = 'https://api.themoviedb.org/3/movie/upcoming?api_key=2f071489721e98854152263cf924a450&language=en-US&page=1'
        const fetchupComming = () =>{
        axios(upCommingUrl).then(data =>{ 
            setupComming(data.data.results)
        })
        }
    

    return (
        <div className="movies">
            <h2>Les films les mieux notés</h2>
            <ul className="moviesList">
                {topRatedMovies.map((movie) => (
                    <Card movie={movie} key={movie.id}/>
                ))}
            </ul>
            <h2>Les films à venir</h2>
            <ul className="moviesList">
                {upComming.map((movie) => (
                    <Card movie={movie} key={movie.id}/>
                ))}
            </ul>
        </div>
    );
};

export default Movies;