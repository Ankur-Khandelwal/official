import InputLabel from '../UI/InputLabel';
import './style.css';

const DropdownMenu = (props) => {
  const {children} = props;
  return(
    <div className="dropdown-menu">
      <InputLabel>{props.label}</InputLabel>
      <select style={{width: props.inputWidth}}>
        {children}
      </select>
    </div>
  );
}

export default DropdownMenu;