import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import AOS from "../../components/tools/aos/aos";
import NavBar from "../../components/tools/navbar-des";
import FooterDes from "../../components/layouts/desktop";
import ShowFr from "./country/fr";
import ShowEs from "./country/es";
import { MovieContext } from "../../components/context/movieProvider";

const Movies = () => {
  const {movies, setMovies} = useContext(MovieContext);

  const [selectCountry, setSelectCountry] = useState({
    fr: false,
    jp: false,
    ch: false,
    es: false,
  });

  const countrys = ["France", "Japon", "Chine", "Espagne"];

  useEffect(() => {
    axios
      .get("/api/movies")
      .then((response) => {
        // console.log(response.data["hydra:member"]);
        setMovies(response.data["hydra:member"]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        // console.log("bien joué");
      });

    AOS();
  }, []);

  const SelectCountry = (country) => {
    if (country === "France") {
      // alert("ok c'est good FR");
      setSelectCountry({
        fr: true,
        jp: false,
        ch: false,
        es: false,
      });
    } else if (country === "Espagne") {
      setSelectCountry({
        fr: false,
        jp: false,
        ch: false,
        es: true,
      });
    }
  };

  return (
    <>
      <NavBar />
      <main className="min-h-screen">
        <section className="grid grid-cols-4">
          <div className="grid grid-cols-2 bg-cyan-100">
            {countrys.map((country) => {
              return (
                <div>
                  <button
                    className="my-2 p-1 text-red-500 bg-green-500"
                    onClick={() => {
                      SelectCountry(country);
                    }}
                  >
                    {country}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="col-span-3">
            {selectCountry.fr ? <ShowFr /> : null}
            {selectCountry.es ? <ShowEs /> : null}
          </div>
        </section>
      </main>
      <FooterDes />
    </>
  );
};
export default Movies;
