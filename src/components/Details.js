import React from 'react';
import Movies from '../components/Movies'
import axios from "axios"

const MovieDetails = () => {

    var GetMovieId = (window.location.href);
    const MovieId = GetMovieId.split('?')[1];

    axios("https://api.themoviedb.org/3/movie/"+ MovieId +"?api_key=2f071489721e98854152263cf924a450&language=fr-FR").then(({data}) =>{
          let results = data.results}

    )

    return(
        <div>film details</div>
        
    )
}

export default MovieDetails;


