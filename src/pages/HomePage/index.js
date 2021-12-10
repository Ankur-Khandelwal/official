import Navbar from "../../components/Navbar/index.js";
import boy from "../../Images/AdobeStock_214746128 3.png";
import boy1 from "../../Images/AdobeStock_214746128 (1)3.png";
import laughingBoy from "../../Images/AdobeStock_1445627161.png";
import girl from "../../Images/AdobeStock_253980681 2 1.png";
import girl1 from "../../Images/AdobeStock_2479749531.png";
import girl3 from "../../Images/AdobeStock_269221208 1.png"
import groupPhoto from "../../Images/AdobeStock_271631079 1.jpg";
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
import FavoriteIcon from '@mui/icons-material/Favorite';
import PoppText from "../../components/UI/PoppText";
import StarIcon from '@mui/icons-material/Star';
import ShowChartIcon from '@mui/icons-material/ShowChart';
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


<BlueBox style={{height :"35vh",width:"17vw",top:"140vh",fontFamily: 'Bebas Neue'}}>
                   
             <RedBox style={{height:"2.8vh",width:"1.2vw",top:"-3vh",left:"-2vw",borderRadius:"2vw",display:"flex",justifyContent:"center"}}>

                  <FavoriteIcon sx={{ fontSize: 30 , color: "white"}}/>
               
               </RedBox>       
            <div className="BlueBox-header">

              <div>
              
                <div className="boxheader" style={{fontSize:"2.3vh"}}>
                    FINISHED
                </div>
                <div className="boxcontent-container" style={{fontSize:"3.5vh"}}>
                    STRUGLES
                </div>
              </div>

              <div className="dual-image">
                    <div className="girl">
                    <img className="img11" src={boy1} alt=""/>
                    </div>
                    <div className =" boy">
                      <img className="img11" src={girl1} alt=""/>
                    </div>
              </div>
             </div>

             <div className="BlueBox-middle">

             <RedBox style={{height:"0.2vh",width:"0.2vw",display:"flex",justifyContent:"center",alignItems:"center",color:"white"}}>
              
                        <p style={{color:"white",fontWeight:"bold"}} >#1</p>

              </RedBox> 
              <div className="boxcontent-container" style={{fontSize:"2.5vh",position:"absolute",left:"5vw",marginTop:"1.5vh",fontWeight:"bold",letterSpacing:"0.1vw"}}>
                    STRUGLES
                </div>
                  
                  </div>

                <div className="BlueBox-footer">

                    <div className="options1">
                        <div className="box-icon">
                            {/* <StarIcon sx={{ fontSize: 13 , color: "red"}}/> */}
                        </div>
                        <div className="boxheader">
                            BORN
                        </div>
                        <div className="boxcontent-container">
                            5 DEC 
                            <StarIcon sx={{ fontSize: 10 , color: "red"}}/>
                        </div>
                    </div>

                    <div className="options1">
                        <div className="box-icon">
                            {/* <StarIcon sx={{ fontSize: 13 , color: "red"}}/> */}
                        </div>
                        <div className="boxheader">
                            BORN
                        </div>
                        <div className="boxcontent-container">
                            5 DEC 
                            <StarIcon sx={{ fontSize: 10 , color: "red"}}/>
                        </div>
                    </div>
                    <div className="options1">
                        <div className="box-icon">
                            {/* <StarIcon sx={{ fontSize: 13 , color: "red"}}/> */}
                        </div>
                        <div className="boxheader">
                            BORN
                        </div>
                        <div className="boxcontent-container">
                            5 DEC
                            <StarIcon sx={{ fontSize: 10 , color: "red"}}/>
                        </div>
                    </div>

                    <div className="options1">
                        <div className="box-icon">
                            <StarIcon sx={{ fontSize: 13 , color: "red"}}/>
                        </div>
                        <div className="boxheader">
                            BORN
                        </div>
                        <div className="boxcontent-container">
                            5 DEC 1990
                        </div>
                    </div>

                    <div className="options1">
                        <div className="box-icon">
                            <StarIcon sx={{ fontSize: 13 , color: "red"}}/>
                        </div>
                        <div className="boxheader">
                            BORN
                        </div>
                        <div className="boxcontent-container">
                            5 DEC 1990
                        </div>
                    </div>
                    <div className="options1">
                        <div className="box-icon">
                            <StarIcon sx={{ fontSize: 13 , color: "red"}}/>
                        </div>
                        <div className="boxheader">
                            BORN
                        </div>
                        <div className="boxcontent-container">
                            5 DEC 1990
                        </div>
                    </div>
                    
                  </div> 
                    
                </BlueBox>


        <div className="landing2-image">
          <img src={boy} alt=""/>
        </div>

        <div className="img12">
          <img src={girl3} alt=""/>
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
              <div className="l4-card-icon">
                <BoltOutlinedIcon/>
              </div>
              <div className="l4-card-text">
                <p className="l4-card-heading">WE HAVE HIGH QUALITY, VETTED PROSPECTS</p>
                <p className="l4-card-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel fringilla quam. Curabitur pellentesque nulla sit amet placerat efficitur. </p>
              </div>
            </div>
            <div className="l4-card">
              <div className="l4-card-icon">
                <FavoriteRoundedIcon/>
              </div>
              <div className="l4-card-text">
                <p className="l4-card-heading">EACH SELECTR GAME FEATURES 50+ PROSPECTS</p>
                <p className="l4-card-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel fringilla quam. Curabitur pellentesque nulla sit amet placerat efficitur. </p>
              </div>
            </div>
            <div className="l4-card">
              <div className="l4-card-icon">
                <CommentRoundedIcon/>
              </div>
              <div className="l4-card-text">
                <p className="l4-card-heading">PROFESSIONAL COACHING</p>
                <p className="l4-card-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel fringilla quam. Curabitur pellentesque nulla sit amet placerat efficitur. </p>
              </div>
            </div>
            <div className="l4-card">
              <div className="l4-card-icon">
                <EmojiEmotionsOutlinedIcon/>
              </div>
              <div className="l4-card-text">
                <p className="l4-card-heading">VIDEO AND AUDIO INTERACTIONS</p>
                <p className="l4-card-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel fringilla quam. Curabitur pellentesque nulla sit amet placerat efficitur. </p>
              </div>
            </div>
            <div className="l4-card">
              <div className="l4-card-icon">
                <CelebrationOutlinedIcon/>
              </div>
              <div className="l4-card-text">
                <p className="l4-card-heading">A FUN PROCESS WITH NO LOSERS</p>
                <p className="l4-card-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel fringilla quam. Curabitur pellentesque nulla sit amet placerat efficitur. </p>
              </div>
            </div>
            <div className="l4-card">
              <div className="l4-card-icon">
                <CakeRoundedIcon/>
              </div>
              <div className="l4-card-text">
                <p className="l4-card-heading">PARTICIPATE OR GET INTERACTIVE</p>
                <p className="l4-card-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel fringilla quam. Curabitur pellentesque nulla sit amet placerat efficitur. </p>
              </div>
            </div>
          </div>
      </div>
      <div className="landing5 landing2">
      <div className="landing2-image">
          <img src={laughingBoy} alt="" style={{width:"30vw"}}/>
        </div>
      <div className="landing2-text">
          <p className="head1">SO YOU WANT  TO DATE SOMEONE WITH __</p>
          <p className="head2">Passion and Drive?</p>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet quam ut lacus hendrerit condimentum.</p>
          <p className="text">Mauris sapien elit, porta vel faucibus in, scelerisque nec arcu.</p>
          <BlueButton text="JOIN TODAY"/>
        </div>
      </div>
      <div className="landing6">
        <div className="landing6-text">
        <p className="head1">SO YOU WANT  TO DATE SOMEONE WITH __</p>
          <p className="head2">Passion and Drive?</p>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet quam ut lacus hendrerit condimentum.</p>
          <p className="text">Mauris sapien elit, porta vel faucibus in, scelerisque nec arcu.</p>
        </div>
        <div className="landing6-image">
          <div className="main">
            <img className="img1" src={girl1} alt=""/>
            <img className="img2" src={boy1} alt=""/>
          </div>
        </div>
      </div>
      <div className="landing8">
        
      </div>
    </div>
  )
}

export default HomePage;