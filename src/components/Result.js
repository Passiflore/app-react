import React from 'react';
import {NavLink} from "react-router-dom";

const Result = ({result}) => {
    return (
            <div className="movieCard">
                <div className="moviePosterPlace">

                    <div className="moviePosterOverlay"></div>

                    <img className="moviePoster" src={"https://image.tmdb.org/t/p/w500"+result.poster_path} alt = ""></img>

                    <div className="moviePosterOverlayText">
                            <NavLink exact to={"Details?"+result.id} className="SeeMore">Voir plus</NavLink>
                    </div>
                    <p className="movieTitle">{result.title}</p>
                </div>
            </div>
    );
};

export default Result;