import React from 'react';

const Card = (props) => {
    const {movie} = props;
    return (
        <li className="card">
            <img src={movie.poster_path} alt=""/>
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