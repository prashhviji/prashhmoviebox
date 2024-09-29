import React from 'react';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard.jsx';
import SearchIcon from './Search.svg';
// 94c7b409
const API_URL ='http://www.omdbapi.com?apikey=94c7b409';

const movies = {
    "Title" : "Amazing Spiderman Syndrome",
    "Year" : "2012",
    "imdbID" : "tt2588634",
    "Type" : "movie",
    "Poster" : "N/A"
}
function Body(){

    const [movies , setMovies] = useState([]) ;
    const [searchTerm, setSearchTerm] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL} &s=${title}`)
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect (()=>{
        searchMovies("Batman");
    },[]);
    return(
        <div className='app'>
            <h1>Prasanth Moviebox</h1>

            <div className="search">
                <input placeholder='Search the movies' value={searchTerm} onChange={(e) =>setSearchTerm(e.target.value)}></input>
                <img src={SearchIcon} alt="search" onClick={()=>{searchMovies(searchTerm)}}></img>
                
                
            </div>

            {movies?.length >0 ?(
                <div className='container'>
                    {movies.map((movie) =>(
                        <MovieCard movie ={movie} />
                    ))}
                </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                        
                        
                    </div>
                )}

            
        </div>

        
    )
}
export default Body