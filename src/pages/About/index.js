import Drawer from '../../components/Drawer';
import Img1 from '../../Images/AdobeStock_396315065 1.png'
import StarIcon from '@mui/icons-material/Star';
import BlueBox from '../../components/UI/BlueBox';
import GlassCard from '../../components/UI/GlassCard';
import "./index.css";
import { display } from '@mui/system';

const About = () => {

    let arr = [{Key:"BORN",value:"5 DEC 1990"},{Key:"BORN",value:"5 DEC 1990"},{Key:"BORN",value:"5 DEC 1990"},{Key:"BORN",value:"5 DEC 1990"},{Key:"BORN",value:"5 DEC 1990"},{Key:"BORN",value:"5 DEC 1990"}]
    return(

        <div className="About">
            <Drawer />
            <div className="After-Drawer">

                <BlueBox style={{height :"30vh",width:"15vw",display:"flex",justifyContent:"space-between",flexWrap:"wrap",top:"40vh"}}>
                {
                        arr.map((obj) =>{

                           return <div className="options">
                                <div className="box-icon">
                                    <StarIcon sx={{ fontSize: 13 , color: "red"}}/>
                                </div>
                                <div className="boxhead" style={{color:"white"}}>
                                    {obj.Key}
                                </div>
                                <div className="boxcontent" style={{color:"white"}}>
                                    {obj.value}
                                </div>
                            </div>

                        })
                    }
                    
                </BlueBox>

                
                <div className="img3">
                        <img className="img1" src={Img1} alt="img1"></img>
                </div>
                <div className="content1">
                        
                        <div className="content1-head1">
                                THANK YOU___
                        </div>

                        <div className="content1-head2">
                               My Name is Sagnik Purkait and I am a coder
                        </div>

                        <div className="content1-head3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Architecto esse blanditiis impedit rerum facere doloribus
                          veniam ducimus cumque pariatur, porro vitae voluptate sed 
  
                        </div>

                        <div className="content1-head3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Architecto esse blanditiis impedit rerum facere doloribus
                         
                        </div>
                        
                        <div className="red-button">
                           
                            <p>
                                VIEW GAMES
                            </p>
                            
                        </div>
                        

                </div>
            </div> 

            {/* <div style={{backgroundColor:"red"}}>
                
            </div> */}
            <GlassCard style={{top:"75vh" ,height:"15vh",width:"44vw",left:"20vw",display:"flex"}}>

            <div className="options">

                <div className="box-icon">
                        <StarIcon sx={{ fontSize: 13 , color: "red"}}/>
                    </div>
                    <div className="boxhead" style={{color:"black",fontWeight:"600"}}>
                        BORN
                    </div>
                    <div className="boxcontent" style={{color:"darkBlue" ,fontWeight:"bold"}}>
                        5 DEC 
                    </div>

            </div>

            <div className="options">

                <div className="box-icon">
                        <StarIcon sx={{ fontSize: 13 , color: "red"}}/>
                    </div>
                    <div className="boxhead" style={{color:"black",fontWeight:"600"}}>
                        BORN
                    </div>
                    <div className="boxcontent" style={{color:"darkBlue" ,fontWeight:"bold"}}>
                        5 DEC 
                    </div>

            </div>

            <div className="options">

                <div className="box-icon">
                        <StarIcon sx={{ fontSize: 13 , color: "red"}}/>
                    </div>
                    <div className="boxhead" style={{color:"black",fontWeight:"600"}}>
                        BORN
                    </div>
                    <div className="boxcontent" style={{color:"darkBlue" ,fontWeight:"bold"}}>
                        5 DEC 
                    </div>

            </div>

            <div className="options">

                <div className="box-icon">
                        <StarIcon sx={{ fontSize: 13 , color: "red"}}/>
                    </div>
                    <div className="boxhead" style={{color:"black",fontWeight:"600"}}>
                        BORN
                    </div>
                    <div className="boxcontent" style={{color:"darkBlue" ,fontWeight:"bold"}}>
                        5 DEC 
                    </div>

            </div>

            <div className="options">

                <div className="box-icon">
                        <StarIcon sx={{ fontSize: 13 , color: "red"}}/>
                    </div>
                    <div className="boxhead" style={{color:"black",fontWeight:"600"}}>
                        BORN
                    </div>
                    <div className="boxcontent" style={{color:"darkBlue" ,fontWeight:"bold"}}>
                        5 DEC 
                    </div>

            </div>

            <div className="options">

                <div className="box-icon">
                        <StarIcon sx={{ fontSize: 13 , color: "red"}}/>
                    </div>
                    <div className="boxhead" style={{color:"black",fontWeight:"600"}}>
                        BORN
                    </div>
                    <div className="boxcontent" style={{color:"darkBlue" ,fontWeight:"bold"}}>
                        5 DEC 
                    </div>

            </div>

            
            </GlassCard>
            
        </div>
        
        

    )
    
}

export default About;