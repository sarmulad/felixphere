import React from 'react';
import { Header } from 'antd/lib/layout/layout';
import MainScreen from '../components/MainScreen';
import MainBody from '../components/MainBody';


const Home = () => {
  return (
    <div>
      <Header />
      <MainScreen />
      <MainBody />
    </div>
  )
}


export default Home;
