import React, { useEffect, useState } from "react";
import axios from "axios";

const Movies =()=>{
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      axios
        .get("/api/movies")
        .then((response) => {
          console.log(response.data["hydra:member"]);
          setMovies(response.data["hydra:member"]);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log("bien joué");
        });
    }, []);
    return (
      <>
        <div className="grid grid-cols-2 mx-5 space-x-3 ">
          {movies.map((movies) => {
            return (
              <div key={movies.id} className="bg-purple-500  border lg">
              <video src={movies.vidéos} alt=""></video> 
                <h1 className="text-white italic font-bold">Titre : {movies.title}</h1>
                <br />
               <p>description: {movies.description}</p> 
                <br />
                <br />
              </div>
            );
          })}
        </div>
      </>
    )};
 export default Movies