import React from 'react'
import "./LogoutButton.css"

const LogoutButton = () => {
  async function LogOut(){
    const response = await fetch("http://127.0.0.1:3000/logout", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    }).then(() => {document.cookie = 'token=; Max-Age=0; path=/; domain=' + window.location.hostname; window.location.href = "http://127.0.0.1:3000/"})};

  return (
    <button className='LogoutButton' onClick={LogOut}>
        <p className='LogoutButton-text'>Logga ut</p>
    </button>
  )
}

export default LogoutButton