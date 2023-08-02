"use client";

import "./style.css";

import { useState } from "react";

import { GreenBut } from "@/components/greenBut";

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

    let propsStyleButton = {
      width: window.innerWidth < 447 ? 80 + '%' : window.innerWidth < 347 ? 100 + '%' : 60 + '%', 
      fontSize: window.innerWidth < 1000 ? 16 + "px" : window.innerWidth < 447 ? 9 + "px" : "",
      height: window.innerWidth < 1000 ? 30 + "px" :  window.innerWidth < 447 ? 13 + "px" : ""
    }

  return (
    <div className={`c-container-card ${fullDescription ? "isActive" : ""} card-${props.index}`} style={{  background: props.image, backgroundSize: 'cover', backgroundPosition: '50% 10%'}} onClick={toggleFullDescription}>
        <div className={`c-description ${fullDescription ? "isActive" : ""}`}>
            <h1 className="c-title">{props.title}</h1>
            <div className={`c-text ${fullDescription ? "isActive" : ""}`}>
              <p className="c-letters">{props.description}</p>
              <div className="c-containerButton">
                <GreenBut text="Adquiere el PDF" propsStyle={propsStyleButton} littleLetters={true} />
              </div>
            </div>
        </div> 
    </div>
  );
}
