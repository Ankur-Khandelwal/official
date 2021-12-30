import './style.css';
import Drawer from '../../components/Drawer';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import BlueRoundIcon from '../../components/UI/BlueRoundIcon.jsx';
import BlueButton from '../../components/UI/BlueButton.jsx';

const PhasesAlternate = () => {
  return (
    <div className="phasesalternate">
      <Drawer/>
      <div className="phasesalternate-main">
        <div className="top-bar">
          <BlueButton text="BACK"/>
          <BlueRoundIcon><PersonRoundedIcon/></BlueRoundIcon>
        </div>
        <p className='head-text'>PHASES</p>
        <div className="phases-bar">
          <div className="phase c-phase" id="like-phase-tab"><p>LIKES/DISLIKES</p></div>
          <div className="phase c-phase"><p>GET TO KNOW</p></div>
          <div className="phase o-phase"><p>DISCOVERY</p></div>
          <div className="phase"><p>VIDEO CHATS</p></div>
          <div className="phase"><p>STRUGGLES</p></div>
          <div className="phase"><p>ENLIGHTENMENT</p></div>
          <div className="phase" id="final-phase-tab"><p>FINALS</p></div>
        </div>
        <div className='phase-card'>
          <div className='pc-col1'>
            <div className='pc-col1-header'>
              <BlueRoundIcon><p>1</p></BlueRoundIcon>
              <p><span>FINISHED</span><span>DISCOVERIES</span></p>
            </div>
            <div className='phase-top-candidate'>
              <p className='rank'>#1</p>
              <p className='topper-name'>Esther Howard</p>
            </div>
            <div className='stats'>
              <div className='stat'>
                <p className='stat-header'>ANSWERS</p>
                <p className='stat-value'>9/10</p>
              </div>
              <div className='stat'>
                <p className='stat-header'>RATING</p>
                <p className='stat-value'>9/10</p>
              </div>
              <div className='stat'>
                <p className='stat-header'>POSITION</p>
                <p className='stat-value'>9/10</p>
              </div>
            </div>
          </div>
          <div className='pc-col2'>
          
          </div>
          <div className='pc-col3'>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhasesAlternate;