/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from './axios';

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);
    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            console.log(request);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);
// run once and never load it again, if there is a variable code runs again
    
    return (
        <div>
            <h2>{title}</h2>
          
            {/* container - posters */}

        </div>

    )

}

export default Row;