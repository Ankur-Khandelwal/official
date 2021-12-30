import React from 'react'
import img from "../../Images/AdobeStock_253980681 8(1).png"
import img1 from "../../Images/AdobeStock_289218846 1.png"
import DashboardIcon from '@mui/icons-material/Dashboard';
import BentoIcon from '@mui/icons-material/Bento';
import IosShareIcon from '@mui/icons-material/IosShare';
import RedRoundIcon from '../UI/RedRoundIcon';
import BlueRoundIcon from "../UI/BlueRoundIcon"
import logo from "../../Images/SELECTR brand guidelines (1)-5 1.png"
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WhiteBox from "../../components/UI/WhiteBox.jsx";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuIcon from '@mui/icons-material/Menu';
import Pie from '../../components/UI/Pie'
import "./style.css"
export default function ResizableDrawer(props) {
    return (
        <div style={props.style}>
            
            <p>
                <button data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                    <MenuIcon></MenuIcon>
                </button>
                
            </p>
            <div >
                <div className="collapse collapse-horizontal" id="collapseWidthExample">
                    <div className="card card-body" style={{width: "18vw",border:"0px solid black"}} >

                        <div className="resize-Box">
                            <div className="Name">
                                JENNY
                            </div>
                            <WhiteBox style={{top: "9vw", left: "11vw"}}>
                                <span>
                                    <SupervisorAccountIcon sx={{ fontSize: 20 , color: "red"}}/>
                                </span>
                                
                                <span style={{fontFamily: "Bebas Neue", color: "midnightblue"}}>22 LEFT</span>
                            </WhiteBox>
                            <div className="percent"></div>
                            
                                <img  className="photo" src={img} alt="photo"/>
                               
                                <div style={{position:"absolute",top:"17.8vw"}}>
                                    <RedRoundIcon style={{height:"2.5vw",width:"2.5vw"}}>
                                        <img src ={logo}  alt="Selector" style={{height:"1vw"}}/>
                                    </RedRoundIcon>
                                </div>

                                <div style={{position:"absolute",top:"0vh",left:"10vw",height:"2vw"}}>
                                    <BlueRoundIcon style={{height:"4vw",width:"4vw",fontFamily:"Bebas Neue"}}>
                                       75%
                                       <p style={{fontSize:"0.7vw",position:"absolute",top:"3.3vw",fontFamily:"Poppins"}}>GAME</p>
                                    </BlueRoundIcon>
                                    
                                    <div style={{position:"absolute",top:"-4vw",left:"-4vw"}}>
                                        <Pie percentage={75} colour="gray" />
                                    </div>
                                </div>

                                

                            <div >
                                <a className="view-Profile" href="/www.google.com">VIEW HER PROFILE <span> &nbsp;&nbsp; &gt; </span> </a>
                            </div>
                            <div className="button">
                                <div className="bigboard">
                                    
                                        <DashboardIcon className="icon"></DashboardIcon>
                                    
                                    <span style={{marginLeft:"2vw"}}>
                                         BIG BOARD
                                    </span>
                                    
                                </div>
                                <div className="phases">
                                    <BentoIcon sx={{color:"red"}}></BentoIcon>
                                    <span style={{marginLeft:"2vw"}}>
                                         PHASES
                                    </span>
                                </div>
                                <div className="sessions">
                                    <IosShareIcon sx={{color:"red"}}></IosShareIcon>
                                    <span style={{marginLeft:"2vw"}}>
                                         SESSIONS
                                    </span>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
