import Drawer from '../../../components/Drawer';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import BlueButton from '../../../components/UI/BlueButton.jsx';
import GreenButton from '../../../components/UI/GreenButton';
import BlueRoundIcon from '../../../components/UI/BlueRoundIcon.jsx';
import bronzeGirl from '../../../Images/bronzeGirl.png';
import coolBoy from '../../../Images/AdobeStock_214746128 3.png';
// import bgEllipseBig from '../../../Images/bg-ellipse-big.png';
import './style.css';

const ProspectFormLayout = (props) => {
  const {children} = props;
  const renderImage = () => {
    if (props.photo=="boy") {
      return <img className="cool-boy" src={coolBoy} alt="coolBoy" />;
    } else {
      return <img className="bronze-girl" src={bronzeGirl} alt="bronzeGirl" />;
    }
  }
  return (
    <div style={{display: "flex", flexDirection: "row"}}>
    <Drawer/>
    <div className="prospectform">
      {renderImage()}
      {/* <img className="bg-ellipse-big" src={bgEllipseBig} alt="bg-ellipse-big"/> */}
      <div className="main-form-side">
        <div className="top-bar">
          <BlueButton text="BACK"/>
          <BlueRoundIcon><PersonRoundedIcon/></BlueRoundIcon>
        </div>
        <h3>Prospect Application</h3>
        <div className="main-form">
            {children}
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProspectFormLayout;