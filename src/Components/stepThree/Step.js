import React from 'react'
import illustration from "../../assets/image7.svg"
import "./Step.css"
function StepThree() {
  return (
    <div className='flex-container'>
        <div className='stepthree-container container'>
            <div className='step-text'>
               <h1 className='header center'>Step 3</h1>
                <p>Connect your wallet, and the pop-up will take you to a 
                  new window. Once here, click the 'buy with BNB' button. Then, 
                  enter the quantity of $FELIX you desire to acquire in the box provided, 
                  and hit the buy button.</p>

                <div className='step-text'>
                <h1 className='header center'>Step 4</h1>
                <p>Now that your transaction has been processed, you will be able 
                  to access your $FELIX tokens 
                  by going to the claim pot on the main 
                  website after the presale concludes</p>
               </div>
            </div>

            <div>
                <img src={illustration} alt=''illustration width='100%' />
            </div>
        </div>
    </div>
  )
}

export default StepThree;