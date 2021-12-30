import Logo from '../UI/Logo';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import './style.css';

const Drawer = () => {
  return (
    <div className="drawer">
       <Logo/>
       <iframe src="https://www.youtube.com/embed/9DGb8thJppw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen modestbranding="1"></iframe>
       <div className="drawer-options">
         <p><VideoCameraFrontOutlinedIcon /><span>HOW IT WORKS</span></p>
         <p><InsertChartOutlinedRoundedIcon /><span>POOL</span></p>
         <p><DashboardOutlinedIcon /><span>BIG BOARD</span></p>
         <p><PeopleAltOutlinedIcon /> <span>SOCIAL</span></p>
         <p><MessageOutlinedIcon /><span>COMMUNICATE</span></p>
         <p><CloudUploadOutlinedIcon  /><span>UPLOADS</span></p>
         <p><CallOutlinedIcon /><span>CONTACT</span></p>
         <p><GavelOutlinedIcon/><span>LEGAL</span></p>
       </div>
    </div>
  );
}

export default Drawer;