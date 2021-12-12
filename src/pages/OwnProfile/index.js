import ProspectFormLayout from '../ProspectForm/Layout';
import DropdownMenu from '../../components/DropdownMenu';
import InputWithDropDown from '../../components/UI/InputWithDropDown';
import InputBox from '../../components/InputBox';
import RadioInput from '../../components/RadioInput';
import InputLabel from '../../components/UI/InputLabel.jsx';
import FileInput from '../../components/UI/FileInput';
import SelectBox from '../../components/UI/SelectBox';
import GreenButton from '../../components/UI/GreenButton';
import './style.css';
import { useState } from 'react';

const OwnProfile = () => {

  const [hobbies, setHobbies] = useState([]);

  const toggleSelect = (hobby) => {
    if(hobbies.includes(hobby)) {
      setHobbies(hobbies.filter(h => h !== hobby));
    } else {
      setHobbies([...hobbies, hobby]);
    }
  }
  const isSelected = (hobby) => {
    let newStyle = {};
    if(hobbies.includes(hobby)) {
      newStyle = {
        backgroundColor: 'linear-gradient(270.55deg, #131742 0.5%, #34375a 99.55%)',
        color: '#fff'
      }
    }
    return newStyle;
  }

  return (
    <ProspectFormLayout photo="boy">
      <div className="form-col-1">
        <h5>Basic Details</h5>
        <InputBox type="text" placeholder="Enter your full name here" label="Name"/>
        <InputWithDropDown inputWidth="16vw" label="Phone">
          <option>+1</option>
          <option>+91</option>
        </InputWithDropDown>
        <InputBox type="email" placeholder="Enter your email address" label="Email"/>
        <div className="empty-margin" style={{height: "1vh"}}/>
        <h5>Demographic Details</h5>
        <div style={{height: "1vw"}}></div>
        <InputLabel>Gender</InputLabel>
        <div className="radio-row">
          <RadioInput text="Male" name="prospect-gender"/>
          <RadioInput text="Female" name="prospect-gender"/>
          <RadioInput text="Other" name="prospect-gender"/>
        </div>
        <InputLabel>Birthday</InputLabel>
        <div className="birthday-dropdown">
        <DropdownMenu inputWidth="6vw">
          <option value="1">Month</option>
          <option value="2">Jan</option>
          <option value="3">Feb</option>
          <option value="4">Mar</option>
        </DropdownMenu>
        <DropdownMenu inputWidth="6vw">
          <option value="1">Date</option>
          <option value="2">1</option>
          <option value="3">2</option>
          <option value="4">3</option>
        </DropdownMenu>
        <DropdownMenu inputWidth="6vw">
          <option value="1">Year</option>
          <option value="2">1</option>
          <option value="3">2</option>
          <option value="4">3</option>
        </DropdownMenu>
        </div>
        <DropdownMenu label="Ethnicity">
          <option value="1">Select</option>
          <option value="2">Asian</option>
          <option value="3">American</option>
          <option value="4">African</option>
        </DropdownMenu>
        <DropdownMenu label="Marital Status">
          <option value="1">Select</option>
          <option value="2">Great</option>
          <option value="3">Nice</option>
          <option value="4">Awesome</option>
        </DropdownMenu>
        <div className="height-weight-row">
          <InputWithDropDown inputWidth="5vw" label="Height">
            <option>CM</option>
            <option>IN</option>
          </InputWithDropDown>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <InputWithDropDown inputWidth="5vw" label="Weight">
            <option>KG</option>
            <option>LBS</option>
          </InputWithDropDown>
        </div>
        <DropdownMenu label="State">
          <option value="1">Select your state</option>
          <option value="2">Odisha</option>
          <option value="3">Rajashthan</option>
          <option value="4">Maharashtra</option>
        </DropdownMenu>
        <DropdownMenu label="City">
          <option value="1">Select your state</option>
          <option value="2">Bhubaneswar</option>
          <option value="3">Jaipur</option>
          <option value="4">Mumbai</option>
        </DropdownMenu>
      </div>
      <div className="form-col-2">
        <h5>More Details</h5>
        <div style={{height: "1vw"}}></div>
        <InputLabel>Upload picture(s)</InputLabel>
       <FileInput id="prsptform1pics"/>
       <h5>Relationship Preference</h5>
       <div style={{height: "1vw"}}></div>
       <InputLabel>Want kids?</InputLabel>
       <div className="radio-row">
          <RadioInput text="Yes" name="want-kids"/>
          <RadioInput text="No" name="want-kids"/>
       </div>
       <InputLabel>Have kids?</InputLabel>
       <div className="radio-row">
          <RadioInput text="Yes" name="have-kids"/>
          <RadioInput text="No" name="have-kids"/>
       </div>
       <DropdownMenu label="Looking for">
          <option value="2">Type of relationship</option>
          <option value="3">Casual Dating</option>
          <option value="4">Serious Relationship</option>
          <option value="5">Marriage</option>
        </DropdownMenu>
        <DropdownMenu label="Lova Language">
          <option value="2">Words of Affirmation</option>
          <option value="3">English</option>
          <option value="4">Hindi</option>
          <option value="5">Punjabi</option>
        </DropdownMenu>
        <InputLabel>Hobbies</InputLabel>
        <div className="hobbies">
          <div className="hobby-row">
            <SelectBox onClick={()=>toggleSelect("Hiking")} newStyle={isSelected()}>Hiking</SelectBox>
            <SelectBox onClick={()=>toggleSelect("Bagpacking")} newStyle={isSelected()}>Bagpacking</SelectBox>
            <SelectBox onClick={()=>toggleSelect("Camping")} newStyle={isSelected()}>Camping</SelectBox>
            <SelectBox onClick={()=>toggleSelect("Hunting")} newStyle={isSelected()}>Hunting</SelectBox>
          </div>
          <div className="hobby-row">
            <SelectBox onClick={()=>toggleSelect("Kayaking")} newStyle={isSelected()}>Kayaking</SelectBox>
            <SelectBox onClick={()=>toggleSelect("Fishing")} newStyle={isSelected()}>Fishing</SelectBox>
            <SelectBox onClick={()=>toggleSelect("Archery")} newStyle={isSelected()}>Archery</SelectBox>
            <SelectBox onClick={()=>toggleSelect("Canoeing")} newStyle={isSelected()}>Canoeing</SelectBox>
          </div>
          <div className="hobby-row">
            <SelectBox onClick={()=>toggleSelect("Running")} newStyle={isSelected()}>Running</SelectBox>
            <SelectBox onClick={()=>toggleSelect("Farming")} newStyle={isSelected()}>Farming</SelectBox>
            <SelectBox onClick={()=>toggleSelect("Beekeeping")} newStyle={isSelected()}>Beekeeping</SelectBox>
            <SelectBox onClick={()=>toggleSelect("Geocaching")} newStyle={isSelected()}>Geocaching</SelectBox>
          </div>
          <div className="hobby-row">
            <SelectBox onClick={()=>toggleSelect("Running")} newStyle={isSelected()}>Running</SelectBox>
            <SelectBox onClick={()=>toggleSelect("Farming")} newStyle={isSelected()}>Farming</SelectBox>
            <SelectBox onClick={()=>toggleSelect("Beekeeping")} newStyle={isSelected()}>Beekeeping</SelectBox>
            <SelectBox onClick={()=>toggleSelect("Geocaching")} newStyle={isSelected()}>Geocaching</SelectBox>
          </div>
        </div>
        <div className="btn-row">
          <GreenButton>NEXT</GreenButton>
        </div>
      </div>
    </ProspectFormLayout>
  );
}

export default OwnProfile;