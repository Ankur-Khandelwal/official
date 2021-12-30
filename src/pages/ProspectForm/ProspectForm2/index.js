import ProspectFormLayout from '../Layout';
import DropdownMenu from '../../../components/DropdownMenu';
import InputWithDropDown from '../../../components/UI/InputWithDropDown';
import InputBox from '../../../components/InputBox';
import RadioInput from '../../../components/RadioInput';
import InputLabel from '../../../components/UI/InputLabel.jsx';
import FileInput from '../../../components/UI/FileInput';
import SelectBox from '../../../components/UI/SelectBox';
import GreenButton from '../../../components/UI/GreenButton';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import './style.css';
import { useState } from 'react';
import BlueButton from '../../../components/UI/BlueButton';

const ProspectForm2 = () => {

  const [nonNego, setNonNego] = useState([]);
  const [phases, setPhases] = useState([]);

  const toggleSelectNonNego = (act) => {
    if(nonNego.includes(act)) {
      setNonNego(nonNego.filter(h => h !== act));
    } else {
      setNonNego([...nonNego, act]);
    }
  }

  const toggleSelectPhase = (phase) => {
    if(phases.includes(phase)) {
      setNonNego(phases.filter(h => h !== phase));
    } else {
      setNonNego([...phases, phase]);
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

  const addMoreSocialMedia = () => {
    let newSocialMedia = <InputWithDropDown inputWidth="17vw"><option>F</option><option>I</option><option>T</option></InputWithDropDown>;
    document.querySelector('#social-media').appendChild(newSocialMedia);
  }

  return (
    <ProspectFormLayout>
      <div className="form-col-1">
        <h5>About</h5>
        <InputBox type="text" placeholder="Enter your full name here" label="Brief Description"/>
        <InputLabel>Hobbies</InputLabel>
        <div className="non-nego-acts">
          <div className="acts-row">
            <SelectBox onClick={()=>toggleSelectNonNego("Smoking")} newStyle={isSelected()}>Smoking</SelectBox>
            <SelectBox onClick={()=>toggleSelectNonNego("Obesity")} newStyle={isSelected()}>Obesity</SelectBox>
            <SelectBox onClick={()=>toggleSelectNonNego("Inactivity")} newStyle={isSelected()}>Inactivity</SelectBox>
            <SelectBox onClick={()=>toggleSelectNonNego("Drinking")} newStyle={isSelected()}>Drinking</SelectBox>
          </div>
          <div className="acts-row">
            <SelectBox onClick={()=>toggleSelectNonNego("Kayaking")} newStyle={isSelected()}>Kayaking</SelectBox>
            <SelectBox onClick={()=>toggleSelectNonNego("Fishing")} newStyle={isSelected()}>Fishing</SelectBox>
            <SelectBox onClick={()=>toggleSelectNonNego("Worrying")} newStyle={isSelected()}>Archery</SelectBox>
            <SelectBox onClick={()=>toggleSelectNonNego("Canoeing")} newStyle={isSelected()}>Canoeing</SelectBox>
          </div>
         </div> 
         <InputBox type="text" placeholder="Start typing" label="Add More"/>
          <InputLabel>Explain your personality</InputLabel>
          <textarea placeholder="Briefly explain your personality"/>
          <InputBox type="email" placeholder="Enter the email address of your reference" label="Email address of your reference"/>
          <h5>Social Media</h5>
          <div className='social-media' id='social-media'>
            <InputWithDropDown inputWidth="17vw">
              <option>F</option>
              <option>I</option>
              <option>T</option>
            </InputWithDropDown>
            <InputWithDropDown inputWidth="17vw">
              <option>F</option>
              <option>I</option>
              <option>T</option>
            </InputWithDropDown>
            <InputWithDropDown inputWidth="17vw">
              <option>F</option>
              <option>I</option>
              <option>T</option>
            </InputWithDropDown>
          </div>
          <BlueButton text="ADD MORE" onclick={()=>addMoreSocialMedia()}/>
      </div>
      <div className="form-col-2">
        <h5>Phases</h5>
        <div style={{height: "1vw"}}></div>
        <InputLabel>Select the phase you want in the pool</InputLabel>
        <div className="hobbies">
          <div className="hobby-row">
            <SelectBox onClick={()=>toggleSelectPhase("Non-Negotiable")} newStyle={isSelected()}>Non-Negotiable</SelectBox>
            <SelectBox onClick={()=>toggleSelectPhase("Looks ")} newStyle={isSelected()}>Looks</SelectBox>
            <SelectBox onClick={()=>toggleSelectPhase("Doubt")} newStyle={isSelected()}>Doubt</SelectBox>
            <SelectBox onClick={()=>toggleSelectPhase("Denial")} newStyle={isSelected()}>Denial</SelectBox>
          </div>
          <div className="hobby-row">
            <SelectBox onClick={()=>toggleSelectPhase("Non-Negotiable")} newStyle={isSelected()}>Non-Negotiable</SelectBox>
            <SelectBox onClick={()=>toggleSelectPhase("Looks ")} newStyle={isSelected()}>Looks</SelectBox>
            <SelectBox onClick={()=>toggleSelectPhase("Doubt")} newStyle={isSelected()}>Doubt</SelectBox>
            <SelectBox onClick={()=>toggleSelectPhase("Denial")} newStyle={isSelected()}>Denial</SelectBox>
          </div>
          <div className="hobby-row">
            <SelectBox onClick={()=>toggleSelectPhase("Non-Negotiable")} newStyle={isSelected()}>Non-Negotiable</SelectBox>
            <SelectBox onClick={()=>toggleSelectPhase("Looks ")} newStyle={isSelected()}>Looks</SelectBox>
            <SelectBox onClick={()=>toggleSelectPhase("Doubt")} newStyle={isSelected()}>Doubt</SelectBox>
            <SelectBox onClick={()=>toggleSelectPhase("Denial")} newStyle={isSelected()}>Denial</SelectBox>
          </div>
        </div>
        <h5>Contact Details</h5>
        <div style={{height: "1vw"}}></div>
        <div className="height-weight-row">
          <InputWithDropDown inputWidth="7vw" label="Best time to talk">
            <option>AM</option>
            <option>PM</option>
          </InputWithDropDown>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <InputWithDropDown inputWidth="7vw" label=".">
            <option>AM</option>
            <option>PM</option>
          </InputWithDropDown>
        </div>
        <DropdownMenu label="Best method">
          <option value="1">Select the contact method</option>
          <option value="2">WhatsApp</option>
          <option value="3">Call</option>
          <option value="4">Personally</option>
        </DropdownMenu>
        <h5>Agreement & Privacy Protection</h5>
        <div style={{height: "1vw"}}></div>
        <InputLabel>Read the agreement & NDA</InputLabel>
        <div className="agreement">
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div style={{height: "1vw"}}></div>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <input type="checkbox"/>
          <InputLabel>Accept and agree to terms and conditions</InputLabel>
        </div>
        <div style={{height: "1vw"}}></div>
        <GreenButton>SUBMIT</GreenButton>
      </div>
    </ProspectFormLayout>
  );
}

export default ProspectForm2;