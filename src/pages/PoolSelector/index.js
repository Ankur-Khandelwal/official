import React from 'react'
import Drawer from '../../components/Drawer'
import BlueBox from '../../components/UI/BlueBox'
import StarIcon from '@mui/icons-material/Star';
import img1 from '../../Images/AdobeStock_263512504 2.png'
import img2 from '../../Images/AdobeStock_260266867 1.png'
import img3 from '../../Images/AdobeStock_230286978 1.png'
import BlueButton from '../../components/UI/BlueButton';
import logo from "../../Images/SELECTR brand guidelines (1)-5 1.png"
import BlueRoundIcon from '../../components/UI/BlueRoundIcon'
import RedRoundIcon from "../../components/UI/RedRoundIcon"
import Pie from '../../components/UI/Pie'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './style1.css'
import { height } from '@mui/system';

export default function pool_selector() {
    
    let arr = [{Key:"BORN",value:"5 DEC"},
               {Key:"COUNTRY",value:"USA"},
               {Key:"AGE",value:"29 YR"},
               {Key:"STATE",value:"FLORIDA"},
               {Key:"RELATIONSHIP",value:"SINGLE"},
               {Key:"CITY",value:"SAN DIEGO"}]

    return (
        <div>
            <Drawer />
            

            <div className="After-Drawer">

            {/* <BlueBox style={{height :"35vh",width:"15vw",dispaly:"flex",justifyContent:"space-between",flexWrap:"wrap",top:"35vh",background:"white",left:"75vw"}}> */}
             <BlueBox style={{height :"37vh",width:"17vw",top:"35vh",left:"75vw",background:"white",display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
                    
                    {
                        arr.map((obj) =>{

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

               
               <BlueBox style={{height :"13vh",width:"40vw",display:"flex",justifyContent:"space-between",flexWrap:"wrap",top:"80vh",left:"50vw",background:"white",width:'',position:"absolute"}}>
                    
                    {
                        arr.map((obj) =>{

                           return <div className="options" >
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

                <div>
                    <img className="image1" src={img1} alt="img1"/>
                </div>

                <div>
                    <img className="image2" src={img3} alt="img3"/>
                </div>

                <div>
                    <img className="image3" src={img2} alt="img2"/>
                </div>

                <BlueBox style={{color:"white",position:"absolute",top:"4vh" ,height:"4vh",width:"7vw",left:"19vw",display:"flex",justifyContent:"center",alignItems:"center",padding:"0"}}>
                    back
                </BlueBox>

                
                <div style={{position:"absolute",top:"1vh",left:"90vw"}}>
                    <BlueRoundIcon style={{height:"3vw",width:"3vw"}}>
                        <StarIcon sx={{ fontSize: 20 , color: "white"}}/>
                    </BlueRoundIcon>
                </div>
                

                <BlueBox style={{height :"40vh",width:"20vw",top:"18vh",background:"white",left:"18vw",boxShadow: "0px 0px 0px"}}>
                    
                    {/* <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div> */}
                    <div className="data-logo">
                        <div style={{position:"relative",top:"-1.3vh",marginLeft:"-2.5vh"}}>
                            <RedRoundIcon>
                                <img src ={logo}  alt="Selector" style={{height:"2vh"}}/>
                            </RedRoundIcon>
                        </div>
                        
                        <p>
                            SELECTOR
                        </p>
                    </div>
                    <br></br>
                    <div className="data-head1">
                        <p>
                            LESLIE
                        </p>
                        <span >
                            WILSON
                        </span>
                    </div>

                    <div>
                    <span className="data-content-comma">"</span>
                        <p className="data-content">

                            What is Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna Aliqua?
                        </p>
                    </div>
                    
                    

                    
                </BlueBox>

            </div>

            {/* <BlueButton>
                    Logindnsjdnswdbwjd
            </BlueButton> */}

            


            <div className='PoolSelector-box'>
                <div className='PoolSelector-box-loader'>
                    <Pie percentage={60} colour="#66CB15" />
                </div>
                <div className='PoolSelector-box-loader-content'>
                    <p style={{marginTop:"0.7vw",fontFamily:"Bebas Neue",fontSize:"1.3vw",color:"rgb(20, 20, 67)"}}>60%</p>
                    <p style={{marginTop:"-1.7vw",fontFamily:"Poppins",fontSize:"0.7vw",fontWeight:"600",color:"rgb(20, 20, 67)"}}>FILLED</p>
                </div>
                <div className='PoolSelector-box-btn'>
                    JOIN POOL<NavigateNextIcon/>
                </div>
            </div>







        </div>
    )
}
