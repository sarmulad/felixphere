import React from 'react'
import illustration from "../../assets/image4.png"
import './Step.css'
function Step() {
  return (
    <div className='step flex-container'>
        <h1 className='header'>Step 1</h1>
        <div className='container'>
            <div>
                <img src={illustration} alt=''illustration width='100%'/>
            </div>
            <div className='step-text'>
                <p>To obtain your $FELIX tokens, you must first open a digital wallet. Metamask is the wallet that we recommend using. </p>
            </div>
        </div>
    </div>
  )
}

export default Step