import React from 'react';
import { useEffect } from 'react';
// 94c7b409
const API_URL ='http://www.omdbapi.com?apikey=94c7b409';

const movie1 = {
    "Title" : "Amazing Spiderman Syndrome",
    'Year' : "2012",
    "imdbID" : "tt2588634",
    "Type" : "movie",
    "Poster" : "N/A"
}
function Body(){

    

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL} &s=${title}`)
        const data = await response.json();
        console.log(data.Search);
    }

    useEffect (()=>{
        searchMovies('spiderman')
    })
    return(
        <div className='app'>
            <h1>MovieLand</h1>

            <div className="search">
                <input placeholder='Search for Movies' value={'superman'} onChange={() =>{}}></input>
                <img src={SearchIcon}></img>
                
            </div>

            <div className='container'>
                <div className='movie'>
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                </div>
            </div>
        </div>

        
    )
}
export default Body