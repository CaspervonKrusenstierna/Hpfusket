import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import MainContentContainer from './components/maincontentcontainer/MainContentContainer'
import Footer from './components/footer/Footer'
import LoginBox from './components/loginbox/LoginBox'
import RegisterBox from './components/registerbox/RegisterBox'
import ForgotPasswordBox from './components/forgotpasswordbox/ForgotPasswordBox'

import "./HomePage.css"

const HomePage = (props) => {
  const [toRender, setToRender] = useState(<></>)

  useEffect(() => {
    let headerComponent = <Header loggedIn={props.isLoggedIn} onLoginClick={LoginClick} onRegisterClick={RegisterClick} disableSticky={false}/>
    let darknessEffect = <div className='DarknessEffect'/>

    function OnExit(){
      setToRender(<>{headerComponent}<MainContentContainer/><Footer/></>);
    }

    function ForgotPasswordClick(){
      OnExit();
      setToRender(<div className='HomePage-unfocus'>{darknessEffect}{headerComponent}<MainContentContainer/><Footer/><ForgotPasswordBox onExitClick={OnExit}/></div>)
    }

    function LoginClick(redirect){
      window.scrollTo(0,0);
      setToRender(<div className='HomePage-unfocus'>{darknessEffect}{headerComponent}<MainContentContainer/><Footer/><LoginBox redirect={redirect} onExitClick={OnExit} onForgotPassword={ForgotPasswordClick}/></div>)
    }

    function RegisterClick(){
      window.scrollTo(0,0);
      setToRender(<div className='HomePage-unfocus'>{darknessEffect}{headerComponent}<MainContentContainer/><Footer/><RegisterBox onExitClick={OnExit}/></div>)
    }
    
    setToRender(<>{headerComponent}<MainContentContainer/><Footer/></>)
  }, [])


  return toRender
}


export default HomePage