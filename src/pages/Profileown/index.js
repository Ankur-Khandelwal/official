import React from 'react'
import Drawer from '../../components/Drawer'
import BlueBox from '../../components/UI/BlueBox'
import StarIcon from '@mui/icons-material/Star';
import img1 from '../../Images/AdobeStock_112303559 10.png'
import img2 from '../../Images/AdobeStock_237545236 1.png'
import img3 from '../../Images/AdobeStock_141735342 1.png'
import img4 from '../../Images/AdobeStock_323643982 1.png'
import Logo1 from '../../components/UI/Logo1'
import './index.css'
export default function Profile() {
    let arr = [{Key:"BORN",value:"5 DEC 1990"},{Key:"BORN",value:"5 DEC 1990"},{Key:"BORN",value:"5 DEC 1990"},{Key:"BORN",value:"5 DEC 1990"},{Key:"BORN",value:"5 DEC 1990"},{Key:"BORN",value:"5 DEC 1990"}]
    return (
        <div className="Profile">
            <Drawer/>
            <div className="After-Drawer">

            <BlueBox style={{color:"white",position:"absolute",top:"4vh" ,height:"4vh",width:"7vw",left:"19vw",display:"flex",justifyContent:"center",alignItems:"center",padding:"0"}}>
                    back
                </BlueBox>

                <BlueBox style={{color:"white",position:"absolute",top:"4vh" ,height:"2vh",width:"0.3vw",left:"90vw",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <StarIcon sx={{ fontSize: 20 , color: "white"}}/>
                </BlueBox>

                <div>
                    <img className="imageP1" src={img1} alt="img1"/>
                </div>

                <BlueBox style={{height :"40vh",width:"15vw",display:"flex",justifyContent:"space-between",flexWrap:"wrap",top:"20vh",background:"white",left:"75vw"}}>
                    
                    <div style={{width:"10vw"}}>
                    <div className="boxcontent" style={{fontSize:"5vh"}}>
                                    BASIC
                    </div>
                    <div className="boxhead" style={{fontSize:"2.5vh"}}>
                                    DETAILS
                                </div>
                    </div>
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

            <BlueBox style={{height :"47vh",width:"50vw",justifyContent:"space-between",flexWrap:"wrap",top:"70vh",left:"22vw",background:"white",position:"absolute"}}>
                    
                
                    
                    <div style={{display:"flex"}}>
                        <div style={{width:"10vw"}}>
                        <div className="boxcontent" style={{fontSize:"5vh"}}>
                                    PERSONAL
                        </div>
                        <div className="boxhead" style={{fontSize:"2.5vh"}}>
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
                    <div style={{display:"flex",justifyContent:"space-between",marginTop:"1vh"}}>

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

                                <BlueBox style={{color:"white",height:"4vh",width:"7vw",display:"flex",justifyContent:"center",alignItems:"center",padding:"0",marginTop:"0vh"}}>
                                    
                                    voted
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

                                <BlueBox style={{color:"white",height:"4vh",width:"7vw",display:"flex",justifyContent:"center",alignItems:"center",padding:"0",marginTop:"0vh"}}>
                                    
                                    voted
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

                                <BlueBox style={{color:"white",height:"4vh",width:"7vw",display:"flex",justifyContent:"center",alignItems:"center",padding:"0",marginTop:"0vh"}}>
                                    
                                    voted
                                </BlueBox>

                            </div>
                            

                    </div>
                    



                </BlueBox>

                <BlueBox style={{height :"40vh",width:"22vw",top:"20vh",background:"white",left:"15vw",boxShadow: "0px 0px 0px"}}>
                    
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
                    
                    <BlueBox style={{color:"white",height:"4vh",width:"7vw",display:"flex",justifyContent:"center",alignItems:"center",padding:"0",marginTop:"1.5vh"}}>
                        <StarIcon sx={{ fontSize: 20 , color: "white"}}/>
                        Settings
                    </BlueBox>

                    <BlueBox style={{color:"white",height:"4vh",width:"10vw",display:"flex",justifyContent:"center",alignItems:"center",padding:"0",marginTop:"1.5vh",left:"12vw",background:"red"}}>
                        <StarIcon sx={{ fontSize: 20 , color: "white"}}/>
                        become Selector
                    </BlueBox>

                    

                    
                </BlueBox>

                

                </div>
            
        </div>
    )
}
