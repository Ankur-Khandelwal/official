import InputLabel from '../UI/InputLabel';
import './style.css';

const InputBox = (props) => {
  return(
    <div className="i-box">
        <InputLabel>{props.label}</InputLabel>
        <input type={props.type} placeholder={props.placeholder}/>
    </div>
  );
}

export default InputBox;