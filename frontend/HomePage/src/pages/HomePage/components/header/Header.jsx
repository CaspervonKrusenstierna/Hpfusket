import React, { useEffect, useState } from 'react'
import {NavBarButtonRedirect, NavBarLogoRedirect, NavBarRedirect} from "./components"
import "./Header.css"
import NavBarSupportRedirect from './components/navbarsupportredirect/NavBarSupportRedirect';

let BigHeaderContent;
let SmallHeaderContent;
let SmallHeaderThreshhold = 700;
let previousSize;

const Header = (props) => {
  const [ClassName, setClassName] = useState("Header");
  const [HeaderContent, setHeaderContent] = useState([0]);

  useEffect(() =>{
    function OnScroll(){
      if(props.disableSticky){
        return;
      }
      let header = document.getElementById("Header")
      if(window.scrollY >= 110){
        setClassName("Header Sticky")
      }
      else{
        setClassName("Header")
      }
    }
    function OnResize(){
      let HeaderContentBuffer = [];
      if(window.innerWidth >= SmallHeaderThreshhold && previousSize < SmallHeaderThreshhold){
        previousSize = window.innerWidth;
        setHeaderContent(BigHeaderContent);
      }
      else if(window.innerWidth < SmallHeaderThreshhold && previousSize >= SmallHeaderThreshhold){
        previousSize = window.innerWidth;
        setHeaderContent(SmallHeaderContent);
      }
    }
    function OnSupportClick(){
      if(!props.loggedIn){
        props.onLoginClick("/dashboard/support");
      }
      else{
        window.location.href = "/dashboard/support"
      }
    }

  document.onscroll = OnScroll;
  window.onresize = OnResize;

  if(props.loggedIn){
    BigHeaderContent = <>
    <NavBarLogoRedirect></NavBarLogoRedirect>
    <NavBarSupportRedirect onClick={OnSupportClick}></NavBarSupportRedirect>
    <NavBarRedirect redirect="Frågor" href="#QuestionsSection"></NavBarRedirect>
    <NavBarButtonRedirect text="Dashboard" onClick={() => {window.location.href = "/dashboard"}}></NavBarButtonRedirect>
    </>
    SmallHeaderContent = <>
    <NavBarLogoRedirect></NavBarLogoRedirect>
    <NavBarButtonRedirect text="Dashboard" onClick={() => {window.location.href = "/dashboard"}}></NavBarButtonRedirect>
    </>
  }
  else{
    BigHeaderContent = <>
    <NavBarLogoRedirect></NavBarLogoRedirect>
    <NavBarSupportRedirect onClick={OnSupportClick}></NavBarSupportRedirect>
    <NavBarRedirect redirect="Frågor" href="#QuestionsSection"></NavBarRedirect>
    <div className='Header-ButtonContainer'>
    <NavBarButtonRedirect onClick={() => {props.onLoginClick("/dashboard")}} text="Login"></NavBarButtonRedirect>
    <NavBarButtonRedirect onClick={props.onRegisterClick} text="Register"></NavBarButtonRedirect>
    </div>
    </>
    SmallHeaderContent = <>
    <NavBarLogoRedirect></NavBarLogoRedirect>
    <div className='Header-ButtonContainer'>
    <NavBarButtonRedirect onClick={() => {props.onLoginClick("/dashboard")}} text="Login"></NavBarButtonRedirect>
    <NavBarButtonRedirect onClick={props.onRegisterClick} text="Register"></NavBarButtonRedirect>
    </div>
    </>
  }

  previousSize = window.innerWidth
  if(window.innerWidth >= SmallHeaderThreshhold){
    console.log("helllo");
    setHeaderContent(BigHeaderContent);
  }
  else{
    setHeaderContent(SmallHeaderContent);
  }
 },[])

 return (<div className='Header-Container'><div className={ClassName}>{HeaderContent}</div></div>)
}

export default Header
