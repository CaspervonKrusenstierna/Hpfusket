import React, { useRef, useState } from 'react'
import "./RegisterBox.css"
import {Input, SubmitButton, ErrorMessage, ExitButton} from "../../../common/components"
import {UserImg, UnlockImg, EnvelopeImg} from "../../../common/assets"


const RegisterBox = (props) => {
  const [error, setError] = useState();
  const registerInfo = useRef({Username: "", Email: "", Password: "", ConfirmPassword: ""});

  async function onSubmit(){
    if(registerInfo.current.Password != registerInfo.current.ConfirmPassword){
      setError("Dina lösenord matchar inte.")
      return;
    }

    const response = await fetch("http://127.0.0.1:3000/register", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({"name": registerInfo.current.Username, "email": registerInfo.current.Email, "password": registerInfo.current.Password})
    }).then((res) => res.json());

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
          <Input hide={true} onChange={(e) => {Password = e.target.value}} label="Lösenord" img={UnlockImg}></Input>
          <Input hide={true} onChange={(e) => {ConfirmPassword = e.target.value}} label="Bekräfta lösenord" img={UnlockImg}></Input>
          <SubmitButton onClick={onSubmit} text="Registrera"></SubmitButton>
        </div>
    </div>
  )
}

export default RegisterBox