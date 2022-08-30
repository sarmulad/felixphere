import React from 'react';
import {  Layout } from 'antd';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./assets/fonts/Poppins-Regular.ttf";
import Home from './Pages/Home';
import About from './Pages/About';
import More from './Pages/More';
import { StageContextWrapper } from './context/StageContext';
import Buy from './Pages/Buy';
import AfterConnect from './Pages/AfterConnect'


const App = () => (
  <BrowserRouter>
    <Layout className="mainLayout">
      <StageContextWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<About />} />
          <Route path="/tokenomics" element={<More />} />
          <Route path="/buy" element={<Buy/>} />
          <Route path="/after-connect" element={<AfterConnect/>} />

        </Routes>
      </StageContextWrapper>
    </Layout>
  </BrowserRouter>
);

export default App;