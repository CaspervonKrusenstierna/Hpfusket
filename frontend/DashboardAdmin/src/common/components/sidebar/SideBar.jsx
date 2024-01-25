import React, { useEffect, useState } from 'react'
import "./SideBar.css"
import SideBarTopContainer from "./components/sidebartopcontainer/SideBarTopContainer"
import SideBarItemContainer from './components/sidebaritemcontainer/SideBarItemContainer'
import SideBarBottomContainer from "./components/sidebarbottomcontainer/SideBarBottomContainer"

const SideBar = (props) => {
  return (
    <div className='SideBar'>
      <div>
      <SideBarTopContainer></SideBarTopContainer>
      <SideBarItemContainer></SideBarItemContainer></div>
      <SideBarBottomContainer saldo={props.saldo}></SideBarBottomContainer>
    </div>
  )
}

export default SideBar