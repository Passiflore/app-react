import React from 'react';


const Card = (props) => {
    const {movie} = props;
    return (
        <a className="movieCard" href="#moviePopUp">
            <div className="moviePosterPlace">

                <div className="moviePosterOverlay"></div>

                <img className="moviePoster" src={"https://image.tmdb.org/t/p/w200"+movie.poster_path} alt = "movie poster"></img>
            
		        <div className="moviePosterOverlayText">
                    <a className="SeeMore" href="#moviePopUp">Voir plus</a>
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

        </a>
    );
};

export default Card;

