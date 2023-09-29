import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import AOS from "../../components/tools/aos/aos";
import NavBar from "../../components/tools/navbar-des";
import FooterDes from "../../components/layouts/desktop";
import ShowBr from "./produits/br";
import ShowChs from "./produits/chs";
import { NewsContext } from "../../components/context/newsProvider";

const News = () => {
  const [news, SetNews] = useState(NewsContext);

  const [selectProduits, setSelectProduits] = useState({
    br: false,
    hw: false,
    ch: false,
    es: false,
  });
  const produits = ["Planche", "Hardwares", "Vêtements", "Chaussures"];

  useEffect(() => {
    axios
      .get("/api/news")
      .then((response) => {
        console.log(response.data["hydra:member"]);
        SetNews(response.data["hydra:member"]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("lets gooo");
      });

    AOS();
  }, []);

  const SelectProduits = (produits) => {
    if (produits === "Planche") {
      // alert("ok c'est good FR");
      setSelectProduits({
        br: true,
        chs: false,
        hw: false,
        vtm: false,
      });
    } else if (produits === "Chassaures") {
      setSelectProduits({
        br: false,
        chs: true,
        ch: false,
        es: false,
      });
    }
  };

  return (
    <>
      <NavBar />
      <main className="min-h-screen">
        <section className="grid grid-cols-4">
          <div className="grid grid-cols-2 bg-slate-700 ">
            {produits.map((produit) => {
              return (
                <div>
                  <button className=" text-red-700 p-1 my-3 bg-amber-200"
                  onClick={()=> {SelectProduits(produit);}}>
                 {produit}
                  </button>
                </div>
              );
            })}

          </div>
          <div className="col-span-3">
            {selectProduits.br ? <ShowBr /> : null}
            {selectProduits.chs ? <ShowChs /> : null}
          </div>
        </section>
      </main>
      <FooterDes />
    </>
  );
};

export default News;
