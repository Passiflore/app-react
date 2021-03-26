import React, { useEffect, useState} from 'react';
import NavBar from '../components/Navigation';
import axios from "axios"


//get the movie ID from the movie Card (in Card.js) and add it in the API adress to get the movie details
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

//Displaying the Details page according to the movie ID we get in Card page when clicking on a card
return(
    <div className="container">
    <header>
        <NavBar  />
    </header>
    <div className="detailsContainer">
        <h2 className="detailsMainTitle">{data.title}</h2>
        <main className="detailsMovieContainer">
            <div className="detailsMoviePoster">
                <img className="detailsMoviePoster" src={"https://image.tmdb.org/t/p/w200"+data.poster_path} alt = "movie poster"></img>
            </div> 
            <div className="detailsList">
                <p className="detailsListText">Titre original: {data.original_title}</p> 
                <p className="detailsListText">Date de sortie: {data.release_date}</p> 
                <p className="detailsListText">Genre: </p> 
                <p class="detailsListText">Synopsis: {data.overview}</p> 
                <p className="detailsListText">Durée: {data.runtime} minutes</p> 
                <div className="detailsListText">Site officiel: <a href={data.homepage}>{data.homepage}</a></div>
                <p className="detailsListText">rating: 	&#x2B50; {data.vote_average} /10</p>
            </div>
        </main>
    </div>
</div>
    )
}

export default MovieDetails;
