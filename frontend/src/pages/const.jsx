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
  </section>