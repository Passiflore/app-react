import { useEffect, useState, } from 'react';
import axios from "axios"
import Card from "./Card"


const Movies = () => {
    const [data, setData]= useState([])

    useEffect(() =>{
        axios
            .get(
                'https://api.themoviedb.org/3/movie/upcoming?api_key=2f071489721e98854152263cf924a450'
            )
            .then((res)=> {
                setData(res.data.results)
            })

    }, []);
    




    return (
        <div className="movies">
            <ul className="movies-list">
                {data.map((movie) => (
                    <Card movie={movie} key={movie.id}/>
                ))}
            </ul>
        </div>
    );
};

export default Movies;