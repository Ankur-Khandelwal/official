import React from "react";
import Drawer from "../../components/Drawer";
import ResizableDrawer from "../../components/ResizableDrawer";
import img1 from "../../Images/AdobeStock_253066985 1.png";
import img2 from "../../Images/AdobeStock_289218846 1.png"
import img3 from "../../Images/AdobeStock_373987036 - Copy (2) 1.png"
import img4 from "../../Images/4442078.png"
import img5 from "../../Images/SELECTR brand guidelines (1)-5 1.png"
import img6 from "../../Images/AdobeStock_308916632 2.png"
import BlueRoundIcon from "../../components/UI/BlueRoundIcon";
import RedRoundIcon from "../../components/UI/RedRoundIcon";
import BlueButton from "../../components/UI/BlueButton"
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import LogoutIcon from '@mui/icons-material/Logout';
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MovingIcon from '@mui/icons-material/Moving';
import img11 from "../../Images/AdobeStock_214746128 (1) 3(3).png"
import img12 from "../../Images/Men.png"
import img13 from "../../Images/AdobeStock_274001205 4.png"
import "./style.css";
export default function Session() {
    let arr = [1,2,3,4,5,6,7,8,9];
  return (
      
    <div className="Single-Phase">
        <Drawer />
            <div className ="Session-AfterDrawer">
                <ResizableDrawer style={{position:"relative",top:"2vh"}} />

                
                    <div className="SP-AfterResizableDrawer">
                    
                        <p style={{marginLeft:"1vw",fontWeight:"600",color:"#131742",marginBottom:"-0vw",fontFamily:"Poppins",fontSize:"1.2vw"}}>Answer this questions in video</p>
                        
                        <div className="SP-Smallcard-container">

                            <div className="SP-Smallcard12">
                                <div className="SP-Smallcard-content2">
                                    <p className="SP-Smallcard-content-head12">
                                        
                                        <CheckIcon />
                                       
                                    </p>
                                    <p className="SP-Smallcard-content-head22">
                                        Lorem ipsum dolor sit error consectetur adipisicing.
                                    </p>
                                </div>
                                
                            </div>

                            <div className="SP-Smallcard12">
                                <div className="SP-Smallcard-content2">
                                    <p className="SP-Smallcard-content-head12">
                                       
                                        <CheckIcon />
                                       
                                    </p>
                                    <p className="SP-Smallcard-content-head22">
                                        Lorem ipsum dolor sit error consectetur adipisicing.
                                    </p>
                                </div>
                                
                            </div>

                            <div className="SP-Smallcard12">
                                <div className="SP-Smallcard-content2">
                                    <p className="SP-Smallcard-content-head12">
                                        
                                        <CheckIcon />
                                       
                                    </p>
                                    <p className="SP-Smallcard-content-head22">
                                        Lorem ipsum dolor sit error consectetur adipisicing.
                                    </p>
                                </div>
                                
                               
                            </div>

                            <div className="SP-Smallcard12">
                                <div className="SP-Smallcard-content2">
                                    <p className="SP-Smallcard-content-head12">
                                       
                                        <CheckIcon />
                                      
                                    </p>
                                    <p className="SP-Smallcard-content-head22">
                                        Lorem ipsum dolor sit error consectetur adipisicing.
                                    </p>
                                </div>
                                
                            </div>

                        </div>

                        <div className="SP-chatbox-container">

                            <div className="SP-header">

                                <div className="SP-header1">
                                    <BlueRoundIcon style={{height:"2.5vw",width:"2.5vw"}}>
                                        <FavoriteIcon></FavoriteIcon>
                                    </BlueRoundIcon>
                                    <p>
                                        <p style={{fontFamily:"Poppins",marginTop:"2.4vw",fontSize:"0.7vw",fontWeight:"600",color:"gray"}}>PHASE</p>
                                        <p style={{fontFamily:"Bebas Neue",fontSize:"1.5vw",fontWeight:"500",marginTop:"-1.5vw",color:"#131742"}}>ROMANTIC</p>
                                        
                                    </p>
                                    
                                </div>
                                <div className="SP-header1">
                                    <p>
                                        <p style={{fontFamily:"Poppins",marginTop:"2.4vw",fontSize:"0.7vw",fontWeight:"600",color:"gray"}}>START</p>
                                        <p style={{fontFamily:"Bebas Neue",fontSize:"1.5vw",fontWeight:"500",marginTop:"-1.5vw",color:"#131742"}}>10 OCTOBER 2021</p>
                                        
                                    </p>
                                    </div>
                                <div className="SP-header1">
                                    <BlueButton text="FUND DATE" style={{height:"2.6vw",background:"red"}}/>
                                </div>

                            </div>

                            <div className="SP-middle">

                                <div className="SP-middle-image">
                                    <img src={img12} alt="Mens" />
                                </div>

                                <div className="SP-middle-card"></div>

                            </div>

                            <div className="SP-List scrollbar" id="style-14">

                                {
                                    arr.map((val)=>{
                                       return <div className="SP-lists-content">
                                            <div className="SP-lists-content-num">
                                                0{val}
                                            </div>
                                            <div className="SP-lists-content-data">
                                                <img src={img11} alt="" className="SP-lists-content-data-img"/>
                                                <p className="SP-lists-content-data-Name">CODY FISHER</p>
                                            </div>
                                            <div className="SP-lists-content-tag1">
                                                <p className="SP-lists-content-tag1-rate">4.5</p>
                                                <p>
                                                    <StarIcon />
                                                </p>
                                            </div>
                                            <div className="SP-lists-content-tag1">
                                                <p className="SP-lists-content-tag1-rate">4.5</p>
                                                <p>
                                                    <MovingIcon />
                                                </p>
                                            </div>
                                            <div className="SP-lists-content-arrow">
                                                <BlueRoundIcon style={{height:"2.5vw",width:"2.5vw"}}>
                                                    <ArrowForwardIosIcon/>
                                                </BlueRoundIcon>
                                            </div>
                                        </div>
                                    })
                                }
                                
                                
                                
                            </div>

                        </div>


                    </div>

                    
            </div>


            <div className="SP-rightPart">
                    <div className="SP-rightPart-card">
                        <img src={img6} alt="img6" className="SP-rightPart-card-image"/>
                    </div>

                    <div className="SP-rightPart-Lists">

                        <div style={{height:"5vw",display:"flex"}}>
                                    <BlueRoundIcon style={{height:"2.5vw",width:"2.5vw"}}>
                                        <LogoutIcon></LogoutIcon>
                                    </BlueRoundIcon>
                                    <p>
                                        <p style={{fontFamily:"Poppins",marginTop:"1vw",fontSize:"0.7vw",fontWeight:"600",color:"gray"}}>PHASE</p>
                                        <p style={{fontFamily:"Bebas Neue",fontSize:"1.7vw",fontWeight:"500",marginTop:"-1.5vw",color:"#131742"}}>ROMANTIC</p>
                                        
                                    </p>
                                    <p>

                                    </p>
                        </div>
                        <div style={{height:"100%" ,display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
                                <div style={{height:"10vw",width:"8.5vw",marginBottom:"1vw"}}>
                                    <img src={img13} alt="img12" style={{height:"10vw",width:"8.5vw"}}/>
                                    <div style={{height:"2vw",width:"8.5vw",fontFamily:"Bebas Neue",fontSize:"0.9vw",color:"#131742",textAlign:"center",paddingTop:"0.2vw",position:"relative",top:"-2vw",backgroundColor:"white",borderRadius:"1vw 1vw 0vw 0vw"}}>
                                        WADE WARREN
                                    </div>
                                </div>

                                <div style={{height:"10vw",width:"8.5vw",marginBottom:"1vw"}}>
                                    <img src={img13} alt="img12" style={{height:"10vw",width:"8.5vw"}}/>
                                    <div style={{height:"2vw",width:"8.5vw",fontFamily:"Bebas Neue",fontSize:"0.9vw",color:"#131742",textAlign:"center",paddingTop:"0.2vw",position:"relative",top:"-2vw",backgroundColor:"white",borderRadius:"1vw 1vw 0vw 0vw"}}>
                                        WADE WARREN
                                    </div>
                                </div>

                                <div style={{height:"10vw",width:"8.5vw",marginBottom:"1vw"}}>
                                    <img src={img13} alt="img12" style={{height:"10vw",width:"8.5vw"}}/>
                                    <div style={{height:"2vw",width:"8.5vw",fontFamily:"Bebas Neue",fontSize:"0.9vw",color:"#131742",textAlign:"center",paddingTop:"0.2vw",position:"relative",top:"-2vw",backgroundColor:"white",borderRadius:"1vw 1vw 0vw 0vw"}}>
                                        WADE WARREN
                                    </div>
                                </div>

                                <div style={{height:"10vw",width:"8.5vw",marginBottom:"1vw"}}>
                                    <img src={img13} alt="img12" style={{height:"10vw",width:"8.5vw"}}/>
                                    <div style={{height:"2vw",width:"8.5vw",fontFamily:"Bebas Neue",fontSize:"0.9vw",color:"#131742",textAlign:"center",paddingTop:"0.2vw",position:"relative",top:"-2vw",backgroundColor:"white",borderRadius:"1vw 1vw 0vw 0vw"}}>
                                        WADE WARREN
                                    </div>
                                </div>

                                <div style={{height:"10vw",width:"8.5vw",marginBottom:"1vw"}}>
                                    <img src={img13} alt="img12" style={{height:"10vw",width:"8.5vw"}}/>
                                    <div style={{height:"2vw",width:"8.5vw",fontFamily:"Bebas Neue",fontSize:"0.9vw",color:"#131742",textAlign:"center",paddingTop:"0.2vw",position:"relative",top:"-2vw",backgroundColor:"white",borderRadius:"1vw 1vw 0vw 0vw"}}>
                                        WADE WARREN
                                    </div>
                                </div>


                              
                        </div>

                    </div>


            </div>

            <BlueButton text="BACK" style={{position:"absolute" ,top:"1.5vh",left:"18vw",fontFamily:"Poppins"}}></BlueButton>
           
            <BlueRoundIcon style={{height:"3vw",width:"3vw",position:"absolute" ,top:"0vh",left:"90vw"}}>
                <PermIdentityIcon></PermIdentityIcon>
            </BlueRoundIcon>
    </div>
  );
}
