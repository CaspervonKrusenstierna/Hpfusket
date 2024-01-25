import React from 'react'
import "./SideBarItem.css"
import { Link } from 'react-router-dom'

const SideBarItem = (props) => {
  return (
    <button className='SideBarItem'>
      <Link to={props.href} style={{textDecoration: "none", display:"flex", flexDirection: "row", height: "65px", width: "100%", alignItems: "center"}}>
            <img className='SideBarItem-Icon' src={props.icon}></img>
            <p className='SideBarItem-Text'> {props.text} </p>
      </Link>
    </button>
  )
}

export default SideBarItem