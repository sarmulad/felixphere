import React from 'react';
import { Header } from 'antd/lib/layout/layout';

import Footer from '../components/AppFooter';

import BreadCrumb from '../components/BuyCrumb';
import Wallet from '../components/wallet/Wallet';
import Step from '../components/step/Step';
import StepTwo from '../components/stepTwo/StepTwo';
import StepThree from '../components/stepThree/Step';


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