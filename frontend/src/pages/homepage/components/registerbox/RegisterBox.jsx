import React, { useRef, useState } from 'react'
import "./RegisterBox.css"
import { ErrorMessage, ExitButton } from '../../../../shared/components'
import {Input, LogRegButton} from "../index"
import { UserImg, UnlockImg, EnvelopeImg } from '../../../../shared/assets'
import Register from './Register'


const RegisterBox = (props) => {
  const [error, setError] = useState();
  const registerInfo = useRef({Username: "", Email: "", Password: "", ConfirmPassword: ""});

  async function onSubmit(){
    let currRegisterInfo = registerInfo.current;
    if(currRegisterInfo.Password != currRegisterInfo.ConfirmPassword){
      setError("Dina lösenord matchar inte.")
      return;
    }

    let response = await Register(currRegisterInfo.Username, currRegisterInfo.Email, currRegisterInfo.Password);
    
    if(response.success){
      props.onExitClick();
      return;
    }
    setError(response.message);
  }

  return (
    <div className='RegisterBox'>
        <div className='ExitButtonContainer'>
            <ExitButton onClick={props.onExitClick}></ExitButton>
        </div>
        <div className='inputcontainer-register'>
          {error ? <ErrorMessage message={error}></ErrorMessage> : <></>}
          <Input onChange={(e) => {registerInfo.current.Username = e.target.value}} label="Användarnamn" img={UserImg}></Input>
          <Input onChange={(e) => {registerInfo.current.Email = e.target.value}} label="Email" img={EnvelopeImg}></Input>
          <Input hide={true} onChange={(e) => {registerInfo.current.Password = e.target.value}} label="Lösenord" img={UnlockImg}></Input>
          <Input hide={true} onChange={(e) => {registerInfo.current.ConfirmPassword = e.target.value}} label="Bekräfta lösenord" img={UnlockImg}></Input>
          <LogRegButton onClick={onSubmit} text="Registrera"></LogRegButton>
        </div>
    </div>
  )
}

export default RegisterBox