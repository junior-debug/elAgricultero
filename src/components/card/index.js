"use client";

import "./style.css";

import { useState } from "react";

export default function Card(props) {

    const [fullDescription, setFullDescription] = useState(false);

    const toggleFullDescription = () => {
        setFullDescription(!fullDescription);
        if (!fullDescription) {
          console.log(fullDescription)
          setTimeout(() => {
            setFullDescription(false)
          }, 6000); 
        }
    };

  return (
    <div className={`container-card ${fullDescription ? "isActive" : ""}`} onClick={toggleFullDescription}>
        <div className={`image ${fullDescription ? "isActive" : ""}`} style={{  background: props.image, backgroundSize: 'cover'}}></div>
        <div className={`description ${fullDescription ? "isActive" : ""}`}>
            <h1>{props.title}</h1>
            <p className={`text ${fullDescription ? "isActive" : ""}`}>{props.description}</p>
        </div> 
    </div>
  );
}
