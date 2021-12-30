import React, { useState, useEffect } from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import Logo from '../../../components/UI/Logo';
import boy from "../../../Images/AdobeStock_214746128 3.png";
import girl from "../../../Images/AdobeStock_253980681 2 1.png";
// import RadioInput from "../../../components/RadioInput";


const Registration1 = () => {
    const [firstname, setFirstName] =  useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [otherGender, setOtherGender] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');

    useEffect(()=>{
        if(document.getElementById('other').checked) setGender(otherGender);
    }, [otherGender]);

    return (
        <div className='registration-page'>
            <Logo/>
            <div className="register-box">
                <div className='register-box-header'>REGISTER</div>
                <input className="input-box" placeholder="Enter your first name" value={firstname} onChange={(e)=>setFirstName(e.target.value)}/>
                <input className="input-box" placeholder="Enter your last name"  value={lastname} onChange={(e)=>setLastName(e.target.value)}/>
                <input className="input-box" placeholder="Enter your email address"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input className="input-box" placeholder="Enter your phone number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                <input className="input-box" placeholder="dd/mm/yy" value={dob} onChange={(e)=>setDob(e.target.value)}/>
                <div className="gender-box">
                    <div className="input-box">
                        <input type="radio" id="male" name="gender" value="male" onClick={(e)=>setGender(e.target.value)}/>
                        <label for="male">Male</label>
                    </div>
                    <div className="input-box">
                        <input type="radio" id="female" name="gender" value="female" onClick={(e)=>setGender(e.target.value)}/>
                        <label for="female">Female</label>
                    </div>
                    <div className="input-box other">
                        <input type="radio" id="other" name="gender" value={otherGender} onClick={(e)=>setGender(e.target.value)}/>
                        <label for="other">Other</label>
                    </div>
                    <input className="input-box" placeholder="Enter gender" onChange={(e)=>setOtherGender(e.target.value)}/>
                </div>
                <input className="input-box" placeholder="Enter your city" value={city} onChange={(e)=>setCity(e.target.value)}/>
                <input className="input-box" placeholder="Enter your state" value={state} onChange={(e)=>setState(e.target.value)}/>
                <input className="input-box" placeholder="Enter your country" value={country} onChange={(e)=>setCountry(e.target.value)}/>
                <input className="input-box" placeholder="Enter a strong password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <input className="input-box" placeholder="Repeat your password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                <div className="input-box main-sign-up-btn">SIGN UP</div>
                <div className="input-box sign-in-btn"><i class="fab fa-google"></i>&nbsp;&nbsp;Sign in with Google</div>
                <div className="input-box sign-in-btn"><i class="fab fa-facebook"></i>&nbsp;&nbsp;Sign in with Facebook</div>
                <div className="input-box sign-in-btn"><i class="fab fa-twitter"></i>&nbsp;&nbsp;Sign in with Twitter</div>
                <div className="already"> Alreay a member? <Link to="/login">Sign in Here</Link> </div>
            </div>
            <div className="boy-image-r"><img src={boy} alt="boy"/></div>
            <div className="girl-image-r"><img src={girl} alt="girl"/></div>
        </div>
    )
}
export default Registration1;