import React, { useContext } from "react"
import telegram from '../assets/soc7.svg';
import twitter from '../assets/soc3.svg';
import { Col, Row,  Layout } from 'antd';
import { StageContext } from '../context/StageContext';
import log from '../assets/FELIXTEXT.svg';



const { Footer } = Layout;

function AppFooter() {
  const stageContext = useContext(StageContext);

  return (
    <>
    <div style={{background:'black', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'5rem 1rem'}}>
      <h2 style={{color:'#fff'}}>FIND US ON SOCIAL</h2>
      <div style={{display: "flex",gap:'1rem'}}>
      <a href={stageContext.project ? stageContext.project.social_media.twitter : ''}><img width="30px" src={twitter}/></a>
      <a href={stageContext.project ? stageContext.project.social_media.telegram : ''}><img width="30px" src={telegram}/></a>
      </div>
    </div>
    <Footer>
      <Row>
        <div className="myfoot" style={{ width: "100%", textAlign: "left", display: "flex", justifyContent: "space-between" }}>
          <Col xs={24} sm={24} md={8}>
            <img src={log} />
            <br/>
            <br/>
            {/* <a href={stageContext.project ? stageContext.project.social_media.twitter : ''}><img width="30px" src={twitter}/></a>
            <a href={stageContext.project ? stageContext.project.social_media.telegram : ''}><img width="30px" src={telegram}/></a> */}
          </Col>

          <Col xs={24} sm={24} md={8} >
            <p className="reserved" style={{ color: "black" }}>Copyright © 2022. All Rights Reserved by FELIXPHERE</p>
          </Col>

        </div>
      </Row>


    </Footer>
    </>

  );
}

export default AppFooter;