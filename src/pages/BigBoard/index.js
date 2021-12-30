import './style.css';
import Drawer from '../../components/Drawer';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import BlueButton from '../../components/UI/BlueButton.jsx';
import GreenButton from '../../components/UI/GreenButton';
import RedRoundIcon from '../../components/UI/RedRoundIcon.jsx';
import BlueRoundIcon from '../../components/UI/BlueRoundIcon.jsx';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import ImageWithName from './components/ImageWithName';
import cardImage from '../../Images/cardimg.jpg';

const BigBoard = () => {
  return (
    <div className="big-board">
      <Drawer/>
      <div className="main-board">
        <div className="top-bar">
          <BlueButton text="SUBSCRIBE TO NOTIFICATIONS"/>
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
        <br/>
       <div className='bigboard-data'>
        <div className='bbd-row1'>
          <div className='current-phase'>
            <div className='current-phase-header'>
              <p className="head-text" id="c-phase-h1">CURRENT PHASE</p>
              <p id="c-phase-h2">VIEW GAME PHASES &nbsp;<EastRoundedIcon/></p>
            </div>
            <div className='current-phase-card'>
              <div className='current-phase-data'>
                <div className='cpd-head'>
                  <div className='cpd-head-l'>3</div>
                    &nbsp;&nbsp;
                  <div className='cpd-head-r'>
                    <p>CURRENT</p>
                    <p>DISCOVERY</p>
                  </div>
                </div>
                <p id="cpd-points-header">Record a video covering the below prospects and upload it</p>
                <div className='cpd-points'><CheckRoundedIcon/>&nbsp;&nbsp;<span>Lorem Ipsum dolor emit</span></div>
                <div className='cpd-points'><CheckRoundedIcon/>&nbsp;&nbsp;<span>Lorem Ipsum dolor emit</span></div>
                <div className='cpd-points'><CheckRoundedIcon/>&nbsp;&nbsp;<span>Lorem Ipsum dolor emit</span></div>
                <div className='cpd-points'><CheckRoundedIcon/>&nbsp;&nbsp;<span>Lorem Ipsum dolor emit</span></div>
              </div>
              <iframe className="big-board-iframe" src="https://www.youtube.com/embed/UiLQoCioeTs?controls=0?modestbranding=1" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className='highlights'>
            <div className='highlights-header'>
              <p className="head-text" id="higlights-head-h1">HIGHLIGHTS</p>
              <p id="higlights-head-h2">VIEW ALL &nbsp;<EastRoundedIcon/></p>
            </div>
            <div className='highlights-cards'>
              <div className='h-card'>
               <img src={cardImage} alt=""/>
                <div className='h-card-text'>
                  <p className='hct-t1'>POLL</p>
                  <p className='hct-t2'>Lorem Ipsum dolor emit</p>
                  <p className='hct-t3'>Lorem Ipsum dolor emit</p>
                </div>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className='h-card'>
               <img src={cardImage} alt=""/>
                <div className='h-card-text'>
                  <p className='hct-t1'>POLL</p>
                  <p className='hct-t2'>Lorem Ipsum dolor emit</p>
                  <p className='hct-t3'>Lorem Ipsum dolor emit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bbd-row2'>
          
        </div>
       </div>
       <br/>
        <div className='prospect-pool'>
          <div className="prospect-pool-header">
            <p>PROSPECT POOL</p>
          </div>
          <div className='prospects'>
            <ImageWithName
              image="https://i.ibb.co/GvTZw6V/Adobe-Stock-214746128-3.png"
              name="John Doe"
              rating={4}
            />
            <ImageWithName
              image="https://i.ibb.co/GvTZw6V/Adobe-Stock-214746128-3.png"
              name="John Doe"
              rating={4}
            />
            <ImageWithName
              image="https://i.ibb.co/GvTZw6V/Adobe-Stock-214746128-3.png"
              name="John Doe"
              rating={4}
            />
            <ImageWithName
              image="https://i.ibb.co/GvTZw6V/Adobe-Stock-214746128-3.png"
              name="John Doe"
              rating={4}
            />
            <ImageWithName
              image="https://i.ibb.co/GvTZw6V/Adobe-Stock-214746128-3.png"
              name="John Doe"
              rating={4}
            />
            <ImageWithName
              image="https://i.ibb.co/GvTZw6V/Adobe-Stock-214746128-3.png"
              name="John Doe"
              rating={4}
            />
            <ImageWithName
              image="https://i.ibb.co/GvTZw6V/Adobe-Stock-214746128-3.png"
              name="John Doe"
              rating={4}
            />
            <ImageWithName
              image="https://i.ibb.co/GvTZw6V/Adobe-Stock-214746128-3.png"
              name="John Doe"
              rating={4}
            />
            <ImageWithName
              image="https://i.ibb.co/GvTZw6V/Adobe-Stock-214746128-3.png"
              name="John Doe"
              rating={4}
            />
            <ImageWithName
              image="https://i.ibb.co/GvTZw6V/Adobe-Stock-214746128-3.png"
              name="John Doe"
              rating={4}
            />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default BigBoard;