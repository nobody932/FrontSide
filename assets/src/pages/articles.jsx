import React, { useEffect, useState } from "react";
import axios from "axios";
import DarkHeaderD from "../components/tools/headermob/header";
import FooterDes from "../components/layouts/desktop";
import AOS from "../components/tools/aos/aos";
import { PaginationExamplePagination } from "semantic-ui-react";
import ContentArticle from "../components/tools/content/contentarticles";

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
      <section className="gradient-back "
        style={{
          backgroundImage:
            ' url("https://images.unsplash.com/photo-1520796738119-1bae68104970?auto=format&fit=crop&q=80&w=2129&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        }}
      >
        <ContentArticle/>
        <div className="grid grid-cols-3 items-center mx-5 space-x-3 ">
          {articles.map((article) => {
            return (
              <div
                key={article.id}
                className="bg-purple-700 card flex flex-col justify-center p-10 border lg"
              >
                <div className="artboard phone-1"></div>
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
          <ol className="flex justify-center gap-1 text-xs font-medium">
            <li>
              <a
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
              >
                <span className="sr-only">Prev Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                1
              </a>
            </li>

            <li className="block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
              2
            </li>

            <li>
              <a
                href="#"
                className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                3
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                4
              </a>
            </li>

            <li>
              <a
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
              >
                <span className="sr-only">Next Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ol>
        </div>
      </section>
      <FooterDes />
    </>
  );
};
export default Articles;
