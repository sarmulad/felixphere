import React, {useState} from 'react'
import EthModal from '../Modal/EthModal/Modal'
// import UsdtModal from '../Modal/UsdtModal/Modal'
// import CardModal from '../Modal/CardModal/Modal'


import Progress from '../Progress/Progress'
import "./connect.css"

function Connect() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section className='wallet flex-container'>
        <div className='wallet-container container'>
            <div className='wallet-item block'>
                <h5>34,564,520</h5>
                <h5>FELIX Tokens Remaining</h5>
                <h6>UNTIL 1 USDT = 50.20 FELIX USDT</h6>
                <p>USDT Raised: $4,324,247.25/4,750,000</p>
                <Progress done={70}/>
            </div>
            <div className='wallet-item block-2'>
              <h2>
              It couldn't be easier to get your hands on the token in 
              our pre-sale. You can buy $FELIX directly from your digital wallet 
              using $BNB. After the public presale ends, you'll be able to claim your
              purchased Felixphere Tokens using the claim pot on the main page 
              (www.felixphere.io)</h2>
            </div>
        </div>
        <div className='modal-block'>
             <EthModal 
                 open={openModal} 
                 onClose={() => setOpenModal(false)}
              />
               {/* <CardModal 
                 open={openModal} 
                 onClose={() => setOpenModal(false)}
              />
               <UsdtModal 
                 open={openModal} 
                 onClose={() => setOpenModal(false)}
              /> */}
            </div>
    </section>
  )
}

export default Connect;