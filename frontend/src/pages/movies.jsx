import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "../components/tools/aos/aos";
import NavBar from "../components/tools/navbar-des";

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
      <><div><NavBar/></div>
        <div className="grid grid-cols-2 mx-5 space-x-3 "><AOS/>
          {movies.map((movies) => {
            return (
              <div data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0" key={movies.id} className="bg-purple-500  border lg">
              <video src={movies.part} ></video> 
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