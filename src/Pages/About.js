import React from 'react';
import { Header } from 'antd/lib/layout/layout';

import Footer from '../components/AppFooter';

import BreadCrumb from '../components/BreadCrumb';
import AboutMain from '../components/AboutMain';


const About = () => {
  return (
    <div>
      <Header />
      <BreadCrumb />
      <AboutMain />
      <Footer />
    </div>
  )
}






export default About;
