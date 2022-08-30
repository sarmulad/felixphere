import React from 'react';
import { Header } from 'antd/lib/layout/layout';

import Footer from '../Components/AppFooter';

import BreadCrumb from '../Components/BuyCrumb';
import Wallet from '../Components/wallet/Wallet';
import Step from '../Components/step/Step';
import StepTwo from '../Components/stepTwo/StepTwo';
import StepThree from '../Components/stepThree/Step';


const Buy = () => {
  return (
    <div>
      <Header />
      <BreadCrumb />
      <Wallet/>
      <Step/>
      <StepTwo/>
      <StepThree/>
      <Footer />
    </div>
  )
}


export default Buy;