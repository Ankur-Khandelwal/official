import React from 'react'
import Drawer from '../../components/Drawer'
import BlueBox from '../../components/UI/BlueBox'
import StarIcon from '@mui/icons-material/Star';
import MovingIcon from '@mui/icons-material/Moving';
import img1 from '../../Images/Men1.png'
import img2 from '../../Images/AdobeStock_237545236 1.png'
import img3 from '../../Images/AdobeStock_141735342 1.png'
import img4 from '../../Images/AdobeStock_323643982 1.png'
import img5 from '../../Images/disco.png'
import img6 from '../../Images/AdobeStock_2479749531.png'
import img7 from '../../Images/AdobeStock_214746128 (1)3.png'
import logo from "../../Images/SELECTR brand guidelines (1)-5 1.png"
import logo1 from "../../Images/SELECTR 2.png"
import line from "../../Images/Rectangle 2.png"
import BlueRoundIcon from '../../components/UI/BlueRoundIcon';
import BlueButton from '../../components/UI/BlueButton';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PublicIcon from '@mui/icons-material/Public';
import ImageAspectRatioIcon from '@mui/icons-material/ImageAspectRatio';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FestivalIcon from '@mui/icons-material/Festival';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import FavoriteIcon from '@mui/icons-material/Favorite';



import './style.css'
import { width } from '@mui/system';
export default function ParticipantProfile() {
    let arr = [{Key:"BORN",value:"5 DEC 1990"},
               {Key:"COUNTRY",value:"USA"},
               {Key:"AGE",value:"29 YR"},
               {Key:"STATE",value:"CALIFORNIA"},
               {Key:"RELATIONSHIP",value:"SINGLE"},
               {Key:"CITY",value:"SAN DIEGO"}];

    let arr1 = [1,2,3];

    return (
        <div className="ParticipantProfile">
            <Drawer/>
            <div className="PP-After-Drawer">

                <BlueBox style={{color:"white",position:"absolute",top:"4vh" ,height:"4vh",width:"7vw",left:"19vw",display:"flex",justifyContent:"center",alignItems:"center",padding:"0"}}>
                    back
                </BlueBox>

                <div style={{position:"absolute",top:"1vh",left:"90vw"}}>
                    <BlueRoundIcon style={{height:"3vw",width:"3vw"}}>
                        <StarIcon sx={{ fontSize: 20 , color: "white"}}/>
                    </BlueRoundIcon>
                </div>

                <div>
                    <img className="PP-imageP1" src={img1} alt="img1"/>
                </div>

                <BlueBox style={{height :"40vh",width:"18vw",display:"flex",justifyContent:"space-between",flexWrap:"wrap",top:"20vh",background:"white",left:"75vw"}}>
                    
                    <div style={{width:"10vw"}}>
                    <div className="PP-boxcontent" style={{fontSize:"5vh"}}>
                                    BASIC
                    </div>
                    <div className="PP-boxhead" style={{fontSize:"2.5vh",marginTop:"-2vh"}}>
                                    DETAILS
                                </div>
                    </div>
                    {
                        arr.map((obj) =>{
                            {console.log(obj.icon)}
                           return <div className="PP-options">
                                <div className="PP-box-icon">
                                    <StarIcon sx={{ fontSize: 13 , color: "red"}}/>
                                </div>
                                <div className="PP-boxhead">
                                    {obj.Key}
                                </div>
                                <div className="PP-boxcontent">
                                    {obj.value}
                                </div>
                            </div>

                        })
                    }
                    
                    
                </BlueBox>

               

                <img src={img5} alt="img5" className='PP-Right-Image'/>


<BlueBox style={{height :"45vh",width:"60vw",justifyContent:"space-between",flexWrap:"wrap",top:"70vh",left:"15vw",background:"white",position:"absolute"}}>
                    
                
                    
                    <div style={{display:"flex"}}>
                        <div style={{width:"10vw"}}>
                            <div className="PP-boxcontent" style={{fontSize:"5vh"}}>
                                        PERSONAL
                            </div>
                            <div className="PP-boxhead" style={{fontSize:"2.5vh",marginTop:"-2vh"}}>
                                            DETAILS
                            </div>
                        </div>
                            {
                                arr.map((obj) =>{

                                return <div className="PP-options" style={{marginLeft:"1.5vw"}} >
                                        <div className="PP-box-icon">
                                            <StarIcon sx={{ fontSize: 13 , color: "red"}}/>
                                        </div>
                                        <div className="PP-boxhead">
                                            {obj.Key}
                                        </div>
                                        <div className="PP-boxcontent">
                                            {obj.value}
                                        </div>
                                    </div>

                                })
                            }
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",marginTop:"3vh"}}>

                            {
                                arr1.map((val)=>(

                                    <div className="PP-detail-card">
                                
                                <div className="PP-detail-card-part1">
                                        <div className="PP-detail-card-part1-left">
                                            <div className="PP-detail-card-part1-left-content">
                                                <p>
                                                    <img src={logo1} alt="logo" style={{height:'1vw'}}/>
                                                </p>
                                                <p id='PP-left-data-head1'>SELECTOR</p>
                                                <p id='PP-left-data-content1'>JENNY WILSON</p>
                                            </div>

                                        </div>
                                        <div className="PP-detail-card-part1-right">
                                            <img src={img6} alt="img6" className="PP-detail-card-part1-right-img1" />
                                            <img src={img7} alt="img7" className="PP-detail-card-part1-right-img2" />
                                            
                                        </div>
                                </div>

                                {/* <img src={line} style={{width:"0.4vw"}}/> */}

                                <div className="PP-detail-card-part2">
                                    <div className="PP-detail-card-part2-left">
                                        <div className="heart">
                                            <BlueRoundIcon className="heart" style={{height:"2vw",width:"2vw",background:"red"}}>
                                                <FavoriteIcon/>
                                            </BlueRoundIcon>
                                        </div>
                                    
                                    <div className="PP-detail-card-part2-left-content">
                                        <p id='PP-left-data-head2'>PHASES</p>
                                        <p id='PP-left-data-content2'>CURIOSITY</p>
                                    </div>
                                    </div>
                                    <div className="PP-detail-card-part2-right">
                                        <div className="PP-detail-card-part2-right-box">
                                            <p id="PP-left-data-head2">RATING</p>
                                            <p id='PP-left-data-content2'>5.0
                                                <span> <StarIcon/> </span>
                                            </p>
                                        </div>
                                        <div className="PP-detail-card-part2-right-box">
                                            <p id="PP-left-data-head2">POSITION</p>
                                            <p id='PP-left-data-content2'>5
                                            <span> <MovingIcon/> </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="PP-detail-card-part3">
                                        VIEW POOL
                                </div>

                            </div>
                                    
                                ))
                            }
                    </div>
                    



                </BlueBox>

                <BlueBox style={{height :"40vh",width:"22vw",top:"15vh",background:"white",left:"15vw",boxShadow: "0px 0px 0px"}}>
                    
                    <div className="PP-data-head1">
                        <p style={{color:"rgb(20, 20, 67)",fontSize:"8vw"}}>
                            ROBERT
                        </p>
                        <span style={{color:"red"}}>
                            WILSON
                        </span>
                        
                    </div>

                    <div>
                    <p className="PP-data-content-comma">
                        "
                    </p>
                        <p className="PP-data-content">

                            What is Lorem ipsum dolor sit amet consectetur adipiscing elit 
                        </p>
                    </div>
                    
                    {/* <BlueBox style={{color:"white",height:"4vh",width:"8vw",display:"flex",justifyContent:"center",alignItems:"center",padding:"0",marginTop:"1.5vh",letterSpacing: "0.1vw"}}>
                       
                        <img src={logo} alt="logo" style={{marginRight:"2.4vw" ,height:"1.5vh"}}/>
                        <p style={{fontSize: "1.5vh",marginLeft:"-1vw"}}>
                            Settings
                        </p>
                        
                    </BlueBox> */}

                    <BlueBox style={{color:"white",height:"4vh",width:"12vw",display:"flex",justifyContent:"center",alignItems:"center",padding:"0",marginTop:"1.5vh",left:"2vw",background:"red",letterSpacing: "0.1vw"}}>
                        {/* <StarIcon sx={{ fontSize: 15 , color: "white",marginRight:"2vw"}}/> */}
                        <img src={logo} alt="logo" style={{marginRight:"2.4vw" ,height:"1.5vh"}}/>
                        <p style={{fontSize: "1.5vh",marginLeft:"-1vw",fontFamily:"Poppins",fontWeight:"600"}}>
                            ADD TO FAVROUITE
                        </p>
                        
                    </BlueBox>

                    

                    
                </BlueBox>

                
                

                </div>
            
        </div>
    )
}
