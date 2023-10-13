import React, { useState } from "react";
import axios from "axios";
import process, { title } from "process";
import NavBar from "../components/tools/navbar-des";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [createPost, setCreatePost] = useState([]);

  const OnChangeTitle = (event) => {
    setCreatePost({
      ...createPost,
      title: event.target.value,
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
  const SubmitForm = () => {
    const data = {
      title: createPost.title,
    };
  };

  return (
    <>
      <section>
        <NavBar />
        <div className="bg-red-800 flex flex-col text-center py-10">
          <h1>Hello Dashboard</h1>
        </div>
        <div className="py-10 bg-amber-400"></div>
        <form
          className=" bg-slate-500 grid grid-cols-3 justify-center text-center space-y-5 py-10"
          action=""
        >
          <li className="">
            {" "}
            ajouter un article{" "}
            <div className="grid justify-center items-center space-y-2">
              <label htmlFor="">
                Titre de l'article: <input type="text" name="myTitles" />
              </label>
              <label htmlFor="">
                Image: <input type="text" name="myImage" />
              </label>
              <label htmlFor="">
                Description: <input type="text" name="myDescription" />
              </label>{" "}
              <div className="flex flex-col items-center">
                <button
                  className="border rounded-xl flex justify-center w-20"
                  type="button"
                >
                  envoyer
                </button>
              </div>
            </div>
          </li>
          <li>
            {" "}
            ajouter une nouvelle team
            <div className="grid justify-center space-y-2">
              <label htmlFor="">
                Nom de l'équipe : <input type="text" name="MyName" />
              </label>
              <label htmlFor="">
                Images : <input type="text" />
              </label>
              <label htmlFor="">
                Titre de la vidéo :<input type="text" />
              </label>{" "}
              <div className="flex flex-col items-center">
                <button
                  className="border rounded-xl flex justify-center w-20"
                  type="button"
                >
                  envoyer
                </button>
              </div>
            </div>
          </li>
          <li>
            {" "}
            ajouter une nouveauté{" "}
            <div className="grid justify-center space-y-2">
              <label htmlFor="">
                Titre: <input type="text" name="MyTitle" />
              </label>
              <label htmlFor="">
                Images: <input type="text" name="MyImages" />
              </label>
              <label htmlFor="">
                Liens: <input type="text" name="MyLink" />
              </label>{" "}
              <div className="flex flex-col items-center">
                <button
                  className="border rounded-xl flex justify-center w-20"
                  type="button"
                >
                  envoyer
                </button>
              </div>
            </div>
          </li>

          <li>
            {" "}
            ajouter un nouveau magasin{" "}
            <div className="grid justify-center space-y-2">
              <label htmlFor="">
                Nom de l'enseigne: <input type="text" name="myStoreName" />
              </label>
              <label htmlFor="">
                Images: <input type="text" name="MyStorePicture" />
              </label>
              <label htmlFor="">
                ajouter une adresse: <input type="text" name="MyAdress" />
              </label>{" "}
              <div className="flex flex-col items-center">
                <button
                  className="border rounded-xl flex justify-center w-20"
                  type="button"
                >
                  envoyer
                </button>
              </div>
            </div>
          </li>
          <li>
            {" "}
            ajouter une vidéo{" "}
            <div className="grid justify-center space-y-2">
              <label htmlFor="">
                Titre de la vidéo: <input type="text" name="MyTitle" />
              </label>
              <label htmlFor="">
                Vidéo: <input type="text" name="MyPart" />
              </label>
              <label htmlFor="">
                Description: <input type="text" name="MyDescription" />
              </label>{" "}
              <div className="flex flex-col items-center">
                <button
                  className="border rounded-xl flex justify-center w-20"
                  type="button"
                >
                  envoyer
                </button>
              </div>
            </div>
          </li>
        </form>
      </section>
    </>
  );
};
export default Dashboard;
