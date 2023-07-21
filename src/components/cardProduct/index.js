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
    <div className={`c-container-card ${fullDescription ? "isActive" : ""}`} onClick={toggleFullDescription}>
        <div className={`c-image ${fullDescription ? "isActive" : ""}`} style={{  background: props.image, backgroundSize: 'cover'}}></div>
        <div className={`c-description ${fullDescription ? "isActive" : ""}`}>
            <h1 className="c-title">{props.title}</h1>
            <p className={`c-text ${fullDescription ? "isActive" : ""}`}>{props.description}</p>
        </div> 
    </div>
  );
}
