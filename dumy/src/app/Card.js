"use client";
import { useState } from "react";
import React from "react";
import './Card.css';
import Image from "next/image";
// import { /* other imports */ } from '@emotion/react';
// import HomeIcon from '@mui/icons-material/Home';
const Card = () => {
  const [cards,updatecard] = useState([
    {
      program: "Java Programming",
      title:"Join and start coding with others!",
      text: "Java Coding room",
      colour:"col1"
    },
    { program: "Machine Learning",
    title:"Join and start coding with others!",
      text: "ML room",
      colour:"rgb(185, 54, 98)"

    },
    { program: "Deep Learning",
    title:"Join and start coding with others!",
      text: "DL room",
      colour:"rgb(199, 199, 84)"

    },
    { program: "C++ Programming",
    title:"Join and start coding with others!",
      text: "C++ Coding room",
      colour:"rgb(128, 52, 128)"

    },
    { program: "C# Programming",
    title:"Join and start coding with others!",
      text: "C# Coding room",
      colour:"col1"

    },
    { program: "Flutter Training",
    title:"Join and start coding with others!",
      text: "Flutter Training room",
      colour:"rgb(185, 54, 98)"

    },{ program: "Web Developement",
    title:"Join and start coding with others!",
      text: "Web Camp room",
      colour:"rgb(199, 199, 84)"

    },{
      program: "JavaScript Programming",
      title:"Join and start coding with others!",
      text: "JS room",
      colour:"rgb(128, 52, 128)"

    },
    {
      program: "Al Learning",
      title:"Join and start coding with others!",
      text: "AI learning room",
      colour:"col1"

    },
    {
      program: "React Training",
      title:"Join and start coding with others!",
      text: "React Training room",
      colour:"rgb(185, 54, 98)"

    },
    {
      program: "Node JS",
      title:"Join and start coding with others!",
      text: "Node JS room",
      colour:"rgb(199, 199, 84)"

    },
    {
      program: "Python",
      title:"Join and start coding with others!",
      text: "py learning room",
      colour:"rgb(128, 52, 128)"

    }
  ]);
  return (
    
    <div>
      <section>
        <div className='container'>
       <div className='cards'>
{
  cards.map((card,i)=>(
    <div key={i} className='card'>
      <div className="container">
         <div className="db1"><button id="btn1"><Image src={'/live.png'} width={"10"} height={"10"} ></Image>live</button></div>
         <div className="db">
      <button id="btn3"><Image src={'/messages.png'} width={"15"} height={"15"} ></Image></button><br></br>
      <button id="btn3"><Image src={'/mic_off.png'} width={"15"} height={"15"} ></Image></button>
      </div><br></br><br></br>
      <div className="div1" style={{backgroundColor:card.colour}}>
        <p id="p2">{card.program}</p><br></br>
        </div>
      <div className="db4">
      <button id="btn2"><Image src={'/clock.png'} width={"15"} height={"15"} ></Image></button>
      <button id="btn2"><Image src={'/users.png'} width={"15"} height={"15"} ></Image></button>
      </div></div><br></br>
      <div id="span">
     <p>{card.title}</p></div>
    <br></br>
    <button id="btn">
    {card.text}
    </button>
    
</div>
  ))
}         
        </div>
        </div>
      </section>
    </div>
  );
}

export default Card;
