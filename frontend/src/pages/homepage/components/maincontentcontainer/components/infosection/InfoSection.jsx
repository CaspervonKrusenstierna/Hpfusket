import React from 'react'
import "./InfoSection.css"
import InfoBoxContainer from './components/infoboxcontainer/InfoBoxContainer';
import InfoContainer from './components/infocontainer/InfoContainer';

const InfoSection = () => {
    return (
         <div className='InfoSection'>
            <InfoContainer></InfoContainer>
            <InfoBoxContainer></InfoBoxContainer>
         </div>
         );
}

export default InfoSection