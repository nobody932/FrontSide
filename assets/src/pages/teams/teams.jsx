import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../../components/tools/navbar-des";
import FooterDes from "../../components/layouts/desktop";
import DarkHeaderD from "../../components/tools/headermob/header";
import DarkFooterA from "../../components/layouts/desktop";
import DarkTeamA from "../../components/tools/cards/teamscard";
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
        <DarkHeaderD/>
      <section style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1543386800-8662ead342ce?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
         
        }} >
          <DarkTeamA/>
      <div className="grid grid-cols-5 mx-5   space-x-3 space-y-5 glass">
        {teams.map((teams) => {
          return (
            <div key={teams.id} className=" border bg-indigo-500 lg">
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
      </div></section>
      <DarkFooterA/>
    </>
  );
};
export default Teams;
