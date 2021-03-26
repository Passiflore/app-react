import React, { useEffect, useState} from 'react';
import Movies from '../components/Movies'
import axios from "axios"

const MovieDetails = () => {
    var GetMovieId = (window.location.href);
    const MovieId = GetMovieId.split('?')[1];
    const [data ,setData] = useState([])

    useEffect(() =>{
        axios
        .get (
            "https://api.themoviedb.org/3/movie/"+ MovieId +"?api_key=2f071489721e98854152263cf924a450&language=fr-FR"
            )
            .then((res) =>
          setData(res.data))
    },[])

console.log(data)
return(
    <div> 
        <ul>
            <li>{data.overview}</li> 
        </ul>
    </div>
    )
}

export default MovieDetails;
