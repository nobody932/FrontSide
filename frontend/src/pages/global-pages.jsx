import React from "react";
import NavBar from "../components/tools/navbar-des";
import FooterDes from "../components/layouts/desktop";
import Articles from "../../pages/articles";
import Movies from "../../pages/movies";
import News from "../../pages/news/index";
import Teams from "../../pages/teams";
import Dashboard from "../../pages/dashboard";
import Login from "../../pages/login";
import Store from "../../pages/store";


const Global=()=>{
return(
    <>
    <Login/>
    <Articles/>
    <Dashboard/>
    <News/>
    <Movies/>
    <Teams/>
    <Store/>
    </>
)
}

export default Global