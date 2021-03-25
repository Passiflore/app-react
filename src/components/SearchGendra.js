import { useEffect, useState, } from 'react';
import axios from "axios"
import React from 'react';

const SearchGendra = () => {
    const [data, setData]= useState([])

    useEffect(() =>{
        axios
        .get(
            'https://api.themoviedb.org/3/discover/movie?api_key=2f071489721e98854152263cf924a450&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
        )
        .then((res)=> {
            setData(res.data.results)
        })
    }, []);
    return (
        <div>
            {data.map((movie2)=>(
                <li>
                    {movie2.genre_ids}
                </li>
            ))}
        </div>
    );
};

export default SearchGendra;