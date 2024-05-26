import React, { useState } from 'react'
import "./AdminPage.css"
import Tests from './components/tests/Tests'

const AdminPage = (props) => {
  function onClickViewOldTest(date){

  }
  return (
    <div className='AdminPage'>
      <Tests ActiveTest={props.ActiveTest} ProvPass={props.ProvPass} onClickViewOldTest={(date) => {onClickViewOldTest(date)}}></Tests>
    </div>
  )

  }
export default AdminPage
