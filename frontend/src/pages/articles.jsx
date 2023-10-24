import React, { useEffect, useState } from "react";
import axios from "axios";
import DarkHeaderD from "../components/tools/headermob/header";
import FooterDes from "../components/layouts/desktop";
import AOS from "../components/tools/aos/aos";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get("/api/articles")
      .then((response) => {
        // console.log(response.data["hydra:member"]);
        setArticles(response.data["hydra:member"]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("bien joué");
      });
  }, []);
  //images.unsplash.com/photo-1520796738119-1bae68104970?auto=format&fit=crop&q=80&w=2129&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
  https: return (
    <>
      <DarkHeaderD />
      <section style={{
            backgroundImage:
              ' url("https://images.unsplash.com/photo-1520796738119-1bae68104970?auto=format&fit=crop&q=80&w=2129&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          }}>
        <div
          className="grid grid-cols-3 mx-5 space-x-3 "
         
        >
          {articles.map((article) => {
            return (
              <div key={article.id} className="bg-purple-700  border lg">
                <img src={article.image} alt="" />
                <h1 className="text-white italic font-bold">
                  Titre : {article.title}
                </h1>
                <br />
                description: {article.description}
                <br />
                <br />
              </div>
            );
          })}
        </div>
      </section>
      <FooterDes />
    </>
  );
};
export default Articles;
