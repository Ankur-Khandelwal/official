import React from 'react'
import Drawer from '../../components/Drawer'
import BlueBox from '../../components/UI/BlueBox'
import StarIcon from '@mui/icons-material/Star';
import img1 from '../../Images/AdobeStock_253980681 2 1.png'
import img2 from '../../Images/AdobeStock_388247075 1.png'
import img3 from '../../Images/AdobeStock_278704303 1.png'
import img4 from '../../Images/AdobeStock_2479749531.png'
import img5 from "../../Images/Group 572.png"
import BlueButton from '../../components/UI/BlueButton';
import logo from "../../Images/SELECTR brand guidelines (1)-5 1.png"
import BlueRoundIcon from '../../components/UI/BlueRoundIcon'
import RedRoundIcon from "../../components/UI/RedRoundIcon"
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import WhiteBox from '../../components/UI/WhiteBox';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import Pie from "../../components/UI/Pie"
import './style.css'
import { height } from '@mui/system';

export default function pool_selector() {
    
    let arr = [{Key:"BORN",value:"5 DEC"},
               {Key:"COUNTRY",value:"USA"},
               {Key:"AGE",value:"29 YR"},
               {Key:"STATE",value:"FLORIDA"},
               {Key:"RELATIONSHIP",value:"SINGLE"},
               {Key:"CITY",value:"SAN DIEGO"}]

    return (
        <div className="ProfileOwn1">
            <Drawer />
            

            <div className="ProfileOwn1-After-Drawer">

            {/* <BlueBox style={{height :"35vh",width:"15vw",dispaly:"flex",justifyContent:"space-between",flexWrap:"wrap",top:"35vh",background:"white",left:"75vw"}}> */}
             <BlueBox style={{height :"37vh",width:"17vw",top:"6vw",left:"80vw",background:"white",display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
                    
                    {
                        arr.map((obj) =>{

                           return <div className="ProfileOwn1-options">
                                <div className="ProfileOwn1-box-icon">
                                    <StarIcon sx={{ fontSize: 13 , color: "red"}}/>
                                </div>
                                <div className="ProfileOwn1-boxhead">
                                    {obj.Key}
                                </div>
                                <div className="ProfileOwn1-boxcontent">
                                    {obj.value}
                                </div>
                            </div>

                        })
                    }
                    
                    
                </BlueBox>

                <div className="ProfileOwn1-right-card">

                    <img src={img4} alt="img4" className='ProfileOwn1-right-card-image4'/>
                    <div className='ProfileOwn1-right-card-bluebox'>
                        <div style={{display:"flex",marginTop:"0.5vw",marginBottom:"-1.1vw",marginLeft:"0.5vw"}}>

                            <ViewCompactIcon />
                            <p style={{fontSize:"0.7rem",fontWeight:"600",fontFamily:"Poppins",marginLeft:"0.3vw"}}>Finalizing</p>
        
                        </div>
                        <p style={{fontSize:"0.5rem",fontWeight:"600",fontFamily:"Poppins",marginLeft:"2.2vw"}}>PHASE</p>
                        
                    </div>
                    <div className='ProfileOwn1-right-card-redbutton'>

                        <p className='ProfileOwn1-right-card-redbutton-content'>
                            
                            VIEW POOL
                        </p>

                    </div>

                    
                    <img src ={img5} alt='img5' className='ProfileOwn1-right-card-image5'/>
                    
                    <WhiteBox style={{top: "3.5vw", left: "10vw"}}>
                                <span>
                                    <SupervisorAccountIcon sx={{ fontSize: 20 , color: "red"}}/>
                                </span>
                                
                                <span style={{fontFamily: "Bebas Neue", color: "midnightblue"}}>22</span>
                                <span style={{fontFamily: "Bebas Neue", color: "midnightblue",fontSize:"0.7vw",fontWeight:"600"}}>LEFT</span>
                    </WhiteBox>
                    

                </div>

                

               <BlueBox style={{height :"13vh",width:"40vw",display:"flex",justifyContent:"space-between",flexWrap:"wrap",top:"39vw",left:"50vw",background:"white",width:'',position:"absolute"}}>
                    
                    {
                        arr.map((obj) =>{

                           return <div className="ProfileOwn1-options" >
                                <div className="ProfileOwn1-box-icon">
                                    <StarIcon sx={{ fontSize: 13 , color: "red"}}/>
                                </div>
                                <div className="ProfileOwn1-boxhead">
                                    {obj.Key}
                                </div>
                                <div className="ProfileOwn1-boxcontent">
                                    {obj.value}
                                </div>
                            </div>

                        })
                    }
                </BlueBox>

                <div>
                    <img className="ProfileOwn1-image1" src={img1} alt="img1"/>
                </div>

                <div>
                    <img className="ProfileOwn1-image2" src={img3} alt="img3"/>
                </div>

                <div>
                    <img className="ProfileOwn1-image3" src={img2} alt="img2"/>
                </div>

                <BlueBox style={{color:"white",position:"absolute",top:"4vh" ,height:"4vh",width:"7vw",left:"19vw",display:"flex",justifyContent:"center",alignItems:"center",padding:"0",fontFamily:"Poppins",fontSize:"0.7vw"}}>
                    BACK
                </BlueBox>

                
                <div style={{position:"absolute",top:"1vh",left:"90vw"}}>
                    <BlueRoundIcon style={{height:"3vw",width:"3vw"}}>
                        <StarIcon sx={{ fontSize: 20 , color: "white"}}/>
                    </BlueRoundIcon>
                </div>
                

                <BlueBox style={{height :"40vh",width:"20vw",top:"18vh",background:"white",left:"18vw",boxShadow: "0px 0px 0px"}}>
                    
                    
                    <div className="ProfileOwn1-data-logo">
                        <div style={{position:"relative",top:"-1.3vh",marginLeft:"-2.5vh",}}>
                            <RedRoundIcon style={{height:"3vw",width:"3vw"}}>
                                <img src ={logo}  alt="Selector" style={{height:"2vh"}}/>
                            </RedRoundIcon>
                        </div>
                        
                        <p>
                            SELECTOR
                        </p>
                    </div>
                    <br></br>
                    <div className="ProfileOwn1-data-head1">
                        <p>
                            JENNY
                        </p>
                        <span >
                            WILSON
                        </span>
                    </div>

                    <div>
                    <span className="ProfileOwn1-data-content-comma">"</span>
                        <p className="ProfileOwn1-data-content">

                            What is Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna Aliqua?
                        </p>
                    </div>
                    
                    

                    
                </BlueBox>

            </div>

            

            










        </div>
    )
}
