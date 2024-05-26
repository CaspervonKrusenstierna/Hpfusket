import {BrowserRouter, Router, Route, Routes} from "react-router-dom"
import { BackgroundStyleBox, SideBar } from "./shared/components";
import { HomePage, AdminPage, PaymentPage, CheatPage, InfoPage, SimulationPage } from "./pages";

function App(props) {
  let sideBarContent = <SideBar name={props.name} privilege={props.privilege} saldo={props.saldo}/>
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/dashboard" element={<>{sideBarContent}<PaymentPage privilege={props.privilege} /><BackgroundStyleBox/></>}></Route>
            <Route path="/dashboard/cheat" element={<>{sideBarContent}<CheatPage/></>}></Route>
            <Route path="/dashboard/info" element={<>{sideBarContent}<InfoPage/></>}></Route>
            <Route path="/dashboard/admin" element={<>{sideBarContent}<AdminPage/></>}></Route>
            <Route path="/dashboard/simulation" element={<>{sideBarContent}<SimulationPage/></>}></Route>
            <Route path="/" element={<><BackgroundStyleBox></BackgroundStyleBox><HomePage isLoggedIn={props.isLoggedIn}></HomePage></>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
