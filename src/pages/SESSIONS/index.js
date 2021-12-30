import React from "react";
import Drawer from "../../components/Drawer";
import ResizableDrawer from "../../components/ResizableDrawer";
import img1 from "../../Images/AdobeStock_253066985 1.png";
import img2 from "../../Images/AdobeStock_289218846 1.png"
import img3 from "../../Images/AdobeStock_373987036 - Copy (2) 1.png"
import img4 from "../../Images/4442078.png"
import img5 from "../../Images/SELECTR brand guidelines (1)-5 1.png"
import img6 from "../../Images/AdobeStock_260346975 1.png"
import BlueRoundIcon from "../../components/UI/BlueRoundIcon";
import RedRoundIcon from "../../components/UI/RedRoundIcon";
import BlueButton from "../../components/UI/BlueButton"
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import "./style.css";
export default function Session() {
  return (
    <div className="Session">
        <Drawer />
            <div className ="Session-AfterDrawer">
                <ResizableDrawer style={{position:"relative",top:"2vh"}} />

                
                    <div className="Session-AfterResizableDrawer">
                    
                        <p style={{marginLeft:"1vw",fontWeight:"600",color:"#131742",marginBottom:"-0vw",fontFamily:"Poppins",fontSize:"1.5vw"}}>SESSION NAME</p>
                        <img src={img1} alt="img1" className="Session-img1"/>
                        <div className="inSession">
                             IN SESSION
                        </div>
                        <div className="Session-Smallcard-container">

                            <div className="Session-Smallcard1">
                                <div className="Session-Smallcard-content">
                                    <p className="Session-Smallcard-content-head1">
                                        The Masses
                                    </p>
                                    <p className="Session-Smallcard-content-head2">
                                        Lorem ipsum dolor sit error consectetur adipisicing.
                                    </p>
                                </div>
                                
                                <img src={img2} alt="img2" className="Session-Smallcard-image"/>
                                

                            </div>
                            
                            <div className="Session-Smallcard1">
                                <div className="Session-Smallcard-content">
                                    <p className="Session-Smallcard-content-head1">
                                        <BlueRoundIcon style={{marginBottom:"-4%",marginLeft:"-2%",marginTop:"-2%"}}>
                                             <img src={img5} alt="img5" style={{height:"60%"}}/>
                                        </BlueRoundIcon>
                                        Coach
                                    </p>
                                    <p className="Session-Smallcard-content-head2">
                                        Lorem ipsum dolor sit error consectetur adipisicing.
                                    </p>
                                </div>
                                
                                <img src={img3} alt="img3" className="Session-Smallcard-image"/>
                                

                            </div>

                            <div className="Session-Smallcard1">
                                <div className="Session-Smallcard-content">
                                    <p className="Session-Smallcard-content-head1">
                                        <RedRoundIcon style={{marginBottom:"-4%",marginLeft:"-2%",marginTop:"-2%"}}>
                                            <img src={img5} alt="img5" style={{height:"60%"}}/>
                                        </RedRoundIcon>
                                        Selectr
                                    </p>
                                    <p className="Session-Smallcard-content-head2">
                                        Lorem ipsum dolor sit error consectetur adipisicing.
                                    </p>
                                </div>
                                
                                <img src={img4} alt="img4" className="Session-Smallcard-image"/>
                                

                            </div>

                        </div>

                        <div className="Session-chatbox-container">

                        </div>


                    </div>

                    
            </div>


            <div className="Session-rightPart">
            <p style={{marginLeft:"1vw",fontWeight:"600",color:"#131742",marginBottom:"-0vw",fontFamily:"Poppins",fontSize:"1.5vw"}}>PHASES</p>
                    <div className="Session-rightPart-card">

                        
                        <img src={img6} alt="img6" className="Session-rightPart-card-image"/>
                        
                        <div className="Session-rightPart-card-content">
                            <p className="Session-rightPart-card-content-head1">QUESTION</p>
                            <p className="Session-rightPart-card-content-head2">Lorem ipsum dolor sit error ans in consectetur adipisicing.</p>
                            <p className="Session-rightPart-card-content-head3">Lorem ipsum dolor sit error consectetur .</p>
                        </div>

                    </div>

                    <div className="Session-rightPart-card">

                        
                        <img src={img6} alt="img6" className="Session-rightPart-card-image"/>
                        
                        <div className="Session-rightPart-card-content">
                            <p className="Session-rightPart-card-content-head1">QUESTION</p>
                            <p className="Session-rightPart-card-content-head2">Lorem ipsum dolor sit error ans in consectetur adipisicing.</p>
                            <p className="Session-rightPart-card-content-head3">Lorem ipsum dolor sit error consectetur .</p>
                        </div>

                    </div>

                    <div className="Session-QuickPoll">
                        QUICK POLL
                        <span>
                            
                            🡪
                        </span>
                    </div>

                    <div className="Session-rightPart-card-small">
                        
                        <div className="Session-rightPart-card-small-content">
                            <p className="Session-rightPart-card-small-content-head1">TOPIC</p>
                            <p className="Session-rightPart-card-small-content-head2">Lorem ipsum dolor sit error ans in consectetur adipisicing.</p>
                            <p className="Session-rightPart-card-small-content-head3">Lorem ipsum dolor sit error consectetur .</p>
                        </div>
                        <div style={{display:"flex",marginLeft:"1vw"}}>
                               
                                <BlueButton text="YES" style={{marginRight:"2vw"}}></BlueButton>
                                <BlueButton text="NO"></BlueButton>
                            
                        </div>

                    </div>

                    <div className="Session-rightPart-card-small">
                        
                        <div className="Session-rightPart-card-small-content">
                            <p className="Session-rightPart-card-small-content-head1">TOPIC</p>
                            <p className="Session-rightPart-card-small-content-head2">Lorem ipsum dolor sit error ans in consectetur adipisicing.</p>
                            <p className="Session-rightPart-card-small-content-head3">Lorem ipsum dolor sit error consectetur .</p>
                        </div>
                        <div style={{display:"flex",marginLeft:"1vw"}}>
                               
                                <BlueButton text="YES" style={{marginRight:"2vw"}}></BlueButton>
                                <BlueButton text="NO"></BlueButton>
                            
                        </div>

                    </div>

            </div>

            <BlueButton text="BACK" style={{position:"absolute" ,top:"1.5vh",left:"18vw",fontFamily:"Poppins"}}></BlueButton>
            <BlueButton text="SUBSCRIBE TO NOTIFICATIONS" style={{position:"absolute" ,top:"1.5vh",left:"33vw",fontFamily:"Poppins"}}></BlueButton>
            <BlueRoundIcon style={{height:"3vw",width:"3vw",position:"absolute" ,top:"0vh",left:"90vw"}}>
                <PermIdentityIcon></PermIdentityIcon>
            </BlueRoundIcon>
    </div>
  );
}
