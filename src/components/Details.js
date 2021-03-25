import React from 'react';
import Movies from '../components/Movies';

const MovieDetails = () => {
    return (

        



        <div id="moviePopUp" class="overlay">
                <div class="popup">
                    <h2 className="movieTitle"></h2>
                    <a class="close" href="#">&times;</a>
                    {/*<div class="movieInformations">
                        <div>Titre original: {original_title}</div>
                        <div>Note: {vote_average}</div>
                        <div>Date de sortie: {release_date}</div>
                        <div>Synopsis: {overview}</div>
                    </div>*/}
                </div>
            </div>

    )
}

export default MovieDetails;

var getMovieId = (window.location.href);

var movieId = getMovieId.split ('?');
