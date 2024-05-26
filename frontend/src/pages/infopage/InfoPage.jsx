import React, { useState } from 'react'
import "./InfoPage.css"

const InfoPage = (props) => {
  return (
    <div className='InfoPage'>
        <div className='InstructionsContainer'>
            <h className="InstructionsContainer-Title">
                Kul att ha dig ombord!<br/> <br/> Hur det funkar:
            </h>
            <p className="InstructionsContainer-Text">Det enda du behöver göra är att köpa "PingaOculto Spy Headphones" och sedan sätta på dig dem och gå in på "Fusk" fliken då det är dags för provet. Se till att du ställer in din telefon till att ej stänga av sig själv.
            </p>
        </div>
    </div>
  )
}

export default InfoPage