import React, { useState } from 'react'
import "./CheckBoxButton.css"

const CheckBoxButton = (props) => {
    const [checkboxValue, setcheckboxValue] = useState(false);

  return (
    <button className='CheckBoxButton' onClick={() => {setcheckboxValue(!checkboxValue); }}>
        <input className="CheckBoxButton-Input" type="checkbox" checked={checkboxValue}></input>
        <div className="CheckBoxButton-Text">Kom ihåg mig</div>
    </button>
  )
}

export default CheckBoxButton