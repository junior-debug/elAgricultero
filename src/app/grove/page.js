"use client";
import "./style.css";
import { useState } from "react";

export default function Grove() {
  const [stateContent, setStateContent] = useState([
    {
      number : 0,
      state : true
    },
    {
      number : 1,
      state : true
    },
    {
      number : 2,
      state : true
    },
    {
      number : 3,
      state : true
    },
  ])

  function changePage(number) {
    const updatedStateContent = stateContent.map(element => {
      if (number === element.number) {
        return {
          ...element,
          state: true
        };
      } else {
        return {
          ...element,
          state: false
        };
      }
    });
  
    setStateContent(updatedStateContent);
  }

  const fetchData = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(res);
  };
  return (
    <>
      <h1 className="g-principal-title">
        Construye tu <span>Huerto</span>
      </h1>
      <div className="g-container-general">
        <div className="g-general-content">
          <div className="g-pages-selector">
            <h3 onClick={() => changePage(0)}>1</h3>
            <div></div>
            <h3 onClick={() => changePage(1)}>2</h3>
            <div></div>
            <h3 onClick={() => changePage(2)}>3</h3>
            <div></div>
            <h3 onClick={() => changePage(3)}>4</h3>
          </div>
          {
            stateContent[0].state ? 
            <div className="g-content-one">
              1
            </div> 
            : stateContent[1].state ? 
            <div className="g-content-two">
              2
            </div>
            : stateContent[2].state ? 
            <div className="g-content-three">
              3
            </div>
            : stateContent[3].state ? 
            <div className="g-content-four">
              4
            </div>
            : ""
          }
        </div>
      </div>

      <button onClick={fetchData}>Fetch Data</button>
    </>
  );
}
