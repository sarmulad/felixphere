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
                <p>To begin, make sure you have a MetaMask wallet installed on your browser, or use one of the wallets supported by Wallet Connect (we recommend Trust Wallet).</p>
                <p>Purchasing on a desktop browser will give you a smoother purchasing experience. For this we recommend Metamask.</p>
                <p>If you are purchasing on mobile, we recommend using Trust Wallet and connecting through the in built browser (just copy https://buy.felixphere.io into the Trust Wallet Browser).</p>
            </div>
        </div>
    </div>
  )
}

export default Step