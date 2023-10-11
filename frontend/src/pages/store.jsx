import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/tools/navbar-des";
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
        console.log("bien jouer bg");
      });
  }, []);
  return (
    <>
    <NavBar />
  
      <div className="grid grid-cols-2 mx-5 space-x-3  ">
        {store.map((store) => {
          return (
            <div key={store.id} className="bg-purple-500 glass  border lg">
              <img src={store.storePicture} alt="" />
              <h1 className="text-white italic font-bold">
                Titre : {store.storeName}
              </h1>
              <br />
              Adresse: {store.adress}
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
