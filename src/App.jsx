import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./Pages/Start";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import AddTraining from "./Pages/AddTraining";
import Heading from "./components/heading/Heading";
import Nav from "./components/navigation/Nav";
import Activity from "./Pages/Activity";
import Points from "./components/Knowledge/Points";
import Takedowns from "./components/Knowledge/Takedowns";
import Submissions from "./components/Knowledge/Submissions";
import Positions from "./components/Knowledge/Positions";
import Videos from "./components/Knowledge/Videos";
import Joints from "./components/Knowledge/Joints";
import Settings from "./components/Account/Account";
import Knowledge from "./Pages/Knowledge";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Heading />
        <div className="mainContainer">
          <Routes>
            <Route path="/Start" element={<Start />} />
            <Route path="/" element={<Start />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Activity" element={<Activity />} />
            <Route path="/Training" element={<AddTraining />} />
            <Route path="/Knowledge" element={<Knowledge />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Points" element={<Points />} />
            <Route path="/Takedowns" element={<Takedowns />} />
            <Route path="/Submissions" element={<Submissions />} />
            <Route path="/Videos" element={<Videos />} />
            <Route path="/Joints" element={<Joints />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Positions" element={<Positions />} />
          </Routes>
        </div>
        <Nav />
      </div>
    </BrowserRouter>
  );
}

export default App;
