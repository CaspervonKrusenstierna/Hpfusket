import React, { useEffect, useState } from 'react'
import "./CheatPage.css"
import { RedirectButton } from '../../shared/components'
import { StartCheat } from '../../shared/scripts/Cheat'
import StartCheatButton from './components/startcheatbutton/StartCheatButton'

const CheatPage = (props) => {
  const [content, setContent] = useState(
    <div className='CheatPage'>
      <div className='CheatPage-ButtonContainer'>
        <StartCheatButton onClick={onStartCheatClick} text="Starta fusk"></StartCheatButton>
        <RedirectButton text="Starta simulation" href="/dashboard/simulation/"></RedirectButton>
      </div>
  </div>
  );

  function onStartCheatClick(){
    setContent(
      <div className='CheatPage'>
        <p className='CheatPage-Title'>Du är redo. Lycka till!</p>
      </div>
    )
    StartCheat();
  }

  return <>{content}</>
}

export default CheatPage