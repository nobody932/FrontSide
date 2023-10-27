"use client"
import React from "react";

const ContentArticle = () => {
  return (
    <div className="hero gradient-back my-10 py-10 bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://media.istockphoto.com/id/1248686497/fr/photo/planche-%C3%A0-roulettes-dhomme-daffaires.jpg?s=612x612&w=0&k=20&c=1nwk3xNGhuBi7vMBFpqlLXdZDZkHJ6dELwjuh4hqgws="
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Articles! </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default ContentArticle;
