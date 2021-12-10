import "./css/logo1.css";
import logo from "../../Images/SELECTR brand guidelines (1)-5 1.png";

const Logo = (props) => {
  return (
    <div className="logo">
        <img src={logo} alt="img1" style={props.style}/>
    </div>
  );
}

export default Logo;