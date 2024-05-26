import React from 'react'
import "../sidebaritem/SideBarItem.css" // use same styles

const SideBarItemAnchor = (props) => {
    function onAnchorClick(){
        window.location.href = props.href
    }
    return (
        <button onClick={onAnchorClick} className='SideBarItem'>
            <img className='SideBarItem-Icon' src={props.icon}></img>
            <p className='SideBarItem-Text'> {props.text} </p>
        </button>
      )
}

export default SideBarItemAnchor