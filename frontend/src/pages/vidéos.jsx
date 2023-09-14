import React, { useEffect, useState } from "react";
import axios from "axios";

const Vidéos =()=>{
    const [vidéos, setVidéos] = useState([]);
    useEffect(() => {
      axios
        .get("/api/vidéos")
        .then((response) => {
          console.log(response.data["hydra:member"]);
          setVidéos(response.data["hydra:member"]);
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
        <div className="grid grid-cols-3 mx-5 space-x-3 ">
          {vidéos.map((vidéo) => {
            return (
              <div key={vidéo.id} className="bg-purple-500  border lg">
                {vidéo.vidéos};
                <h1 className="text-white italic font-bold">Titre : {vidéo.title}</h1>
                <br />
                description: {vidéo.description}
                <br />
                <br />
              </div>
            );
          })}
        </div>
      </>
    )};
        export default Vidéos