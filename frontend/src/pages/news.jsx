import React, { useEffect, useState } from "react";
import axios from "axios";

const News=()=>{
const [news, SetNews] = useState([]);
useEffect(() => {
    axios
    .get ("/api/news")
    .then((response)=> {
        console.log(response.data["hydra:member"]);
        SetNews(response.data["hydra:member"]);
    })
    .catch((error)=> {
        console.log(error);
    })
    .finally(()=> {
        console.log("lets gooo")
    });
},[]);
return(
    <>
    <div className="grid grid-cols-3 mx-5 space-x-3 space-y-5 ">
      {news.map((news) => {
        return (
          <div key={news.id} className="bg-purple-500  border lg">
            <img src={news.produits} alt="" />
            <h1 className="text-white italic font-bold">Titre : {article.title}</h1>
            <br />
            description: {news.description}
            <br />
            Prix: {news.prix}
            <br />
          </div>
        );
      })}
    </div>
  </>
)
}

export default News