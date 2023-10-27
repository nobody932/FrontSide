import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import axios from "axios";
import process from "process";
import NavBar from "../components/tools/navbar-des";
import FooterDes from "../components/layouts/desktop";
import AOS from "../components/tools/aos/aos";
import { Header } from "semantic-ui-react";
import DarkHeaderD from "../components/tools/headermob/header";
import App from "../components/tools/cards/homecard";
import DarkContentA from "../components/tools/content/darkcontent";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [createPost, setCreatePost] = useState({
    name: "",
    description: "",
    price: 0,
  });
  useEffect(() => {
    axios
      .get("/api/products")
      // .get(process.env.URL_TEST)
      .then((response) => {
        // console.log(response.data);
        setPosts(response.data["hydra:member"]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Bien joué");
      });
  }, []);
  const DeletePost = (id) => {
    // console.log(`ID: ${id}`)
    axios.delete(`http://localhost:8000/api/products/${id}`).then(() => {
      alert("success");
    });
  };

  const OnChangeName = (event) => {
    setCreatePost({
      ...createPost,
      name: event.target.value,
    });
    console.log(createPost);
  };

  const OnChangeDesc = (event) => {
    setCreatePost({
      ...createPost,
      description: event.target.value,
    });
    console.log(createPost);
  };

  const OnChangePrice = (event) => {
    setCreatePost({
      ...createPost,
      Price: parseInt(event.target.value),
    });
    console.log(createPost);
  };

  const SubmitForm = () => {
    const data = {
      name: createPost.name,
      description: createPost.description,
      price: createPost.price,
    };
    axios.post("http://localhost:8000/api/products", data).then(() => {
      alert("Produit créé!");
    });
  };

  const ShowmeNews = () => {
    const [selectShowme, setSelectShowme] = useState({
      fr: false,
      jp: false,
      ch: false,
      es: false,
    });
  };
  return (
    <>
      <DarkHeaderD />
      <div className=""></div>
      <section className=" bg-amber-800 gradientt px-10 text-white">
        <DarkContentA />
        

        <section class="m-10  items-center shadow py-10 dark:bg-gray-800">  <h1 className="text-center font-extrabold py-8">
          <div>Récents ajouts:</div>
        </h1>
          <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        
            <a
              href="#"
              class="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-red-500 mx-1.5 sm:mx-6"
            >
              Articles
            </a>

            <a
              href="#"
              class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-red-500 mx-1.5 sm:mx-6"
            >
              News
            </a>

            <a
              href="#"
              class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-red-500 mx-1.5 sm:mx-6"
            >
              Movies
            </a>

            <a
              href="#"
              class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-red-500 mx-1.5 sm:mx-6"
            >
              Teams
            </a>

            <a
              href="#"
              class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-red-500 mx-1.5 sm:mx-6"
            >
              Stores
            </a>
          </div>
        </section>

        <App />
      </section>{" "}
      <FooterDes />{" "}
    </>
  );
};
export default Home;
