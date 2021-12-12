import ProspectFormLayout from '../Layout';
import DropdownMenu from '../../../components/DropdownMenu';
import InputWithDropDown from '../../../components/UI/InputWithDropDown';
import InputBox from '../../../components/InputBox';
import RadioInput from '../../../components/RadioInput';
import InputLabel from '../../../components/UI/InputLabel.jsx';
import FileInput from '../../../components/UI/FileInput';
import SelectBox from '../../../components/UI/SelectBox';
import GreenButton from '../../../components/UI/GreenButton';
import './style.css';
import { useState } from 'react';

const ProspectForm2 = () => {

  const [nonNego, setNonNego] = useState([]);

  const toggleSelectNonNego = (act) => {
    if(nonNego.includes(act)) {
      setNonNego(nonNego.filter(h => h !== act));
    } else {
      setNonNego([...nonNego, act]);
    }
  }

  const isSelected = (act) => {
    let newStyle = {};
    if(nonNego.includes(act)) {
      newStyle = {
        backgroundColor: 'linear-gradient(270.55deg, #131742 0.5%, #34375a 99.55%)',
        color: '#fff'
      }
    }
    return newStyle;
  }

  return (
    <ProspectFormLayout>
      <div className="form-col-1">
        <h5>About</h5>
        <InputBox type="text" placeholder="Enter your full name here" label="Brief Description"/>
        <InputLabel>Hobbies</InputLabel>
        <div className="non-nego-acts">
          <div className="acts-row">
            <SelectBox onClick={()=>toggleSelectNonNego("Hiking")} newStyle={isSelected()}>Hiking</SelectBox>
            <SelectBox onClick={()=>toggleSelectNonNego("Bagpacking")} newStyle={isSelected()}>Bagpacking</SelectBox>
            <SelectBox onClick={()=>toggleSelectNonNego("Camping")} newStyle={isSelected()}>Camping</SelectBox>
            <SelectBox onClick={()=>toggleSelectNonNego("Hunting")} newStyle={isSelected()}>Hunting</SelectBox>
          </div>
          <div className="acts-row">
            <SelectBox onClick={()=>toggleSelectNonNego("Kayaking")} newStyle={isSelected()}>Kayaking</SelectBox>
            <SelectBox onClick={()=>toggleSelectNonNego("Fishing")} newStyle={isSelected()}>Fishing</SelectBox>
            <SelectBox onClick={()=>toggleSelectNonNego("Archery")} newStyle={isSelected()}>Archery</SelectBox>
            <SelectBox onClick={()=>toggleSelectNonNego("Canoeing")} newStyle={isSelected()}>Canoeing</SelectBox>
          </div>
         </div> 
      </div>
      <div className="form-col-2">
        <h5>Phases</h5>
      </div>
    </ProspectFormLayout>
  );
}

export default ProspectForm2;