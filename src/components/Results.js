import React from 'react';
import Result from './Result'

//Get the results from the TMDb API

const Results = ({ results }) => {
    return (
    <div className="j">
        <section className="results moviesList">
            {results.map((result,id)=>(
                <Result key={id} result={result}/>
            ))}
        </section>
    </div>
    );
};

export default Results;