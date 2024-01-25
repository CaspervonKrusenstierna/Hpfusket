import React from 'react'
import "./MainContentContainer.css"
import InfoSection from './components/infosection/InfoSection'
import QuestionsSection from './components/questionssection/QuestionSection'

const MainContentContainer = () => {
  return (
    <div className='MainContentContainer'>
      <InfoSection></InfoSection>
      <QuestionsSection></QuestionsSection>
    </div>
  )
}

export default MainContentContainer