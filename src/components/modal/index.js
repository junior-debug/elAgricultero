import "./style.css";

export default function Modal(props) {
  return (
    <div>
      <div className="m-modalBackground"></div>
      <div className="m-modalContainer">{props.children}</div>
    </div>
  );
}
