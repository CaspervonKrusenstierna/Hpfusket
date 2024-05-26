import React, { useRef, useState } from 'react'
import "./LoginBox.css"
import {Input, SubmitButton, ErrorMessage, CheckBoxButton, AnchorButton, ExitButton} from "../../../common/components"
import {UserImg, UnlockImg} from  "../../../common/assets"
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
            <Input onChange={(e) => {Username = e.target.value}} label="Användarnamn" img={UserImg}></Input>
            <Input hide={true} onChange={(e) => {Password = e.target.value}} label="Lösenord" img={UnlockImg}></Input>
            <div className='LoginBox-BottomContainer'>
                <CheckBoxButton></CheckBoxButton>
                <AnchorButton text="Glömt ditt lösenord?" onClick={props.onForgotPassword}></AnchorButton>
            </div>
            <SubmitButton onClick={onSubmit} text="Logga in"></SubmitButton>
          </div>
      </div>
    )
}

export default LoginBox