import React, { useContext } from "react";
import { MovieContext } from "../../../../components/context/movieProvider";

const ShowFr = () => {
  const { movies, setMovies } = useContext(MovieContext);

  return (
    <div style={{
      backgroundImage:
        ' url("https://images.pexels.com/photos/3095769/pexels-photo-3095769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
    }} className="bg-cyan-400">
      <div className="grid grid-cols-3">
        {movies.map((movie) => {
          // console.log(movie.country);
          if (movie.country === "France") {
            // console.log("ok");
            return (
              <div key={movie.id}>
                {movie.titles}
                <video controls width="250">
                  <source src={movie.part} type="video/mp4" />
                </video>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ShowFr;

{
  /* <div className="grid grid-cols-2 mx-5 space-x-3 ">
        {movies.map((movies) => {
          return (
            <div
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              key={movies.id}
              className="bg-purple-500  border lg"
            >
              <video controls width="250">
                <source src={movies.part} type="video/mp4" />
              </video>
              <h1 className="text-white italic font-bold">
                Titre : {movies.title}
              </h1>
              <br />
              <p>description: {movies.description}</p>
              <br />
              <br />
            </div>
          );
        })}
      </div> */
}
