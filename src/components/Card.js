import React from 'react';


const Card = (props) => {
    const {movie} = props;
    return (
        <a className="movieCard" href="#movieCardPopup">
            <div className="moviePosterPlace">

                <div class="moviePosterOverlay"></div>

                <img className="moviePoster" src={"https://image.tmdb.org/t/p/w200"+movie.poster_path} alt = "movie poster"></img>
            
		        <div class="moviePosterOverlayText">
                    <a href="#see-more">Voir plus</a>
                </div>
	        </div>
            <p className="movieTitle">{movie.title}</p>
            <ul className="movieInformations">
                <li>Note: {movie.rating}</li>
                <li>Titre original: {movie.original_title}</li>
                <li>Date de sortie: {movie.release_date}</li>
                <li>Synopsis: {movie.overview}</li>
            </ul>
        </a>
    );
};

export default Card;
