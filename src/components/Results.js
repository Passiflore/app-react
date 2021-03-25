import React from 'react';
import Result from './Result'

const Results = ({ results }) => {
    return (
        <section className="results">
            {results.map((result,id)=>(
                <Result key={id} result={result}/>
            ))}
        </section>
    );
};

export default Results;