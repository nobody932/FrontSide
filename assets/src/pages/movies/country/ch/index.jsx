import React, { useContext } from "react";
import { MovieContext } from "../../../../components/context/movieProvider";

const ShowCh = () => {
  const { movies, setMovies } = useContext(MovieContext);

  return (
    <div className="bg-red-400">
      <div className="grid grid-cols-3">
        {movies.map((movie) => {
          // console.log(movie.country);
          if (movie.country === "Chine") {
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

export default ShowCh;
