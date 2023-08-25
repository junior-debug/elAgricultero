import "./style.css";
export default function shortInput(props) {
  return (
    <input
      onChange={props.handleInputChange}
      className="short-input"
      style={props.styleShortInput}
      placeholder={props.placeholderInput}
    />
  );
}
