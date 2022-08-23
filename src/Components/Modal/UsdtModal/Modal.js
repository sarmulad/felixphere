import React, { useState } from "react";
import "../modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
      Buy FELIX With USDT
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div class="content-group">
                <h1 class="header buy-header">Buy FELIX With USDT</h1>
                <p class="text">You can use the popup below to buy FELIX 
                in the presale - you'll be able to claim your FELIX once the presale ends. If buying the minimum of 1,000 FELIX, please ensure you 
                have at least 0.01 ETH to cover the cost of the purchase plus the gas fees.</p>
                <div class="input-container">
                    <input className="input-field medium" type="text" placeholder="0"/>
                    <span class="right-txt">FELIX</span>
                </div>
                <div class="input-container">
                    <input className="input-field " type="text" placeholder="0"/>
                    <span className="right-txt">USDT</span>
                </div>
                <button className="buy-btn">Buy FELIX With USDT</button>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              x
            </button>
          </div>
        </div>
      )}
    </>
  );
}
