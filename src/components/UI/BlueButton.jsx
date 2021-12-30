import "./css/BlueButton.css";

const BlueButton = (props) => {
  return (
    <div className="blue-btn" onClick={props.onclick}>
      {props.text}
    </div>
  );
};

export default BlueButton;