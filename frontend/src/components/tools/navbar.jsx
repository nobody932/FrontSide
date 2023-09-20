import React from 'react';
import { Nav } from 'react-adaptive-navbar';
import { BrowserRouter } from 'react-router-dom';

const LINKS = ()=> [{
        display: "Empty",
        url: "/1",
    },
    {
        display: "List",
        url: "/2",
    },
    {
        display: "Failed",
        url: "/3",
    },
    {
        display: "Failed",
        url: "/4",
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