import {BrowserRouter, Router, Route, Routes} from "react-router-dom"
import SideBar from './common/sidebar/SideBar';
import PaymentPage from "./pages/paymentpage/PaymentPage";
import BackgroundStyleBox from "./common/BackgroundStyleBox/BackgroundStyleBox"

function App(props) {
  return (
    <>
    <BrowserRouter>
      <SideBar name={props.name} privilege={props.privilege}  saldo={props.saldo}></SideBar>
        <Routes>
        <Route path="/dashboard" element={<><PaymentPage privilege={props.privilege}></PaymentPage><BackgroundStyleBox></BackgroundStyleBox></>}></Route>
          <Route path="/dashboard/payment" element={<><PaymentPage privilege={props.privilege}></PaymentPage><BackgroundStyleBox></BackgroundStyleBox></>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
