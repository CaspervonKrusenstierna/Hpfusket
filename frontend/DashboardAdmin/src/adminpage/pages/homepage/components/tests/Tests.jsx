import React from 'react'
import "./Tests.css"
import { useEffect, useState } from 'react'
import ActiveTest from './components/activetest/ActiveTest';
import SubmitButton from '../../../../../common/components/submitbutton/SubmitButton';

const Tests = (props) => {
  const [toRender, setToRender] = useState(<></>);

  async function CreateTest(){
      const response = await fetch("http://192.168.0.132:3000/dashboard/test", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
      }).then((res) => res.json());
  }
  
  useEffect(() => {
    if(props.ActiveTest){
      setToRender(<><ActiveTest date={props.ActiveTest.date} provpass={props.ProvPass}></ActiveTest></>)
    }
    else{ setToRender(<><div style={{height: "150px", display: "flex", justifyContent: "center", alignItems: "center"}}><SubmitButton text="Skapa Test" onClick={CreateTest}></SubmitButton></div></>)}
  }, []);
  
  return (
    <div className='Tests'>
      {toRender}
    </div>
  )
}

export default Tests