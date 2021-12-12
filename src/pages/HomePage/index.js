import Navbar from "../../components/Navbar/index.js";
import boy from "../../Images/AdobeStock_214746128 3.png";
import laughingBoy from "../../Images/AdobeStock_1445627161.png";
import girl from "../../Images/AdobeStock_253980681 2 1.png";
import groupPhoto from "../../Images/AdobeStock_271631079 1.jpg";
import twin1 from "../../Images/twin1.png";
import twin2 from "../../Images/twin2.png";
import boyGirlGroup from "../../Images/groupboygirl.png";
import blueCardImage from "../../Images/blueCardImage.png";
import graphImage from "../../Images/graph.png";
import glassCardBottom from "../../Images/Group 1032.png";
import GlassCard from "../../components/UI/GlassCard";
import BlueButton from "../../components/UI/BlueButton";
import RedCircle from "../../components/UI/RedCircle.jsx";
import RedBox from "../../components/UI/RedBox.jsx";
import BlueBox from "../../components/UI/BlueBox.jsx";
import WhiteBox from "../../components/UI/WhiteBox.jsx";
import StraightenIcon from '@mui/icons-material/Straighten';
import FemaleIcon from '@mui/icons-material/Female';
import CribIcon from '@mui/icons-material/Crib';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import CakeRoundedIcon from '@mui/icons-material/CakeRounded';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import EggRoundedIcon from '@mui/icons-material/EggRounded';
import ModelTrainingRoundedIcon from '@mui/icons-material/ModelTrainingRounded';
import PoppText from "../../components/UI/PoppText";
import BlueCard from "../../components/UI/BlueCard.jsx";
import BlueRoundIcon from "../../components/UI/BlueRoundIcon.jsx";
import RedRoundIcon from "../../components/UI/RedRoundIcon.jsx";
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GreyCard from "../../components/UI/GreyCard.jsx";
import Logo from "../../components/UI/Logo.jsx";
import "./style.css";

const HomePage = () => {
  return(
    <div className="home-page">
      <Navbar/>
        <div className=" landing landing1">
        <div className="landing1-text">
          <p className="t1">MATCH YOUR __</p>
          <p className="t2">Lifestyle</p>
          <p className="t3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non </p>
          <BlueButton text="JOIN US"/>
        </div>
        <div className="landing1-image">
          <img src={girl} alt="girl"/>
          <RedCircle style={{top: "14vw", left: "3vw"}}/>
          <BlueBox style={{top: "33vw", left: "14vw"}}>
            <FemaleIcon style={{color: "red"}}/>
            <PoppText>SEX</PoppText>
            <p style={{fontFamily: "Bebas Neue", color: "white"}}>FEMALE</p>
          </BlueBox>
          <WhiteBox style={{top: "13vw", left: "35vw"}}>
            <CribIcon sx={{ fontSize: 20 , color: "midnightblue"}}/>
            <p id="kids">KIDS</p>
            <p style={{fontFamily: "Bebas Neue", color: "midnightblue"}}>NONE</p>
          </WhiteBox>
          <RedBox style={{top: "31vw", left: "4vw"}}>
            <StraightenIcon style={{transform: "rotate(90deg)", color: "white"}}/>
            <PoppText>HEIGHT</PoppText>
            <p className="p1">
              5<span className="p2">ft</span>
              &nbsp;&nbsp;
              6<span className="p2">in</span>
            </p>
          </RedBox>
          <GlassCard
            style={{bottom: 0, right: "10px", padding: "0 auto"}}
          >
            <div className="gc-data">
             <div className="col">
              <div className="element">
                <i class="far fa-calendar"></i>
                <p className="label">BORN</p>
                <p className="data">5 DEC 1990</p>
              </div>
              <div className="element">
                <i class="fas fa-id-card"></i>
                <p className="label">AGE</p>
                <p className="data">29 YR</p>
              </div>
              <div className="element">
                <i class="fas fa-user"></i>
                <p className="label">RELATIONSHIP</p>
                <p className="data">SINGLE</p>
              </div>
             </div>
             &nbsp; &nbsp; &nbsp; &nbsp;
             <div className="col">
              <div className="element">
                <i class="fas fa-globe-americas"></i>
                <p className="label">COUNTRY</p>
                <p className="data">USA</p>
              </div>
              <div className="element">
                <i class="fas fa-map"></i>
                <p className="label">STATE</p>
                <p className="data">CALIFORNIA</p>
              </div>
              <div className="element">
                <i class="fas fa-city"></i>
                <p className="label">CITY</p>
                <p className="data">SAN DIEGO</p>
              </div>
             </div>
            </div>
          </GlassCard>
        </div>
      </div>
      <div className="landing2">
        <div className="landing2-image">
          <img src={boy} alt=""/>
        </div>
        <div className="landing2-text">
          <p className="head1">SO YOU WANT  TO DATE SOMEONE WITH __</p>
          <p className="head2">Passion and Drive?</p>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet quam ut lacus hendrerit condimentum.</p>
          <p className="text">Mauris sapien elit, porta vel faucibus in, scelerisque nec arcu.</p>
          <BlueButton text="HOW DO WE DO IT?"/>
        </div>
      </div>
      <div className="landing3">
      <div className="landing3-text">
          <p className="head1">SO YOU WANT  TO DATE SOMEONE WITH __</p>
          <p className="head2">Passion and Drive?</p>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet quam ut lacus hendrerit condimentum.</p>
          <p className="text">Mauris sapien elit, porta vel faucibus in, scelerisque nec arcu.</p>
          <BlueButton text="JOIN TODAY"/>
        </div>
        <div className="landing3-image">
          <img src={groupPhoto} alt=""/>
        </div>
      </div>
      <div className="landing4">
        <div className="landing6-text">
          <p className="head1">__ TIME TO TRY SOMETHING DIFFERENT __</p>
            <p className="head2">This Selectr is more than you have ever seen before</p>
          </div>
          <div className="landing4-cards">
            <div className="l4-card">
              <BlueRoundIcon><BoltOutlinedIcon/></BlueRoundIcon>
              <div className="l4-card-text">
                <p className="l4-card-heading">WE HAVE HIGH QUALITY, VETTED PROSPECTS</p>
                <p className="l4-card-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel fringilla quam. Curabitur pellentesque nulla sit amet placerat efficitur. </p>
              </div>
            </div>
            <div className="l4-card">
             <BlueRoundIcon><FavoriteRoundedIcon/></BlueRoundIcon>
              <div className="l4-card-text">
                <p className="l4-card-heading">EACH SELECTR GAME FEATURES 50+ PROSPECTS</p>
                <p className="l4-card-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel fringilla quam. Curabitur pellentesque nulla sit amet placerat efficitur. </p>
              </div>
            </div>
            <div className="l4-card">
              <BlueRoundIcon><CommentRoundedIcon/></BlueRoundIcon> 
              <div className="l4-card-text">
                <p className="l4-card-heading">PROFESSIONAL COACHING</p>
                <p className="l4-card-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel fringilla quam. Curabitur pellentesque nulla sit amet placerat efficitur. </p>
              </div>
            </div>
            <div className="l4-card">
              <BlueRoundIcon><EmojiEmotionsOutlinedIcon/></BlueRoundIcon>
              <div className="l4-card-text">
                <p className="l4-card-heading">VIDEO AND AUDIO INTERACTIONS</p>
                <p className="l4-card-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel fringilla quam. Curabitur pellentesque nulla sit amet placerat efficitur. </p>
              </div>
            </div>
            <div className="l4-card">
              <BlueRoundIcon><CelebrationOutlinedIcon/></BlueRoundIcon>
              <div className="l4-card-text">
                <p className="l4-card-heading">A FUN PROCESS WITH NO LOSERS</p>
                <p className="l4-card-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel fringilla quam. Curabitur pellentesque nulla sit amet placerat efficitur. </p>
              </div>
            </div>
            <div className="l4-card">
              <BlueRoundIcon><CakeRoundedIcon/></BlueRoundIcon>
              <div className="l4-card-text">
                <p className="l4-card-heading">PARTICIPATE OR GET INTERACTIVE</p>
                <p className="l4-card-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel fringilla quam. Curabitur pellentesque nulla sit amet placerat efficitur. </p>
              </div>
            </div>
          </div>
          <BlueButton text="LEARN MORE"/>
      </div>
      <div className="landing5 landing2">
      <div className="landing2-image landing5-image">
          <img src={laughingBoy} alt="" className="boy-image"/>
          <img src={blueCardImage} alt="" className="blue-card-image"/>
        </div>
      <div className="landing2-text">
          <p className="head1">BETTER PROSPECTS __</p>
          <p className="head2">High quality, Vetted Prospects</p>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet quam ut lacus hendrerit condimentum.</p>
          <p className="text">Mauris sapien elit, porta vel faucibus in, scelerisque nec arcu.</p>
          <BlueButton text="JOIN TODAY"/>
        </div>
      </div>
      <div className="landing6">
        <div className="landing6-text">
        <p className="head1">__ MORE OPTIONS TO MATCH __</p>
          <p className="head2">Get to know 50+ Prospects per game</p>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet quam ut lacus hendrerit condimentum.</p>
          <p className="text">Mauris sapien elit, porta vel faucibus in, scelerisque nec arcu.</p>
        </div>
        <div className="landing6-image">
            <img src={twin2} alt=""/>
        </div>
      </div>
      <div className="landing7">
        <div className="landing2-text">
          <p className="head1">EXPERTS IN YOUR CORNER __</p>
          <p className="head2">Relationship Pros</p>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quam ut lacus hendrerit.</p>
          <BlueButton text="JOIN TODAY"/>
        </div>
        <GreyCard>
          <BlueRoundIcon><ModelTrainingRoundedIcon/></BlueRoundIcon>
          <b>Image Consultant Feedback</b>
          <p>Lorem ipsum dolor sit amet, cons adipiscing elit.</p>
        </GreyCard>
        <BlueCard>
          <RedRoundIcon><EggRoundedIcon/></RedRoundIcon>
          <b>Relationship Coach</b>
          <p>Lorem ipsum dolor sit amet, cons adipiscing elit.</p>
        </BlueCard>
      </div>
      <div className="landing8 landing2">
      <div className="landing2-image">
          <img src={boyGirlGroup} alt=""/>
        </div>
        <div className="landing2-text">
          <p className="head1">SO YOU WANT  TO DATE SOMEONE WITH __</p>
          <p className="head2">Passion and Drive?</p>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet quam ut lacus hendrerit condimentum.</p>
          <p className="text">Mauris sapien elit, porta vel faucibus in, scelerisque nec arcu.</p>
          <BlueButton text="HOW DO WE DO IT?"/>
        </div>
      </div>

      <div className="landing9 landing2 landing8">
      <div className="landing2-image">
          <img src={twin1} alt=""/>
        </div>
        <div className="landing2-text">
          <p className="head1">THE PROCESS ___</p>
          <p className="head2">Learn how we make it Happen!</p>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet quam ut lacus hendrerit condimentum.</p>
          <BlueButton text="CREATE YOUR ACCOUNT NOW"/>
        </div>
      </div>

      <div className="landing10">

      </div>

      <div className="landing11">
        <div className="head-text">
          <p className="p1">We'd love to hear from you</p>
          <p className="p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet quam ut lacus hendrerit condimentum.</p>
        </div>
        <div className="input-text">
          <span>Hi, my name is</span><input type="text" placeholder="Type Here"/><span>and I'm looking for</span>
          <input type="text" placeholder="Type Here"/><span>Get in touch with me at</span><input type="email" placeholder="Type Here"/>
          <span> , Thank You.</span>
        </div>
      </div>

      <div className="footer">
        <div className="bg-blur"/>
        <div className="meta">
          <Logo/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet quam ut lacus hendrerit condimentum.</p>
          <div className="app-d-links">
            <div className="white-btn">
              <GoogleIcon/>
              &nbsp;&nbsp;
              <p>GOOGLE PLAY</p>
            </div>
            <div className="white-btn">
              <AppleIcon/>
              &nbsp;&nbsp;
              <p>APP STORE</p>
            </div>
          </div>
        </div>
        <div className="links">
          <div className="col">
            <div className="header">
              NAVIGATION
            </div>
            <div className="options">
                <p>About</p>
                <p>Our Team</p>
                <p>FAQs</p>
                <p>The App</p>
                <p>Contact</p>
              </div>
          </div>

          <div className="col">
            <div className="header">
              LEGAL
            </div>
            <div className="options">
                <p>Privacy</p>
                <p>Cookie Policy</p>
                <p>Security</p>
                <p>Terms</p>
              </div>
          </div>

          <div className="col">
            <div className="header">
              CONTACT US
            </div>
            <div className="options">
                <p><LocationOnIcon/>Bhubaneswar, Odisha</p>
                <p><CallIcon/>+91 8337904981</p>
                <p><EmailIcon/>ankurkh1@gmail.com</p>
              </div>
          </div>
          
        </div>
      </div>

      <div className="bottom-image">
        <img src={laughingBoy} alt="" className="boy"/>
        <img src={graphImage} alt="" className="graph"/>
        {/* <img src={glassCardBottom} alt="" className="glass-card"/> */}
      </div>
    </div>
  )
}

export default HomePage;