import React from "react";
import Drawer from "../../components/Drawer";
import ResizableDrawer from "../../components/ResizableDrawer";
import BlueBox from '../../components/UI/BlueBox'
import StarIcon from '@mui/icons-material/Star';
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
import img7 from "../../Images/AdobeStock_283017546 3.png"
import logo1 from "../../Images/SELECTR 2.png"
import FavoriteIcon from '@mui/icons-material/Favorite';
import MovingIcon from '@mui/icons-material/Moving';
import logo from "../../Images/SELECTR brand guidelines (1)-5 1.png"
import "./style.css";

import img10 from '../../Images/AdobeStock_2479749531.png'
import img11 from '../../Images/AdobeStock_214746128 (1)3.png'
export default function Session() {

    let arr = [{Key:"BORN",value:"5 DEC 1990"},
               {Key:"COUNTRY",value:"USA"},
               {Key:"AGE",value:"29 YR"},
               {Key:"STATE",value:"CALIFORNIA"},
               {Key:"RELATIONSHIP",value:"SINGLE"},
               {Key:"CITY",value:"SAN DIEGO"}];

    let arr1 = [1,2,3];           

  return (
    <div className="GE">
        <Drawer />
        <div className ="GE-AfterDrawer">
                <ResizableDrawer style={{position:"relative",top:"2vh"}} />

                <BlueBox style={{color:"white",position:"absolute",top:"4vh" ,height:"4vh",width:"7vw",left:"19vw",display:"flex",justifyContent:"center",alignItems:"center",padding:"0"}}>
                    back
                </BlueBox>

                <div style={{position:"absolute",top:"1vh",left:"90vw"}}>
                    <BlueRoundIcon style={{height:"3vw",width:"3vw"}}>
                        <StarIcon sx={{ fontSize: 20 , color: "white"}}/>
                    </BlueRoundIcon>
                </div>
            <div className="GE-AfterResizableDrawer">

                <BlueBox style={{height :"40vh",width:"22vw",background:"white",boxShadow: "0px 0px 0px",top:"25%"}}>
                    
                    <div className="GE-data-head1">
                        <p style={{color:"rgb(20, 20, 67)",fontSize:"8vw"}}>
                            ROBERT
                        </p>
                        <span style={{color:"red"}}>
                            FOX
                        </span>
                        
                    </div>

                    <div>
                    <p className="GE-data-content-comma">
                        "
                    </p>
                        <p className="GE-data-content">

                            What is Lorem ipsum dolor sit amet consectetur adipiscing elit 
                        </p>
                    </div>

                    <BlueBox style={{color:"white",height:"4vh",width:"12vw",display:"flex",justifyContent:"center",alignItems:"center",padding:"0",marginTop:"1.5vh",left:"2vw",background:"red",letterSpacing: "0.1vw"}}>
                        
                        <img src={logo} alt="logo" style={{marginRight:"2.4vw" ,height:"1.5vh"}}/>
                        <p style={{fontSize: "1.5vh",marginLeft:"-1vw",fontFamily:"Poppins",fontWeight:"600"}}>
                            ADD TO FAVROUITE
                        </p>
                        
                    </BlueBox>

                    

                    
                </BlueBox>
                    
                        
                        <img src={img7} alt="img7" className="GE-img1"/>
                <BlueBox style={{height :"40vh",width:"18vw",display:"flex",justifyContent:"space-between",flexWrap:"wrap",top:"25vh",background:"white",left:"80vw"}}>
                    
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
                        
                        
             </div> 


             <BlueBox style={{height :"45vh",width:"60vw",justifyContent:"space-between",flexWrap:"wrap",top:"80vh",left:"33vw",background:"white",position:"absolute",zIndex:"2"}}>
                    
                
                    
                    <div style={{display:"flex"}}>
                        <div style={{width:"10vw"}}>
                            <div className="GE-boxcontent" style={{fontSize:"5vh"}}>
                                        PERSONAL
                            </div>
                            <div className="GE-boxhead" style={{fontSize:"2.5vh",marginTop:"-2vh"}}>
                                            DETAILS
                            </div>
                        </div>
                            {
                                arr.map((obj) =>{

                                return <div className="GE-options" style={{marginLeft:"1.5vw"}} >
                                        <div className="GE-box-icon">
                                            <StarIcon sx={{ fontSize: 13 , color: "red"}}/>
                                        </div>
                                        <div className="GE-boxhead">
                                            {obj.Key}
                                        </div>
                                        <div className="GE-boxcontent">
                                            {obj.value}
                                        </div>
                                    </div>

                                })
                            }
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",marginTop:"3vh"}}>

                            {
                                arr1.map((val)=>(

                                    <div className="GE-detail-card">
                                
                                <div className="GE-detail-card-part1">
                                        <div className="GE-detail-card-part1-left">
                                            <div className="GE-detail-card-part1-left-content">
                                                <p>
                                                    <img src={logo1} alt="logo" style={{height:'1vw'}}/>
                                                </p>
                                                <p id='GE-left-data-head1'>SELECTOR</p>
                                                <p id='GE-left-data-content1'>JENNY WILSON</p>
                                            </div>

                                        </div>
                                        <div className="GE-detail-card-part1-right">
                                            <img src={img10} alt="img6" className="GE-detail-card-part1-right-img1" />
                                            <img src={img11} alt="img7" className="GE-detail-card-part1-right-img2" />
                                            
                                        </div>
                                </div>

                                

                                <div className="GE-detail-card-part2">
                                    <div className="GE-detail-card-part2-left">
                                        <div className="heart">
                                            <BlueRoundIcon className="heart" style={{height:"2vw",width:"2vw",background:"red"}}>
                                                <FavoriteIcon/>
                                            </BlueRoundIcon>
                                        </div>
                                    
                                    <div className="GE-detail-card-part2-left-content">
                                        <p id='GE-left-data-head2'>PHASES</p>
                                        <p id='GE-left-data-content2'>CURIOSITY</p>
                                    </div>
                                    </div>
                                    <div className="GE-detail-card-part2-right">
                                        <div className="GE-detail-card-part2-right-box">
                                            <p id="GE-left-data-head2">RATING</p>
                                            <p id='GE-left-data-content2'>5.0
                                                <span> <StarIcon/> </span>
                                            </p>
                                        </div>
                                        <div className="GE-detail-card-part2-right-box">
                                            <p id="GE-left-data-head2">POSITION</p>
                                            <p id='GE-left-data-content2'>5
                                            <span> <MovingIcon/> </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="GE-detail-card-part3">
                                        VIEW POOL
                                </div>

                            </div>
                                    
                                ))
                            }
                    </div>
                    



                </BlueBox>
                        

                    
        </div>

        <div style={{height:"10vw" , width:"25vw",textAlign:"center",position:"absolute",top:"4vw",left:"70vw",fontSize:"5vw",fontFamily:"Bebas Neue",color:"red"}}>
            NOT A MATCH
        </div>

            

    </div>
  );
}
