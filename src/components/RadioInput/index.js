import './style.css';

const RadioInput = (props) => {
  return(
    <div className="radio-input">
      <input type="radio" name={props.name}/>
      <p>{props.text}</p>
    </div>
  );
}

export default RadioInput;