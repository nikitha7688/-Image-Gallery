import React from "react";
import ReactDOM from "react-dom/client";

import './index.css'

import dog1 from "./assets/images/dog1.jpg"
import dog2 from "./assets/images/dog2.jpg"
import dog3 from "./assets/images/dog3.jpg"
import dog4 from "./assets/images/dog4.jpg"
import dog5 from "./assets/images/dog5.jpg"
import dog6 from "./assets/images/dog6.jpg"
import dog7 from "./assets/images/dog7.jpg"
import dog8 from "./assets/images/dog8.jpg"
import dog9 from "./assets/images/dog9.jpg"
import dog10 from "./assets/images/dog10.jpg"
import dog11 from "./assets/images/dog11.jpg"
import dog12 from "./assets/images/dog12.jpg"


const root = ReactDOM.createRoot(document.getElementById("root"))



function Gallery(props)
{
    return(
    
    <div className="card">
        
        <div>
            
            <img src={props.image} alt="dog" className="" ></img>
            <h2 className="text">{props.names}</h2>
        </div>
    </div>
    )
}

var pics = [
    {
        image:dog1,
        names:"Shih Tzu"
    },

    {
        image:dog2,
        names:"Labrador"
    },

    {
        image:dog3,
        names:"Maltese"
    },

    {
        image:dog4,
        names:"Golden"
    },

    {
        image:dog5,
        names:"Golden Retriever"
    },

    {
        image:dog6,
        names:"Beagle"
    },

    {
        image:dog7,
        names:"Wite Terrier"
    },

    {
        image:dog8,
        names:"Dachshund"
    },

    {
        image:dog9,
        names:"Dachshund"
    },

    {
        image:dog10,
        names:"Border Collie"
    },

    {
        image:dog11,
        names:"Golden"
    },

    {
        image:dog12,
        names:"Labrador"
    }
]

root.render(

    <div id="container" className="cardcomp">

    

        {
            pics.map(function(item)
           {
            return <Gallery image ={item.image} names = {item.names}></Gallery>
           })
        }
    </div>
)