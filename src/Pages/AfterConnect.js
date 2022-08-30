import React from 'react';
import { Header } from 'antd/lib/layout/layout';

import Footer from '../Components/AppFooter';

import BreadCrumb from '../Components/BuyCrumb';
import Connect from "../Components/Connect/Connect";
import Step from '../Components/step/Step';
import StepTwo from '../Components/stepTwo/StepTwo';
import StepThree from '../Components/stepThree/Step';


const Buy = () => {
  return (
    <div>
      <Header />
      <BreadCrumb />
      <Connect/>
      <Step/>
      <StepTwo/>
      <StepThree/>
      <Footer />
    </div>
  )
}


export default Buy;