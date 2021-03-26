import React from 'react';
import {NavLink} from "react-router-dom";

//Making every movie card appear, with a "See More" navLink to get to the movie details page

const Card = (props) => {
    const {movie} = props;

    return (
        <div className="movieCard">
            <div className="moviePosterPlace">

                <div className="moviePosterOverlay"></div>

                <img className="moviePoster" src={"https://image.tmdb.org/t/p/w200"+movie.poster_path} alt = "movie poster"></img>
            
		        <div className="moviePosterOverlayText">
                    <NavLink exact to={"Details?"+movie.id} className="SeeMore">Voir plus</NavLink>
                </div>
	        </div>

            <div className="movieTitle">{movie.title}</div>
            <div className="movieTitle">Sortie: {movie.release_date}</div>
        </div>
    );
};

export default Card;

