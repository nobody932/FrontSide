import React, { useEffect, useState } from "react";
import axios from "axios";
import process from "process";

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

  return (
    <>
      <form action="">
        <div>
          <label htmlFor="">Nom</label>
          <input type="text" onChange={OnChangeName} />
        </div>
        <div>
          <label htmlFor="">Description</label>
          <input type="text" onChange={OnChangeDesc} />
        </div>
        <div>
          <label htmlFor="">Prix</label>
          <input type="text" onChange={OnChangePrice} />
        </div>
        <div>
          <button type="button" onClick={() => SubmitForm()}>
            Envoyer
          </button>
        </div>
      </form>
      <div className="grid grid-cols-2">
        {posts.map((post) => {
          return (
            <div key={post.id} className="bg-red-500 border lg">
              Nom: {post.name}
              <br />
              Description: {post.description}
              <div>
                <button
                  type="button"
                  className="bg-red-500 p-2"
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
    </>
  );
};
export default Home;