import React, { useEffect, useState } from "react";
import axios from "axios";


const Store =()=> {}
const [store, setStore] = useState([]);
useEffect(()=> {
    axios
    .get("/api/stores")
    .then((response)=> {

    })
})


export default Store