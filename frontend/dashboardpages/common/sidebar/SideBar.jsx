import React, { useEffect, useState } from 'react'
import "./SideBar.css"
import LogoutButton from './components/sidebarbottomcontainer/components/logoutbutton/LogoutButton';
import SideBarItemContainer from './components/sidebaritemcontainer/SideBarItemContainer';
import SideBarTopContainer from './components/sidebartopcontainer/SideBarTopContainer';
import SideBarBottomContainer from './components/sidebarbottomcontainer/SideBarBottomContainer';

const SideBar = (props) => {

  return (
    <div className='SideBar'>
        <div>
        <SideBarTopContainer></SideBarTopContainer>
        <SideBarItemContainer privilege={props.privilege}></SideBarItemContainer></div>
        <SideBarBottomContainer></SideBarBottomContainer>
    </div>
  )
}

export default SideBar