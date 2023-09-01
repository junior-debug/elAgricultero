"use client";
import "./style.css";
import { useEffect, useState } from "react";
import { GreenBut } from "@/components/greenBut";
import { useModalStore } from "@/components/modal";

export default function Card({
  index,
  image,
  title,
  description,
  onValueChange,
}) {
  const toggleModal = useModalStore((state) => state.toggleModalOn);

  const [fullDescription, setFullDescription] = useState(false);

  const toggleFullDescription = () => {
    setFullDescription(true);
    if (!fullDescription) {
      setTimeout(() => {
        setFullDescription(false);
      }, 6000);
    }
  };
  const [propsStyleButton, setPropsStyleButton] = useState({});
  useEffect(() => {
    setPropsStyleButton({
      width:
        window.innerWidth < 447
          ? 80 + "%"
          : window.innerWidth < 347
          ? 100 + "%"
          : 60 + "%",
      fontSize:
        window.innerWidth < 1000
          ? 16 + "px"
          : window.innerWidth < 447
          ? 9 + "px"
          : "",
      height:
        window.innerWidth < 1000
          ? 30 + "px"
          : window.innerWidth < 447
          ? 13 + "px"
          : "",
    });
  }, []);

  const getTitle = (index) => {
    const myElement = document.getElementById(`title${index}`);
    onValueChange(myElement.textContent);
  };

  return (
    <div
      className={`c-container-card ${
        fullDescription ? "isActive" : ""
      } card-${index}`}
      style={{
        background: image,
        backgroundSize: "cover",
        backgroundPosition: "50% 10%",
      }}
      onClick={toggleFullDescription}
    >
      <div className={`c-description ${fullDescription ? "isActive" : ""}`}>
        <h1 className="c-title" id={`title${index}`}>
          {title}
        </h1>
        <div className={`c-text ${fullDescription ? "isActive" : ""}`}>
          <p className="c-letters">{description}</p>
          <div className="c-containerButton" onClick={toggleModal}>
            <GreenBut
              text="Adquiere el PDF"
              propsStyle={propsStyleButton}
              littleLetters={true}
              handleClick={() => {
                getTitle(index);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
