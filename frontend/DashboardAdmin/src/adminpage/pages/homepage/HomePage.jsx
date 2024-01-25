import React, { useState } from 'react'
import "./HomePage.css"
import Tests from './components/tests/Tests'

const HomePage = (props) => {
  function onClickViewOldTest(date){

  }
  return (
    <div className='HomePage'>
      <Tests ActiveTest={props.ActiveTest} ProvPass={props.ProvPass} onClickViewOldTest={(date) => {onClickViewOldTest(date)}}></Tests>
    </div>
  )

  }
export default HomePage
