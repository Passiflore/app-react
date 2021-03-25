import React from 'react';

const Result = ({result}) => {
    return (
        <div className="result">
            <img src={"https://image.tmdb.org/t/p/w500"+result.poster_path} alt = ""></img>
            <h3>{result.title}</h3>
        </div>
    );
};

export default Result;