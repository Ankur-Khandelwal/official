import InputLabel from './InputLabel';
import './css/InputWithDropDown.css';

const InputWithDropDown = (props) => {
  const {children} = props;
  return (
    <div className="wrapper">
      <InputLabel>{props.label}</InputLabel>
      <div className="input-with-dropdown">
        <div className="select">
          <select class="select__field" required>
            {children}
          </select>
        </div>
        <input type="text" style={{width: props.inputWidth}}/>
      </div>
    </div>
  );
};

export default InputWithDropDown;
