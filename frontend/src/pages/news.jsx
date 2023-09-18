import React, { useEffect, useState } from "react";
import axios from "axios";

const News=()=>{
const [news, SetNews] = useState([]);
useEffect(() => {
    axios
    .get ("/api/news")
    .then((response)=> {
        SetNews(response.data["hydra"])
    })
} 
)
}

export default News