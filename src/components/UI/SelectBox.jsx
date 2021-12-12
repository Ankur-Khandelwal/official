import { useState, useEffect } from "react";
import "./css/SelectBox.css";

const SelectBox = (props) => {
  const {children} = props;
  // const [isSelected, setIsSelected] = useState(props.selected);
  // const [newStyle, setNewStyle] = useState({
  //       background: 'linear-gradient(270.55deg, #131742 0.5%, #34375a 99.55%)',
  //       color: '#fff',
  // });

  return (
    <div className="select-box" style={props.newStyle} onClick={props.onClick}>
      {children}
    </div>
  );
}

export default SelectBox;