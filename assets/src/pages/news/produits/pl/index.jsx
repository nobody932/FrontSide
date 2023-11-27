import React, { useContext } from "react";
import { NewsContext } from "../../../../components/context/newsProvider";

const ShowPl = () => {
  const { news, setNews } = useContext(NewsContext);

  return (
    <div className="bg-cyan-400 ">
      <img src="/images/skate.jpg" alt="" />
      <div className="grid grid-cols-2 space-x-10 space-y-10">
        {news.map((news) => {
          // console.log(news.produits);
          if (news.produits === "Planche") {
            // console.log("ok");
            return (
              <div key={news.id}>
                {news.titles}
                <img src={news.images} alt="" />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ShowPl;
