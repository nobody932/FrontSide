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


   
  <section className="bg-green-500">
  <div>
    <form action="">
      <div>
        <label htmlFor="">Nom</label>
        <input className="border" type="text" onChange={OnChangeName} />
      </div>
      <div>
        <label htmlFor="">Description</label>
        <input className="border" type="text" onChange={OnChangeDesc} />
      </div>
      <div>
        <label htmlFor="">Prix</label>
        <input className="border" type="text" onChange={OnChangePrice} />
      </div>
      <div>
        <button
          className="flex justify-center"
          type="button"
          onClick={() => SubmitForm()}
        >
          Envoyer
        </button>
      </div>
    </form>
  </div>
  <div className="my-48 p-10 grid grid-cols-2 bg-slate-500 space-x-7 space-y-4 ">
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
  </section>