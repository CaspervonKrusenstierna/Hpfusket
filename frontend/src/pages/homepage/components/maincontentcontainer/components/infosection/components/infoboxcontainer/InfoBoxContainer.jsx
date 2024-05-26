import React from 'react'
import InfoBox from './components/infobox/InfoBox'
import "./InfoBoxContainer.css"
import { StarIcon, ShieldIcon, CheckMarkIcon } from './icons'
const InfoBoxContainer = () => {
  return (
    <div className='InfoBoxContainer'>
    <InfoBox title="Pålitlig" text="Vi har redan många nöjda kunder!"imgsrc={StarIcon}></InfoBox>
    <InfoBox title="Enkel" text="Det har aldrig varit enklare att komma in på sin drömutbildning! " imgsrc={CheckMarkIcon}></InfoBox>
    <InfoBox title="Säker" text="Våra kunders säkerhet är oerhört viktigt för oss och du behöver inte lämna ut några personuppgifter för att använda dig av vår tjänst."imgsrc={ShieldIcon}></InfoBox>
    </div>
  )
}

export default InfoBoxContainer