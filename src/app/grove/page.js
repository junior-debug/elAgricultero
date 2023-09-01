"use client";
import Card from "@/components/cardProduct";
import ShortInput from "@/components/shortInput";
import { GreenBut } from "@/components/greenBut";
import "./style.css";
import React, { useEffect, useState } from "react";

export default function Grove() {
  const [stateContent, setStateContent] = useState([
    {
      number: 0,
      state: true,
    },
    {
      number: 1.0,
      state: false,
    },
    {
      number: 1.1,
      state: false,
    },
    {
      number: 2,
      state: false,
    },
    {
      number: 3,
      state: false,
    },
  ]);

  const styleShortInput = {
    minWidth: 349 + "px",
    width: 500 + "px",
    height: 75 + "px",
    fontSize: 20 + "px"
  };

  function changePage(number) {
    const updatedStateContent = stateContent.map((element) => {
      if (number === element.number) {
        return {
          ...element,
          state: true,
        };
      } else {
        return {
          ...element,
          state: false,
        };
      }
    });
    setStateContent(updatedStateContent);
  }

  const [images, setImages] = useState([]);
  useEffect(() => {
    setImages([`url("${window.location.origin}/images/masetas.png")`, `url("${window.location.origin}/images/tierra.png")`])
  }, []);

  const fetchData = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <>
      <h1 className="g-principal-title">
        Construye tu <span>Huerto</span>
      </h1>
      <div className="g-container-general">
        <div className="g-general-content">
          <div className="g-pages-selector">
            <div className="g-container-lines">
              <div
                className={`g-green-line-1 ${
                  stateContent[1].state || stateContent[2].state
                    ? "isActive1"
                    : stateContent[3].state
                    ? "isActive2"
                    : stateContent[4].state
                    ? "isActive3"
                    : ""
                }`}
              ></div>
              <div
                className={`g-gray-line-1 ${
                  stateContent[1].state || stateContent[2].state
                    ? "isActive1"
                    : stateContent[3].state
                    ? "isActive2"
                    : stateContent[4].state
                    ? "isActive3"
                    : ""
                }`}
              ></div>
            </div>
            <div className="g-container-numbers">
              <h3 className="g-page-number-1" onClick={() => changePage(0)}>
                1
              </h3>
              <h3
                className={`g-page-number-2 ${
                  stateContent[1].state ||
                  stateContent[2].state ||
                  stateContent[3].state ||
                  stateContent[4].state
                    ? "isActive"
                    : ""
                }`}
                onClick={() => changePage(1)}
              >
                2
              </h3>
              <h3
                className={`g-page-number-3 ${
                  stateContent[3].state ||
                  stateContent[4].state
                    ? "isActive"
                    : ""
                }`}
                onClick={() => changePage(2)}
              >
                3
              </h3>
              <h3
                className={`g-page-number-4 ${
                  stateContent[4].state ? "isActive" : ""
                }`}
                onClick={() => changePage(3)}
              >
                4
              </h3>
            </div>
          </div>
          <div className="container-content-items">
          {
            stateContent[0].state ? 
            <div className="g-content-one">
              <div className="g-content-title-center">
                <h1 className="g-content-title">Seleccione entre <span>maseta</span> o <span>tierra</span> si dispone de una</h1>
              </div>
              <div className="g-container-items-one">
                <div className="g-item-one" onClick={() => changePage(1.0)}>
                  <Card
                      image={images[0]}
                      hiddenDescription={false}
                    > 
                    <div className="g-containerItemButton">
                      <GreenBut text="Maseta" />
                    </div>
                  </Card>
                </div>
                <div className="g-item-one" onClick={() => changePage(1.1)}>
                  <Card
                    image={images[1]}
                    hiddenDescription={false}
                  >
                    <div className="g-containerItemButton">
                      <GreenBut text="Tierra" />
                    </div>    
                  </Card>
                </div>
              </div>
            </div> 
            : stateContent[1].state ? 
            <div className="g-content-two">
              <div className="g-content-title-center">
                <h1 className="g-content-title">Seleccione la cantidad de sus <span>masetas</span></h1>
              </div>
            </div>
            : stateContent[2].state ? 
            <div className="g-content-two">
              <div className="g-content-title-center">
                <h1 className="g-content-title">Ingresa tus <span>metros cuadrados</span> que dispones</h1>
              </div>
              <div className="g-container-items-two">
                <div className="g-items-input-two">
                  <ShortInput
                    styleShortInput={styleShortInput}
                    placeholderInput="Introduce tus metros cuadrados"
                  />
                  <h1>m²</h1>
                </div>
                <div className="g-items-button-two">
                  <GreenBut text="Agregar" />
                </div>
              </div>
            </div>
            : stateContent[3].state ? 
            <div className="g-content-three">
              <div className="g-content-title-center">
                <h1 className="g-content-title">Seleccione las <span>plantas</span></h1>
              </div>
            </div>
            : stateContent[4].state ? 
            <div className="g-content-four">
              <div className="g-content-title-center">
                <h1 className="g-content-title">Introduce tus <span>Datos</span></h1>
              </div>
            </div>
            : ""
          }
          </div>
        </div>
      </div>

      {/* <button onClick={fetchData}>Fetch Data</button> */}
    </>
  );
}
