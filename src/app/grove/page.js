"use client";
import "./style.css";
import { useState } from "react";

export default function Grove() {
  const [stateContent, setStateContent] = useState([
    {
      number: 0,
      state: true,
    },
    {
      number: 1,
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
                  stateContent[1].state
                    ? "isActive1"
                    : stateContent[2].state
                    ? "isActive2"
                    : stateContent[3].state
                    ? "isActive3"
                    : ""
                }`}
              ></div>
              <div
                className={`g-gray-line-1 ${
                  stateContent[1].state
                    ? "isActive1"
                    : stateContent[2].state
                    ? "isActive2"
                    : stateContent[3].state
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
                  stateContent[3].state
                    ? "isActive"
                    : ""
                }`}
                onClick={() => changePage(1)}
              >
                2
              </h3>
              <h3
                className={`g-page-number-3 ${
                  stateContent[2].state || stateContent[3].state
                    ? "isActive"
                    : ""
                }`}
                onClick={() => changePage(2)}
              >
                3
              </h3>
              <h3
                className={`g-page-number-4 ${
                  stateContent[3].state ? "isActive" : ""
                }`}
                onClick={() => changePage(3)}
              >
                4
              </h3>
            </div>
          </div>
          {stateContent[0].state ? (
            <div className="g-content-one">1</div>
          ) : stateContent[1].state ? (
            <div className="g-content-two">2</div>
          ) : stateContent[2].state ? (
            <div className="g-content-three">3</div>
          ) : stateContent[3].state ? (
            <div className="g-content-four">4</div>
          ) : (
            ""
          )}
        </div>
      </div>

      <button onClick={fetchData}>Fetch Data</button>
    </>
  );
}
