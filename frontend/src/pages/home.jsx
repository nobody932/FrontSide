import React, { useEffect, useState } from "react";
import axios from "axios";
import process from "process";
import NavBar from "../components/tools/navbar-des";
import FooterDes from "../components/layouts/desktop";
import AOS from "../components/tools/aos/aos";

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


  
  const ShowmePicture = () => {
    const Image = {};
  };

  return (
    <>
      <NavBar />
      <section className="bg-slate-800">
        <h1 className="text-center font-extrabold py-8">
          Bienvenue sur Frontside{" "}
        </h1>
        <div data-aos="fade-right" className="containblue">
          <div className="text-center flex flex-col font-serif">
            <div>Récents ajouts:</div>
            <ul>
              <div className=" grid grid-cols-6 font-light py-12">
                <button type="button" onClick={alert}>
                  {" "}
                  <li>Articles</li>
                </button>
                <button type="button" onClick={alert}>
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

          <div className="my-48 p-10 grid grid-cols-2 space-x-7 space-y-4 ">
            {posts.map((post) => {
              return (
                <div key={post.id} className="border text-center  ">
                  Nom: {post.name}
                  <br />
                  Description: {post.description}
                  <div>
                    <button
                      type="button"
                      className="bg-green-700 p-2"
                      onClick={() => DeletePost(post.id)}
                    >
                      Supprimer
                    </button>
                  </div>
                  <br />
                  <br />
                </div>
              );
            })}
            ;
          </div>
        </div>
      </section>{" "}
      <FooterDes />{" "}
    </>
  );
};
export default Home;
