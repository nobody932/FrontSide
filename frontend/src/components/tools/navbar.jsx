import React from 'react';
import { Nav } from 'react-adaptive-navbar';
import { BrowserRouter } from 'react-router-dom';

const LINKS = ()=> [{
        display: "Articles",
        url: "/src/pages/articles.jsx",
    },
    {
        display: "News",
        url: "/FrontSide/frontend/src/pages/news.jsx",
    },
    {
        display: "Movies",
        url: "/FrontSide/frontend/src/pages/movies.jsx",
    },
    {
        display: "Teams",
        url: "/FrontSide/frontend/src/pages/teams.jsx",
    },
    {
        display: "Failed",
        url: "/5",
    },
    {
        display: "Failed",
        url: "/6",
    },
]
    

   
export const Example = () => 
        <>
            <BrowserRouter>
                <Nav 
                    bg='#0b4a91' 
                    font='Franklin Gothic Medium' 
                    nav = 'LINKS'
                />
            </BrowserRouter>
        </>
        export default LINKS