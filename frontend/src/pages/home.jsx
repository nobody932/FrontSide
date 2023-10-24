import React, { useEffect, useState } from "react";
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
      <section className="bg-amber-800 text-white">
        <DarkContentA />
        <h1 className="text-center font-extrabold py-8">
          <div>Récents ajouts:</div>
        </h1>

        <div className="text-center flex flex-col font-serif">
          <ul>
            <div className=" grid grid-cols-6 font-light py-12">
              <button type="button" onClick={alert}>
                {" "}
                <li>Articles</li>
              </button>
              <button type="button">
                {" "}
                <li>News</li>
              </button>
              <button type="button" onClick={alert}>
                <li>Part</li>
              </button>
              <button type="button" onClick={alert}>
                <li>Equipes</li>
              </button>
              <button type="button" onClick={alert}>
                <li>Magasin</li>
              </button>
            </div>
          </ul>
        </div>

        <App />
      </section>{" "}
      <FooterDes />{" "}
    </>
  );
};
export default Home;
