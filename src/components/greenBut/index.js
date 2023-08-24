"use client";
import "./style.css";
export function GreenBut(props) {
  return (
    <>
      <button
        onClick={props.rout}
        className="butSubscribe"
        style={props.propsStyle}
      >
        {props.text}
      </button>
    </>
  );
}
