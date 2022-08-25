import React from 'react'
// import card from "../../assets/card.svg"
// import eth from "../../assets/eth.svg"
// import tether from "../../assets/tether.svg"
import "./steptwo.css"
function StepTwo() {
  return (
    <div className='flex-container'>
    <h1 className='header'>Step 2</h1>
     <p style={{textAlign:'center'}}>Once you have your preferred wallet provider ready, click “Connect Wallet” and select the appropriate option. For mobile wallet apps you will need to select “Wallet Connect”. </p>
     <p>You will then have 3 options:</p>
    <div className='container step-container'>
        {/* <div className='outline-left'>
            <div className='item'>
                <h4 className='header'>BUY ETH WITH CARD</h4>
                <img src={card} alt='icon'/>
                <p>This option will allow you to purchase ETH that will be sent to your wallet by our partner, Transak. You will then be able to use this ETH to purchase FELIX. Click “Buy ETH With Card” to begin and follow the on screen steps. We recommend purchasing a minimum of $15 worth of ETH to cover the minimum FELIX purchase.</p>
            </div>

        </div> */}
        <div className='item'>
            <h4 className='header'>BUY FELIX WITH BNB</h4>
            {/* <img src={eth} alt='icon'/> */}
            <p>Once this is established, it is time to purchase BNB. You can do this on exchanges such as Binance. Once you've bought the BNB, send it to your Metamask. ' Now you can buy $FELIX.</p>
        </div>
        {/* <div className='outline-right'>
         <div className='item'>
            <h4 className='header'> BUY FELIX WITH USDT</h4>
            <img src={tether} alt='icon'/>
            <p>Please ensure you have at least $15 of USDT in your wallet before commencing the transaction. Type in the amount of FELIX you wish to purchase (1,000 minimum). Click “Convert USDT”. You will then be asked to approve the purchase TWICE. The first approval is for the USDT contract and the second is for the transaction amount. Please ensure you go through both approval steps in order to complete the transaction.</p>
          </div>

        </div> */}
    </div>
  </div>
  )
}

export default StepTwo