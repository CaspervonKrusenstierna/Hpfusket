import SideBar from '../../common/sidebar/SideBar';
import HomePage from './adminpage/pages/homepage/HomePage';
import {BrowserRouter, Router, Route, Routes} from "react-router-dom"
function App(props) {
  return (
    <>
      <BrowserRouter>
          <SideBar name={props.name} saldo={props.saldo}></SideBar>
          <Routes>
            <Route path="/dashboard/admin/" element={<HomePage ActiveTest={props.ActiveTest} ProvPass={props.ProvPass}></HomePage>}></Route>
            <Route path="/dashboard/admin/activetest" element={<></>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
