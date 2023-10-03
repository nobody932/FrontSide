import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import AOS from "../../components/tools/aos/aos";
import NavBar from "../../components/tools/navbar-des";
import FooterDes from "../../components/layouts/desktop";
import ShowPl from "./produits/pl";
import ShowChs from "./produits/chs";
import { NewsContext } from "../../components/context/newsProvider";
import ShowHw from "./produits/hw";

const News = () => {
  const { news, setNews } = useContext(NewsContext); //objet

  const [selectProduits, setSelectProduits] = useState({ //tableau
    pl: false,
    hw: false,
    chs: false,
    vtm: false,
  });
  const produits = ["Planche", "Hardwares", "Vêtements", "Chaussures"];

  useEffect(() => {
    axios
      .get("/api/news")
      .then((response) => {
        //  console.log(response.data["hydra:member"]);
        setNews(response.data["hydra:member"]);
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
        pl: true,
        chs: false,
        hw: false,
        vtm: false,
      });
    } else if (produits === "Chaussaures") {
      alert("ok c'est good FR");
      setSelectProduits({
        pl: false,
        chs: true,
        hw: false,
        vtm: false,
      });
    }
  };

  return (
    <>
      <NavBar />
      <main className="min-h-screen">
        <section className="grid grid-cols-4">
          <div className="grid grid-cols-2 bg-slate-700 ">
            {produits.map((produits) => {
              return (
                <div>
                  <button
                    className=" text-red-700 p-1 my-3 bg-amber-200"
                    onClick={() => {
                      SelectProduits(produits);
                    }}
                  >
                    {produits}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="col-span-3">
            {selectProduits.pl ? <ShowPl /> : null}
            {selectProduits.chs ? <ShowChs /> : null}
            {selectProduits.hw ?<ShowHw /> : null }
          </div>
        </section>
      </main>
      <FooterDes />
    </>
  );
};

export default News;
