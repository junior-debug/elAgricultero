"use client";
import "./style.css";
export function GreenBut(props) {
  return (
    <div>
      <button className="butSubscribe" style={props.propsStyle}>{props.text}</button>
    </div> 
  );
}
