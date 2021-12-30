import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Registration1 from "./pages/Registration/Registration1";
import Registration2 from "./pages/Registration/Registration2";
import Registration3 from "./pages/Registration/Registration3";
import Dashboard1 from "./pages/Dashboard";
import ProspectForm1 from "./pages/ProspectForm/ProspectForm1";
import ProspectForm2 from "./pages/ProspectForm/ProspectForm2";
import OwnProfile from "./pages/OwnProfile";
import BigBoard from "./pages/BigBoard";
import PhasesAlternate from "./pages/PhasesAlternate";
import About from "./pages/About"
import PoolSelector from "./pages/PoolSelector";
import Profile from "./pages/Profileown";
import Profile1 from "./pages/Profileown1";
import Session from "./pages/SESSIONS";
import ParticipantProfile from "./pages/ParticipantProfile";
import SinglePhase from "./pages/SinglePhase";
import GameEnded from "./pages/GameEnded";

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      body1: {
        fontFamily: null,
        fontWeight: null,
        letterSpacing: null,
        fontSize: null,
        lineHeight: null,
      },
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
       <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/registration1" element={<Registration1 />} />
              <Route exact path="/registration2" element={<Registration2 />} />
              <Route exact path="/registration3" element={<Registration3 />} />
              <Route exact path="/dashboard" element={<Dashboard1 />} />
              <Route exact path="/prospectform1" element={<ProspectForm1 />} />
              <Route exact path="/prospectform2" element={<ProspectForm2 />} />
              <Route exact path="/ownprofile" element={<OwnProfile />} />
              <Route exact path="/bigboard" element={<BigBoard />} />
              <Route exact path="/phasesalternate" element={<PhasesAlternate />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/poolselector" element={<PoolSelector />} />
              <Route exact path="/profileown" element={<Profile />} />
              <Route exact path="/profileown1" element={<Profile1 />} />
              <Route exact path="/session" element={<Session />} />
              <Route exact path="/participantprofile" element={<ParticipantProfile />} />
              <Route exact path="/gameend" element={<GameEnded />} />
              <Route exact path="/singlephase" element={<SinglePhase />} />
            </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
