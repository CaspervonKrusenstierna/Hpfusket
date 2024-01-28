import React from 'react'
import "./AccordionSection.css"
import Accordion from './components/accordion/Accordion'
const AccordionsSection = () => {
  return (
    <div id="AccordionSection">
      <h className="AccordionSection-Title">Vanliga frågor</h>
      <Accordion question="Vilka betalningsmetoder accepterar ni?" answer="Vi accepterar för tillfället endast Bitcoin och Monero."></Accordion>
      <Accordion question="Vad händer om ni inte lyckas leverera resultatet jag betalade för?" answer="Om vi inte skulle leverera det som du betalade för så får du självfallet hela beloppet tillbaka."></Accordion>
      <Accordion question="Hur stor är chansen att jag blir ertappad?" answer="Den enda vägen som du kan bli ertappad är genom en metalldetektor. Då det är så många som skriver högskoleprovet så är det endast en marginell del av provskrivarna som går igenom dessa stickprover. Än så länge så har ingen av våra kunder blivit ertappade!"></Accordion>
      <Accordion question="Får jag tillbaka pengarna om jag blir ertappad?" answer="Vid ertappning så erbjuder vi ingen återbetalning då det inte går att avgöra ifall kunden faktiskt har blivit ertappad eller inte utan att kundens säkerhet sätts på spel."></Accordion>
    </div>
  )
}

export default AccordionsSection