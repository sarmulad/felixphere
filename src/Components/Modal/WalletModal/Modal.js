import React, { useState } from "react";
import wallet from '../../../assets/wallet.png'
import meta from '../../../assets/meta.svg'

import "../modal.css";
import { Link } from "react-router-dom";

export default function Modal({name}) {
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
        {name}
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 className="header provider" >CHOOSE PROVIDER</h2>
            <div className="img-container">
                <div>
                 <Link to="/after-connect"><img src={wallet} alt='logo' className="img"/></Link>
                 <p>Wallet Connect</p>
                </div>
                <div>
                <Link to="/after-connect"><img src={meta} alt='logo' className="img"/></Link>
                 <p>MetaMask</p>
                </div>
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
