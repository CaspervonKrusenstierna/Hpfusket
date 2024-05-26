import React, { useEffect, useState } from 'react'
import "./CheatPage.css"
import { RedirectButton } from '../../shared/components'
import { StartCheat } from '../../shared/scripts/Cheat'
import Button from './components/Button/Button'

const CheatPage = (props) => {
  const [content, setContent] = useState(<></>);
  function onStartCheatClick(){
    setContent(
      <div className='CheatPage'>
        <p className='CheatPage-Title'>Du är redo. Lycka till!</p>
      </div>
    )
    StartCheat();
  }
  useEffect(() => {
    setContent(
      <div className='CheatPage'>
        <div className='CheatPage-ButtonContainer'>
          <Button onClick={onStartCheatClick} text="Starta fusk"></Button>
          <RedirectButton text="Starta simulation" href="/dashboard/simulation/"></RedirectButton>
        </div>
      </div>
    )
  }, [])
  return <>{content}</>
}

export default CheatPage