import React from "react";
import axios from "axios";

const Dashboard = () => {
  return (



    
     <section><div className="bg-orange-600 flex flex-col text-center py-10">
      <h1>Hello Dashboard</h1>
     </div>
     <div className="py-10 bg-amber-400">
      
     </div>
      <form className=" bg-slate-500 grid grid-cols-3 justify-center text-center space-y-3 py-10" action="">
        <li className="">
          {" "}
          ajouter un article{" "}
          <div className="grid justify-center space-y-2">
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <button className="border rounded-xl flex-col justify-center" type="button">
            envoyer
          </button>
        </li>
        <li>
          {" "}
          ajouter un nouveau produit
          <div className="grid justify-center space-y-2">
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <button onClick={""} className="border rounded-xl" type="button">
            envoyer
          </button>
        </li>
        <li>
          {" "}
          ajouter un article{" "}
          <div className="grid justify-center space-y-2">
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <button className="border rounded-xl" type="button">
            envoyer
          </button>
        </li>
        <li>
          {" "}
          ajouter un article{" "}
          <div className="grid justify-center space-y-2">
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <button className="border rounded-xl" type="button">
            envoyer
          </button>
        </li>
        <li>
          {" "}
          ajouter un article{" "}
          <div className="grid justify-center space-y-2">
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <button className="border rounded-xl" type="button">
            envoyer
          </button>
        </li>
        <li>
          {" "}
          ajouter une vidéo{" "}
          <div className="grid justify-center space-y-2">
            <input type="text" />
            <input type="text" />
            <input type="text" />{" "}
          </div>
          <button className="border rounded-xl" type="button">
            envoyer
          </button>
        </li>
      </form>
   </section> 
  );
};
export default Dashboard;
