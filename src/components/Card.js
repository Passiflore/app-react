import React from 'react';


const Card = (props) => {
    const {movie} = props;
    return (
        <li className="card">
            <img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} alt = ""></img>
            <p>{movie.title}</p>
                <ul>
                    <li>{movie.original_title}</li>
                    <li>{movie.release_date}</li>
                    <li>{movie.overview}</li>
                </ul>
        </li>
    );
};

export default Card;