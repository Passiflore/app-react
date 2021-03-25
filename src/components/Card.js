import React from 'react';


const Card = (props) => {
    const {movie} = props;
    return (
        <div className="card">
            <img src={"https://image.tmdb.org/t/p/w400"+movie.poster_path} alt = ""></img>
            <div class="desc_movie"><p>{movie.title}</p>
                <ul>
                    <li>{movie.original_title}</li>
                    <li>{movie.release_date}</li>
                    <li>{movie.overview}</li>
                </ul></div>
            
        </div>
    );
};

export default Card;