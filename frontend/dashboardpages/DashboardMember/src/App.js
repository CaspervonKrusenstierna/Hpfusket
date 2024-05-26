import SideBar from '../../common/sidebar/SideBar';
import InfoPage from './infopage/InfoPage';
import {BrowserRouter, Router, Route, Routes} from "react-router-dom"
import SimulationPage from './simulationpage/SimulationPage';
import CheatPage from "./cheatpage/CheatPage";

function App(props) {
  return (
    <>
      <BrowserRouter>
          <SideBar privilege={props.privilege}></SideBar>
          <Routes>
            <Route path="/dashboard/info" element={<InfoPage></InfoPage>}></Route>
            <Route path="/dashboard/cheat" element={<CheatPage settings={props.settings}></CheatPage>}></Route>
            <Route path="/dashboard/simulation" element={<SimulationPage></SimulationPage>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
