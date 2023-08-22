import "./style.css";
export default function shortInput(props) {
    return (
        <input className="short-input" style={props.styleShortInput} placeholder={props.placeholderInput} />
    );
  }