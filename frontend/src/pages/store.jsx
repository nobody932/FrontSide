import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/tools/navbar-des";
import AOS from "../components/tools/aos/aos";
import FooterDes from "../components/layouts/desktop";
const Store = () => {
  const [store, setStore] = useState([]);
  useEffect(() => {
    axios
      .get("/api/stores")
      .then((response) => {
           console.log(response.data["hydra:member"]);
        setStore(response.data["hydra:member"]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("bien jouer bg ");
      });
  }, []);
  return (
    <>
    <NavBar />
  
      <div className="grid grid-cols-3 mx-5 space-x-3  ">
        {store.map((stores) => {
          return (
            <div key={stores.id} className="bg-purple-500 glass  border lg">
              <img src={stores.storepicture} alt="" />
              <h1 className="text-white italic font-bold">
                Titre : {stores.storename}
              </h1>
              <br />
              Adresse: {stores.adress}
              <br />
              <br />
            </div>
          );
        })}
      </div>
      <FooterDes />
    </>
  );
};

export default Store;
