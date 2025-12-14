import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className="ml-5 text-white">
            <h2 className="text-2xl font-bold">{title}</h2>
            <div className="flex overflow-y-hidden overflow-x-scroll p-5 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {movies.map((movie) => (
                    ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                        <img
                            key={movie.id}
                            className={`object-contain w-full max-h-[100px] mr-2 transition-transform duration-450 hover:scale-105 cursor-pointer ${isLargeRow && "max-h-[250px] hover:scale-110"}`}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                        />
                    )
                ))}
            </div>
        </div>
    );
}

export default Row;
