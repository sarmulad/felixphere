import React from 'react';
import { Header } from 'antd/lib/layout/layout';
import { Col, Row, Image } from 'antd';
// import Bonus from '../Components/Bonus'
import BreadCrumb from '../Components/TokeCrumb';
import Footer from '../Components/AppFooter';
import img from '../assets/13t.png';

const More= () => {
  return (
    <div>
      <Header />
      <BreadCrumb />
      <Row >
        <Col className="row-1" span={24}>
          <Image src={img} preview={false} />
        </Col>
      </Row>
      {/* <Bonus /> */}
      <Footer />
    </div>
  )
}

export default More;
