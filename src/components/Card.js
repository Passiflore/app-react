import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import MovieDetails from '../components/Details';

const Card = (props) => {
    const {movie} = props;
    return (
        <div className="movieCard" href="#moviePopUp">
            <div className="moviePosterPlace">

                <div className="moviePosterOverlay"></div>

                <img className="moviePoster" src={"https://image.tmdb.org/t/p/w200"+movie.poster_path} alt = "movie poster"></img>
            
		        <div className="moviePosterOverlayText">
                    <NavLink exact to={"Details?"+movie.id} className="SeeMore">Voir plus</NavLink>
                </div>
	        </div>

            <p className="movieTitle">{movie.title}</p>

            <div id="moviePopUp" class="overlay">
                <div className="popup">
                    <h2 className="movieTitle">{movie.title}</h2>
                    <a className="close" href="#">&times;</a>
                    <div className="movieInformations">
                        <div>Titre original: {movie.original_title}</div>
                        <div>Note: {movie.vote_average}</div>
                        <div>Date de sortie: {movie.release_date}</div>
                        <div>Synopsis: {movie.overview}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;

