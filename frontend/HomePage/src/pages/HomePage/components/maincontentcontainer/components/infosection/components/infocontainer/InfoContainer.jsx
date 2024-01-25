import React from 'react'
import "./InfoContainer.css"
import DoctorImage from './doctorimage.png'

const InfoContainer = () => {
  return (
    <div className='InfoContainer'>
      <div className='InfoContainer-TextContainer'>
        <p className='InfoContainer-headertext'>Vill du <br/> komma in <br/><span style={{color: "#FA5B35"}}>på din drömutbildning?</span></p>
        <p className='InfoContainer-text'>Isåfall har du hittat helt rätt😉</p>
      </div>
        <img alt="" className="info-img" src={DoctorImage}></img>
    </div>
  )
}

export default InfoContainer