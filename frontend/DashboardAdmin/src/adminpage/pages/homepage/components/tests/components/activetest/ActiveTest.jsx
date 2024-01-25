import React, { useState } from 'react'
import SubmitButton from "../../../../../../../common/components/submitbutton/SubmitButton"
import "./ActiveTest.css"
import ViewButton from '../../../../../../../common/components/viewbutton/ViewButton'
import ViewButtonLink from '../../../../../../../common/components/viewbuttonlink/ViewButtonLink'
import { StartCommsWait } from './scripts/Communication'

const ActiveTest = (props) => {
  const [toRender, setToRender] = useState(
    <>
      <div className='ActiveTest-TopContainer'>
        <div className='ActiveTest-TopContainer-Top'>
          <p style={{fontSize: "28px", fontWeight: "700"}}>{props.date}</p>
          <ViewButtonLink></ViewButtonLink>
        </div>
        <div className='ActiveTest-TopContainer-Bottom'>
        <p style={{fontSize: "32px", fontWeight: "700"}}>{"Provpass " + props.provpass}</p>
        </div>
      </div>
      <div className='ActiveTest-BottomContainer'>
        <SubmitButton text="Anslut 0-20" onClick={onConnect_0_20}></SubmitButton>
        <SubmitButton text="Anslut 20-40" onClick={onConnect_20_40}></SubmitButton>
      </div>
    </>
  );

  function RenderConnectWindow(){
    setToRender(
      <div style={{display: "flex", alignItems:"center", justifyContent:"center"}}>
      <h style={{fontSize: "40px", fontWeight: "700"}}>Du är ansluten.<br/> Tid: {TestNumToTimeString(props.provpass).Hour}:{TestNumToTimeString(props.provpass).Min} 
      </h>
    </div>
    );
  }
  function TestNumToTime(TestNum){
    let Time = new Object();
    switch(TestNum){
      case 1: Time.Hour = 9; Time.Min = 40; break;
      case 2: Time.Hour = 11; Time.Min = 10; break;
      case 3: Time.Hour = 12; Time.Min = 30; break;
      case 4: Time.Hour = 14; Time.Min = 40; break;
      case 5: Time.Hour = 16; Time.Min = 0; break;
    }
    return Time;
  }
  function TestNumToTimeString(TestNum){
    let Time = new Object();
    switch(TestNum){
      case 1: Time.Hour = "09"; Time.Min = "40"; break;
      case 2: Time.Hour = "11"; Time.Min = "10"; break;
      case 3: Time.Hour = "12"; Time.Min = "30"; break;
      case 4: Time.Hour = "14"; Time.Min = "40"; break;
      case 5: Time.Hour = "16"; Time.Min = "00"; break;
    }
    return Time;
  }
  function onConnect_0_20(){
    RenderConnectWindow();
    StartCommsWait(TestNumToTime(props.provpass), 0);
  }
  function onConnect_20_40(){
    RenderConnectWindow();
    StartCommsWait(TestNumToTime(props.provpass), 1);
  }
  return (
    <div className='ActiveTest'>
      {toRender}
    </div>
  )
}

export default ActiveTest