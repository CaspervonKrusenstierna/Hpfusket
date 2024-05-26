import React, { useRef, useState } from 'react'
import "./LoginBox.css"
import {Input, CheckBoxButton, AnchorButton, LogRegButton} from "../index"
import {ErrorMessage, ExitButton} from '../../../../shared/components'
import { UserImg, UnlockImg } from '../../../../shared/assets'
import Login from './Login'

const LoginBox = (props) => {
    const [error, setError] = useState();
    const loginInfo = useRef({Username: "", Password: "", RememberMe: ""})

    async function onSubmit(){
      let currLoginInfo = loginInfo.current;
      let response = await Login(currLoginInfo.Username, currLoginInfo.Password, currLoginInfo.RememberMe);
      
      if(response.success){
        window.location.href = props.redirect;
      }
      setError(response.message);
    }

    return (
      <div className='LoginBox'>
          <div className='ExitButtonContainer'>
              <ExitButton onClick={props.onExitClick}></ExitButton>
          </div>
          <div className='inputcontainer-login'>
            {error ? <ErrorMessage message={error}></ErrorMessage> : <></>}
            <Input onChange={(e) => {loginInfo.current.Username = e.target.value}} label="Användarnamn" img={UserImg}></Input>
            <Input hide={true} onChange={(e) => {loginInfo.current.Password = e.target.value}} label="Lösenord" img={UnlockImg}></Input>
            <div className='LoginBox-BottomContainer'>
                <CheckBoxButton text="Kom ihåg mig" onChange={() => {loginInfo.current.RememberMe = !loginInfo.current.RememberMe}}></CheckBoxButton>
                <AnchorButton text="Glömt ditt lösenord?" onClick={props.onForgotPassword}></AnchorButton>
            </div>
            <LogRegButton onClick={onSubmit} text="Logga in"></LogRegButton>
          </div>
      </div>
    )
}

export default LoginBox