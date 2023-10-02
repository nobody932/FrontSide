import React, { useContext } from "react";
import { NewsContext } from "../../../../components/context/newsProvider";
const ShowChs = () => {
  const { news, setNews } = useContext(NewsContext);

  return (
    <div className="bg-cyan-400">
      <div className="grid grid-cols-3 py-5">
        {news.map((news) => {
          // console.log(movie.produits);
          if (news.produits === "Chaussures") {
            // console.log("ok");
            return (
              <div key={news.id}>
                {news.titles}
                <img className="space-y-5" src={news.images} alt="" />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ShowChs;
