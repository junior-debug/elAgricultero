import "./style.css";
export function GreenBut(props) {
  return (
    <>
      <button className="butSubscribe" style={props.propsStyle}>{props.text}</button>
    </>
  );
}
