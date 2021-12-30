import "./style.css";
import {Link} from 'react-router-dom';
import Logo from "../../components/UI/Logo";
import boy from "../../Images/AdobeStock_3963150651.png";
import girl from "../../Images/AdobeStock_1902388161.png";
import circlepic1 from "../../Images/circlepic1.png";
import circlepic2 from "../../Images/circlepic2.png";
import circlepic3 from "../../Images/circlepic3.png";
import circlepic4 from "../../Images/circlepic4.png";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  function submitLogin(e) {
    e.preventDefault();
    const data = { email, password };
    console.log(data);
    const url = 'localhost:5000/login';
    axios
      .post(url, data)
      .then((res) => {
        if (res.status === 200) {
          window.localStorage.setItem(
            'loggedInUser',
            JSON.stringify(res.data.user)
          );
          navigate('/dashboard');
          setEmail('');
          setPassword('');
        } else {
          setErrorMsg(res.message);
        }
        console.log(res.data.user);
      })
      .catch((error) => {
        console.log(error);
        setErrorMsg('Authentication failed');
      });
  }

  return (
    <div className="container1">
      <Logo/>
      <div className="main-container">
        <div className="boy-girl">
          <div className="boy">
            <img className="boy-image" src={boy} alt="boy"/>
            <div className="circular-images">
              <img className="circle-pic c1" src={circlepic1} alt="circlepic1"/>
              <img className="circle-pic c2" src={circlepic2} alt="circlepic2"/>
              <img className="circle-pic c3" src={circlepic3} alt="circlepic3"/>
              <img className="circle-pic c4" src={circlepic4} alt="circlepic4"/>
            </div>
          </div>
          <div className="girl">
            <img className="girl-image" src={girl} alt="girl"/>
            <div className="girl-card"></div>
          </div>
        </div>

        <div className="login-box">
          <p className="login-header">LOGIN</p>
          <p style={{color: "red"}}>{errorMsg}</p>
          <input className="input-box" placeholder="Enter your email address" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input className="input-box" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <div className="password-processes">
            <div className="remember-me">
              <input type="checkbox" id="remember" onClick={()=>setRemember(!remember)}/>
              <label for="remember"> Remember me</label>
            </div>
            <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
          </div>
          <div className="input-box main-sign-in-btn" onClick={(e)=>submitLogin(e)}>SIGN IN</div>
          <div className="input-box sign-in-btn"><i class="fab fa-google"></i>&nbsp;&nbsp;Sign in with Google</div>
          <div className="input-box sign-in-btn"><i class="fab fa-facebook"></i>&nbsp;&nbsp;Sign in with Facebook</div>
          <div className="input-box sign-in-btn"><i class="fab fa-twitter"></i>&nbsp;&nbsp;Sign in with Twitter</div>
          <div className="already"> Not registered? <Link to="/registration1">Create an Account</Link> </div>
        </div>
      </div>

    </div>
  )
}

export default Login;