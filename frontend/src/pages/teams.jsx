import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/tools/navbar-des";
import FooterDes from "../components/layouts/desktop";


const Teams = () => {
  const [teams, SetTeams] = useState([]);
  useEffect(() => {
    axios
      .get("/api/teams")
      .then((response) => {
        console.log(response.data["hydra:member"]);
        SetTeams(response.data["hydra:member"]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("lets gooo");
      });
  }, []);
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="grid grid-cols-5 mx-5 space-x-3 space-y-5 glass">
        {teams.map((teams) => {
          return (
            <div key={teams.id} className="bg-purple-500  border lg">
              <img src={teams.picture} alt="" />
              <h1 className="text-white italic font-bold">
                Titre : {teams.title}
              </h1>
              <br />
              description: {teams.description}
              <br />
              NOM: {teams.name}
              <br />
              <video controls width="250">
                <source src={teams.pictures} type="video/mp4" />
              </video>
            </div>
          );
        })}
      </div>
      <FooterDes />
    </>
  );
};
export default Teams;
