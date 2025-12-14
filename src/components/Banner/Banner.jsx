import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import requests from '../../api/requests';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header
            className="relative text-white object-contain h-[448px]"
            style={{
                backgroundSize: "cover",
                backgroundImage: movie?.backdrop_path ? `url(
          "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )` : "none",
                backgroundPosition: "center center",
            }}
        >
            <div className="ml-8 pt-36 h-[190px]">
                <h1 className="text-5xl font-bold pb-1">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="pt-5">
                    <button className="cursor-pointer text-white outline-none border-none font-bold rounded-sm px-8 py-2 mr-4 bg-[rgba(51,51,51,0.5)] hover:text-black hover:bg-[#e6e6e6] transition-all duration-200">
                        Play
                    </button>
                    <button className="cursor-pointer text-white outline-none border-none font-bold rounded-sm px-8 py-2 mr-4 bg-[rgba(51,51,51,0.5)] hover:text-black hover:bg-[#e6e6e6] transition-all duration-200">
                        My List
                    </button>
                </div>
                <h1 className="w-[45rem] leading-[1.3] pt-4 text-sm max-w-[360px] h-[80px]">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className="absolute bottom-0 h-[7.4rem] w-full bg-gradient-to-t from-[#111] to-transparent" />
        </header>
    );
}

export default Banner;
