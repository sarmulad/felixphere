import React, { useState, useEffect, useRef } from 'react'
import { Anchor, Drawer, Button, Image, Select } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import sed from '../assets/logo.png';
import { Link } from 'react-router-dom';
// import Timer from './timer';
const { Option } = Select;
// const { Link } = Anchor;

function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="head-mob" style={{ background: "black", width: "100%", paddingLeft: "100px", paddingRight: "100px" }}>
      <div className="header">
        <div className="logo" style={{ zIndex: 99 }}>
          <a href='/'><img src={sed}/></a>
        </div>

        {/* <div>
          <Timer />
        </div> */}
        <div className="mobileHidden" style={{ zIndex: 99, color: "white" }}>
          
          <div style={{display:"flex", justifyContent:'space-between', alignItems:'center', gap:'2rem'}}>
            <Link to="/buy"><button className='btn btn-solid'>Buy</button></Link>
            <Link to="/"><button className='btn btn-outline'>Claim</button></Link>
            <Link to="/">Home</Link>
            <Link to="/faq">Faqs</Link>
            <Link to="/tokenomics">Tokenomics</Link>
            <a href="http://luck.felixphere.io/register">Login</a>
          </div>

        </div>


        <div className="mobileVisible" style={{ zIndex: 99 }}>
          <Button type="primary" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
          <Drawer
            placement="right"
            closable={true}
            onClose={onClose}
            visible={visible}
          >
            <div style={{display:'flex', flexDirection:'column',gap:'2rem', alignItems:'center', justifyContent:'center', marginTop:'5rem', color:'white'}}>
              <Link to="/">Home</Link>
              <Link to="/faq">Faqs</Link>
              <Link to="/tokenomics">Tokenomics</Link>
              <a href="http://luck.felixphere.io/register">Login</a>
              <Link to="/buy"><button className='btn btn-solid'>Buy</button></Link>
              <Link to="/"><button className='btn btn-outline'>Claim</button></Link>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;