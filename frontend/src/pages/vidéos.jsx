import React, { useEffect, useState } from "react";
import axios from "axios";

const Vidéos =()=>{
    const [vidéos, setVidéos] = useState([]);
    useEffect(() => {
      axios
        .get("/api/vidéos")
        .then((response) => {
          // console.log(response.data["hydra:member"]);
          setArticles(response.data["hydra:member"]);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log("bien joué");
        });
    }, []);
    return(
        <h1>helllo </h1>
    )
}

export default Vidéos