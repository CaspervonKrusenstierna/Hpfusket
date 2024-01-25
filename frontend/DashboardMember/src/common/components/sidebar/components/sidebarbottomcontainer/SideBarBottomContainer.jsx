import React from 'react'
import "./SideBarBottomContainer.css"
import LogoutButton from './components/logoutbutton/LogoutButton'
const SideBarBottomContainer = (props) => {
  return (
    <div className='SideBarBottomContainer'>
        <LogoutButton></LogoutButton>
  </div>
  )
}

export default SideBarBottomContainer