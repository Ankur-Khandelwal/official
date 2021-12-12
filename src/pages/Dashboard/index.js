import {useState, useEffect} from 'react';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import littleImage from '../../Images/AdobeStock_247974953.png';
import DatingContest from './Contests/DatingContest';
import FinishedContest from './Contests/FinishedContest';
import UpcomingContest from './Contests/UpcomingContest';
import ProfileCard from '../../components/ProfileCard';
import Drawer from '../../components/Drawer';
import BlueRoundIcon from '../../components/UI/BlueRoundIcon';
import RedRoundIcon from '../../components/UI/RedRoundIcon';
import './style.css';

const Dashboard1 = () => {

  const [contest, setContest] = useState("DATING CONTESTS");

  const renderContests = () => {
    switch (contest) {
      case "DATING CONTESTS":
        console.log("DATING CONTESTS");
        return (<DatingContest/>);
      case "FINISHED CONTESTS":
        return (<FinishedContest/>);
      case "UPCOMING":
        return (<UpcomingContest/>);    
      default:
        return (<DatingContest/>);
    }
  }

  useEffect(() => {
    var header = document.getElementById("ct-tabs");
    var btns = header.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        console.log(this.innerHTML);
        setContest(this.innerHTML);
     });
    }
  },[])

 return(
   <div className="dashboard1">
    <Drawer/>
     <div className="main-dash">
        <div className="small-options">
          <BlueRoundIcon><PersonRoundedIcon/></BlueRoundIcon>
          <BlueRoundIcon><EmailRoundedIcon/></BlueRoundIcon>
          <RedRoundIcon><NotificationsRoundedIcon/></RedRoundIcon>
        </div>
        <div className="header-cards">
          <div className="card">
            <div className="card-image"><img src={littleImage} alt=""/></div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="card-data">
              <div className="card-title">LIVE GAME</div>
              <div className="card-desc"><span style={{fontWeight: "bold"}}>Siarra Jonas</span><span> is looking for partner.</span></div>
            </div>
          </div>
          <div className="card">
            <div className="card-image"><img src={littleImage} alt=""/></div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="card-data">
              <div className="card-title">LIVE GAME</div>
              <div className="card-desc"><span style={{fontWeight: "bold"}}>Siarra Jonas</span><span> is looking for partner.</span></div>
            </div>
          </div>
          <div className="card">
            <div className="card-image"><img src={littleImage} alt=""/></div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="card-data">
              <div className="card-title">LIVE GAME</div>
              <div className="card-desc"><span style={{fontWeight: "bold"}}>Siarra Jonas</span><span> is looking for partner.</span></div>
            </div>
          </div>
        </div>
        <div className="contests-header">
          <p className="contests-header-vertical"></p>
          &nbsp;&nbsp;
          <p>CONTESTS</p>
          &nbsp;&nbsp;
          <p><span>06</span></p>
        </div>
        <div className="tabs-buttons">
          <div className="contest-tabs" id="ct-tabs">
            <p className="btn active">DATING CONTESTS</p>
            <p className="btn">FINISHED CONTESTS</p>
            <p className="btn">UPCOMING</p>
          </div>
          <div className="filter-buttons">
            <p>SORT BY LATEST</p>
            <p>FILTER</p>
          </div>
        </div>
        {renderContests()}
     </div>
   </div>
 )
}

export default Dashboard1;