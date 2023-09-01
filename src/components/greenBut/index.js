"use client";
import "./style.css";
export function GreenBut(props) {
  return (
    <>
      <button
        onClick={props.handleClick}
        className="butSubscribe"
        style={props.propsStyle}
      >
        {props.text}
      </button>
    </>
  );
}
