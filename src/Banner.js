import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from './axios';
import requests from './Requests';

function Banner() {
    const [movie, setMovie]= useState([]);
    useEffect(() => {
        async function fetchData() {
            const request=await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);
    console.log(movie);

    function truncate(string, n){
        return string?.length > n ? string.substr(0,n-1)+ '.':string;    
    }
    return (
    <header className="banner" style={{
        backgroundSize: "cover", 
        backgroundImage: `url("https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}")`,
        backgroundPosition: "center center"
    }}>
        <div className="banner_contents">
            <h1 className="title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="buttons">
                <button className="b_button">Play</button>
                <button className="b_button">My List</button>
            </div>
            <h1 className=" description">{truncate(movie?.overview,120)}</h1>
        </div>
        <div className="fadebottom"/>
    </header>
  );
}

export default Banner;