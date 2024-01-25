import React from 'react'
import "./QuestionsSection.css"
import Question from './components/Question'
const QuestionsSection = () => {
  return (
    <div id="QuestionsSection">
      <h className="QuestionsSection-Title">Vanliga frågor</h>
      <Question question="Vilka betalningsmetoder accepterar ni?" answer="Vi accepterar för tillfället endast Bitcoin och Monero."></Question>
      <Question question="Vad händer om ni inte lyckas leverera resultatet jag betalade för?" answer="Ifall vi inte levererar det som du har betalat för så kommer du självfallet att få hela summan tillbaka."></Question>
      <Question question="Hur stor är chansen att jag blir ertappad?" answer="Den enda vägen som du kan bli ertappad är genom en metalldetektor. Då det är så många som skriver högskoleprovet så är det endast en marginell del av provskrivarna som går igenom dessa stickprover. Än så länge så har ingen av våra kunder blivit ertappade!"></Question>
      <Question question="Får jag tillbaka pengarna ifall jag blir ertappad?" answer="Vid ertappning så erbjuder vi ingen återbetalning. Detta på grund av att det inte går att avgöra ifall kunden faktiskt har blivit ertappad eller ifall detta endast är något som kunden har hittat på."></Question>
    </div>
  )
}

export default QuestionsSection