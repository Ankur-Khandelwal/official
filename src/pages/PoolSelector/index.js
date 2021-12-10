import React from 'react'
import Drawer from '../../components/Drawer'
import BlueBox from '../../components/UI/BlueBox'
import StarIcon from '@mui/icons-material/Star';
import img1 from '../../Images/AdobeStock_263512504 2.png'
import img2 from '../../Images/AdobeStock_260266867 1.png'
import img3 from '../../Images/AdobeStock_230286978 1.png'
import BlueButton from '../../components/UI/BlueButton';
import logo from "../../Images/selecter.png";
import Logo1 from '../../components/UI/Logo1';
import './style1.css'
import { height } from '@mui/system';

export default function pool_selector() {
    let arr = [{Key:"BORN",value:"5 DEC 1990"},{Key:"BORN",value:"5 DEC 1990"},{Key:"BORN",value:"5 DEC 1990"},{Key:"BORN",value:"5 DEC 1990"},{Key:"BORN",value:"5 DEC 1990"},{Key:"BORN",value:"5 DEC 1990"}]
    return (
        <div>
            <Drawer />


            <div className="After-Drawer">


             <BlueBox style={{height :"30vh",width:"15vw",display:"flex",justifyContent:"space-between",flexWrap:"wrap",top:"40vh",background:"white",left:"75vw"}}>
                    
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

               <BlueBox style={{height :"10vh",width:"40vw",display:"flex",justifyContent:"space-between",flexWrap:"wrap",top:"80vh",left:"50vw",background:"white",width:'',position:"absolute"}}>
                    
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

                <BlueBox style={{color:"white",position:"absolute",top:"4vh" ,height:"2vh",width:"0.3vw",left:"90vw",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <StarIcon sx={{ fontSize: 20 , color: "white"}}/>
                </BlueBox>

                <BlueBox style={{height :"40vh",width:"22vw",top:"20vh",background:"white",left:"15vw",boxShadow: "0px 0px 0px"}}>
                    
                    {/* <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div> */}
                    <div className="data-logo">
                        <Logo1/>
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

                            What is Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna Aliqua?it amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna Aliqua?
                        </p>
                    </div>
                    
                    

                    
                </BlueBox>

            </div>

            {/* <BlueButton>
                    Logindnsjdnswdbwjd
            </BlueButton> */}

            










        </div>
    )
}
