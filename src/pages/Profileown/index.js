import React from 'react'
import Drawer from '../../components/Drawer'
import BlueBox from '../../components/UI/BlueBox'
import StarIcon from '@mui/icons-material/Star';
import img1 from '../../Images/AdobeStock_112303559 10.png'
import img2 from '../../Images/AdobeStock_237545236 1.png'
import img3 from '../../Images/AdobeStock_141735342 1.png'
import img4 from '../../Images/AdobeStock_323643982 1.png'
import logo from "../../Images/SELECTR brand guidelines (1)-5 1.png"
import BlueRoundIcon from '../../components/UI/BlueRoundIcon';
import BlueButton from '../../components/UI/BlueButton';

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PublicIcon from '@mui/icons-material/Public';
import ImageAspectRatioIcon from '@mui/icons-material/ImageAspectRatio';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FestivalIcon from '@mui/icons-material/Festival';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';

import './index.css'
export default function Profile() {
    let arr = [{Key:"BORN",value:"5 DEC 1990"},
               {Key:"COUNTRY",value:"USA"},
               {Key:"AGE",value:"29 YR"},
               {Key:"STATE",value:"CALIFORNIA"},
               {Key:"RELATIONSHIP",value:"SINGLE"},
               {Key:"CITY",value:"SAN DIEGO"}]
    return (
        <div className="Profile">
            <Drawer/>
            <div className="After-Drawer">

            <BlueBox style={{color:"white",position:"absolute",top:"4vh" ,height:"4vh",width:"7vw",left:"19vw",display:"flex",justifyContent:"center",alignItems:"center",padding:"0"}}>
                    back
                </BlueBox>

                <div style={{position:"absolute",top:"1vh",left:"90vw"}}>
                    <BlueRoundIcon style={{height:"3vw",width:"3vw"}}>
                        <StarIcon sx={{ fontSize: 20 , color: "white"}}/>
                    </BlueRoundIcon>
                </div>

                <div>
                    <img className="imageP1" src={img1} alt="img1"/>
                </div>

                <BlueBox style={{height :"40vh",width:"18vw",display:"flex",justifyContent:"space-between",flexWrap:"wrap",top:"20vh",background:"white",left:"75vw"}}>
                    
                    <div style={{width:"10vw"}}>
                    <div className="boxcontent" style={{fontSize:"5vh"}}>
                                    BASIC
                    </div>
                    <div className="boxhead" style={{fontSize:"2.5vh",marginTop:"-2vh"}}>
                                    DETAILS
                                </div>
                    </div>
                    {
                        arr.map((obj) =>{
                            {console.log(obj.icon)}
                           return <div className="options">
                                <div className="box-icon">
                                    <StarIcon sx={{ fontSize: 13 , color: "red"}}/>
                                </div>
                                <div className="boxhead">
                                    {obj.Key}
                                </div>
                                <div className="boxcontent">
                                    {obj.value}
                                </div>
                            </div>

                        })
                    }
                    
                    
                </BlueBox>

                <div className='Profile-rightPartt-cards'>

                        <div className="Profile-rightPart-card-small">
                                
                                <div style={{display:"flex",marginLeft:"1vw",marginTop:"1vw"}}>
                                        
                                        <BlueButton text="QUESTION" style={{marginRight:"2vw",background:"red"}}></BlueButton>
                                        
                                    
                                </div>
                                <div className="Profile-rightPart-card-small-content">
                                    <p className="Profile-rightPart-card-small-content-head1">TOPIC</p>
                                    <p className="Profile-rightPart-card-small-content-head2">Lorem ipsum dolor sit error ans in consectetur adipisicing.</p>
                                    <p className="Profile-rightPart-card-small-content-head3">Lorem ipsum dolor sit error consectetur .</p>
                                </div>
                               

                        </div>

                        <div className="Profile-rightPart-card-small">
                                
                                <div style={{display:"flex",marginLeft:"1vw",marginTop:"1vw"}}>
                                        
                                        <BlueButton text="QUESTION" style={{marginRight:"2vw",background:"red"}}></BlueButton>
                                        
                                    
                                </div>
                                <div className="Profile-rightPart-card-small-content">
                                    <p className="Profile-rightPart-card-small-content-head1">TOPIC</p>
                                    <p className="Profile-rightPart-card-small-content-head2">Lorem ipsum dolor sit error ans in consectetur adipisicing.</p>
                                    <p className="Profile-rightPart-card-small-content-head3">Lorem ipsum dolor sit error consectetur .</p>
                                </div>
                               

                        </div>

                </div>

                

            <BlueBox style={{height :"50vh",width:"55vw",justifyContent:"space-between",flexWrap:"wrap",top:"70vh",left:"20vw",background:"white",position:"absolute"}}>
                    
                
                    
                    <div style={{display:"flex"}}>
                        <div style={{width:"10vw"}}>
                            <div className="boxcontent" style={{fontSize:"5vh"}}>
                                        PERSONAL
                            </div>
                            <div className="boxhead" style={{fontSize:"2.5vh",marginTop:"-2vh"}}>
                                            DETAILS
                            </div>
                        </div>
                            {
                                arr.map((obj) =>{

                                return <div className="options1" style={{marginLeft:"1.5vw"}} >
                                        <div className="box-icon">
                                            <StarIcon sx={{ fontSize: 13 , color: "red"}}/>
                                        </div>
                                        <div className="boxhead">
                                            {obj.Key}
                                        </div>
                                        <div className="boxcontent">
                                            {obj.value}
                                        </div>
                                    </div>

                                })
                            }
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",marginTop:"3vh"}}>

                            <div className="detail-card">
                                <div className="detail-image">
                                    <img src={img2} alt = "img2"/>
                                </div>
                                <div className="detail-head">
                                    What is Lorem ipsum dolor sit amet consectetur ad
                                </div>
                                <div className="detail-content">
                                What is Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
                                </div>

                                <BlueBox style={{color:"white",height:"4vh",width:"6vw",display:"flex",justifyContent:"center",alignItems:"center",padding:"0",marginTop:"0vh"}}>
                                <p className ="popins" style={{fontSize:"1.8vh",fontWeight:"600"}}>
                                        VOTED
                                    </p>
                                </BlueBox>

                            </div>

                            <div className="detail-card">
                                <div className="detail-image">
                                    <img src={img3} alt = "img2"/>
                                </div>
                                <div className="detail-head">
                                    What is Lorem ipsum dolor sit amet consectetur ad
                                </div>
                                <div className="detail-content">
                                What is Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
                                </div>

                                <BlueBox style={{color:"white",height:"4vh",width:"6vw",display:"flex",justifyContent:"center",alignItems:"center",padding:"0",marginTop:"0vh"}}>
                                    
                                <p className ="popins" style={{fontSize:"1.8vh",fontWeight:"600"}}>
                                        VOTED
                                    </p>
                                </BlueBox>

                            </div>


                            <div className="detail-card">
                                <div className="detail-image">
                                    <img src={img4} alt = "img2"/>
                                </div>
                                <div className="detail-head">
                                    What is Lorem ipsum dolor sit amet consectetur ad
                                </div>
                                <div className="detail-content">
                                What is Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
                                </div>

                                <BlueBox  style={{color:"white",height:"4vh",width:"6vw",display:"flex",justifyContent:"center",alignItems:"center",padding:"0",marginTop:"0vh"}}>
                                    <p className ="popins" style={{fontSize:"1.8vh",fontWeight:"600"}}>
                                        VOTED
                                    </p>
                                   
                                </BlueBox>

                            </div>
                            

                    </div>
                    



                </BlueBox>

                <BlueBox style={{height :"40vh",width:"22vw",top:"25vh",background:"white",left:"15vw",boxShadow: "0px 0px 0px"}}>
                    
                    <div className="data-head1">
                        <p style={{color:"rgb(20, 20, 67)",fontSize:"8vw"}}>
                            YOU
                        </p>
                        
                    </div>

                    <div>
                    <span className="data-content-comma">"</span>
                        <p className="data-content">

                            What is Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna Aliqua?it amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna Aliqua?
                        </p>
                    </div>
                    
                    <BlueBox style={{color:"white",height:"4vh",width:"8vw",display:"flex",justifyContent:"center",alignItems:"center",padding:"0",marginTop:"1.5vh",letterSpacing: "0.1vw"}}>
                        {/* <StarIcon sx={{ fontSize: 15 , color: "white",marginRight:"2vw"}}/> */}
                        <img src={logo} alt="logo" style={{marginRight:"2.4vw" ,height:"1.5vh"}}/>
                        <p style={{fontSize: "1.5vh",marginLeft:"-1vw"}}>
                            Settings
                        </p>
                        
                    </BlueBox>

                    <BlueBox className="bebas" style={{color:"white",height:"4vh",width:"10vw",display:"flex",justifyContent:"center",alignItems:"center",padding:"0",marginTop:"1.5vh",left:"12vw",background:"red",letterSpacing: "0.1vw"}}>
                        {/* <StarIcon sx={{ fontSize: 15 , color: "white",marginRight:"2vw"}}/> */}
                        <img src={logo} alt="logo" style={{marginRight:"2.4vw" ,height:"1.5vh"}}/>
                        <p style={{fontSize: "1.5vh",marginLeft:"-1vw"}}>
                            become Selector
                        </p>
                        
                    </BlueBox>

                    

                    
                </BlueBox>

                
                

                </div>
            
        </div>
    )
}
