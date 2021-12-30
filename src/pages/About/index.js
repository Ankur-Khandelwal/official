import Drawer from '../../components/Drawer';
import Img1 from '../../Images/AdobeStock_396315065 1.png'
import StarIcon from '@mui/icons-material/Star';
import BlueBox from '../../components/UI/BlueBox';
import GlassCard from '../../components/UI/GlassCard';
import "./index.css";
import { display } from '@mui/system';

const About = () => {

    
    let arr = [{Key:"BORN",value:"5 DEC"},
               {Key:"COUNTRY",value:"USA"},
               {Key:"AGE",value:"29 YR"},
               {Key:"STATE",value:"FLORIDA"},
               {Key:"RELATIONP",value:"SINGLE"},
               {Key:"CITY",value:"SAN DIEGO"}]
    return(

        <div className="About">
            <Drawer />
            <div className="After-Drawer">

            {/* <BlueBox style={{height :"35vh",width:"15vw",display:"flex",justifyContent:"space-between",flexWrap:"wrap",top:"40vh",left:"16vw"}}> */}

                <BlueBox style={{height :"36vh",width:"17vw",display:"flex",justifyContent:"space-between",flexWrap:"wrap",top:"40vh",left:"16vw"}}>
                {
                        arr.map((obj) =>{

                           return <div className="options">
                                        <div className="box-icon">
                                            <StarIcon sx={{ fontSize: 13 , color: "red"}}/>
                                        </div>
                                        <div className="boxhead" >
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
                                THANK YOU_____
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
            <GlassCard style={{top:"80vh" ,height:"15vh",width:"44vw",left:"25vw",display:"flex"}}>

            

                {
                    arr.map((obj)=>{

                        return <div className="options">

                            <div className="box-icon">
                                    <StarIcon sx={{ fontSize: 13 , color: "red"}}/>
                                </div>
                                <div className="boxhead" style={{color:"gray",fontWeight:"600"}}>
                                    {obj.Key}
                                </div>
                                <div className="boxcontent" style={{color:'#131742',fontWeight:"bold"}}>
                                    {obj.value}
                                </div>
            
                        </div>

                    })
                }

           

            
            </GlassCard>
            
        </div>
        
        

    )
    
}

export default About;