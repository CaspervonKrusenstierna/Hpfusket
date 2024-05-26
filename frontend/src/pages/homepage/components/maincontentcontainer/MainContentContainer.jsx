import React from 'react'
import "./MainContentContainer.css"
import InfoSection from './components/infosection/InfoSection'
import AccordionsSection from './components/accordionsection/AccordionSection'

const MainContentContainer = () => {
  return (
    <div className='MainContentContainer'>
      <InfoSection></InfoSection>
      <AccordionsSection></AccordionsSection>
    </div>
  )
}

export default MainContentContainer