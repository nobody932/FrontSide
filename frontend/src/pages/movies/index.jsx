import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import AOS from "../../components/tools/aos/aos";
import NavBar from "../../components/tools/navbar-des";
import FooterDes from "../../components/layouts/desktop";
import ShowFr from "./country/fr";
import ShowEs from "./country/es";
import { MovieContext } from "../../components/context/movieProvider";
import ShowCh from "./country/ch";
import ShowJp from "./country/jp";
import DarkHeaderD from "../../components/tools/headermob/header";
import PaginationExampleShorthand from "../../components/tools/pagination/pagi";
import DarkTestimonialA from "../../components/tools/testimonial/darktest";
const Movies = () => {
  const { movies, setMovies } = useContext(MovieContext);

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
    } else if (country === "Chine") {
      setSelectCountry({
        fr: false,
        jp: false,
        ch: true,
        es: false,
      });
    }
  };

  return (
    <>
      <DarkHeaderD />
      <section className="min-h-screen ">
        <div>
          <video
            className="w-screen"
            playsinline
            autoplay="auto"
            muted
            loop
            poster="https://vod-progressive.akamaized.net/exp=1698231187~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3639%2F24%2F618198834%2F2869513818.mp4~hmac=01df78177c035613e06ff80f4781e3135ef38529c9776cc6ee87301e42755507/vimeo-prod-skyfire-std-us/01/3639/24/618198834/2869513818.mp4"
            src="https://vod-progressive.akamaized.net/exp=1698231187~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3639%2F24%2F618198834%2F2869513818.mp4~hmac=01df78177c035613e06ff80f4781e3135ef38529c9776cc6ee87301e42755507/vimeo-prod-skyfire-std-us/01/3639/24/618198834/2869513818.mp4"
            type="video/mp4"
          > </video>
          <div className="py-10 bg-slate-800"> </div>
          <DarkTestimonialA />
        </div>
      </section>
      <main style={{
            backgroundImage:
              ' url("https://images.pexels.com/photos/15160085/pexels-photo-15160085/free-photo-of-man-skateboarding-in-skate-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }} className=" min-h-screen w-screen">
        <section  style={{
            backgroundImage:
              ' url("https://images.pexels.com/photos/15160085/pexels-photo-15160085/free-photo-of-man-skateboarding-in-skate-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }} className="flex flex-col ">
            <div className="py-10 bg-slate-800"> </div>
          <div>
            <div className="grid grid-cols-2 ">
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
          </div>
          <div className="col-span-3">
            {selectCountry.fr ? <ShowFr /> : null}
            {selectCountry.es ? <ShowEs /> : null}
            {selectCountry.ch ? <ShowCh /> : null}
            {selectCountry.jp ? <ShowJp /> : null}
          </div>
        </section>
      </main>{" "}
      <FooterDes />
    </>
  );
};
export default Movies;
