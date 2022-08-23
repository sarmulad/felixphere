import React from 'react'
import illustration from "../../assets/image7.svg"
import "./Step.css"
function StepThree() {
  return (
    <div className='flex-container'>
        <div className='stepthree-container container'>
            <div className='step-text'>
               <h1 className='header center'>Step 3</h1>
                <p>Once the presale has concluded, you will be able to claim your FELIX tokens. We will release details closer to the time, however you will need to visit the main site <a href="https://felixphere.io">https://felixphere.io</a> and click on the “Claim” button.</p>
            </div>

            <div>
                <img src={illustration} alt=''illustration width='100%' />
            </div>
        </div>
    </div>
  )
}

export default StepThree;