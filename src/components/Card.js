import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import Details from '../components/Details';

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
        </div>
    );
};

export default Card;

