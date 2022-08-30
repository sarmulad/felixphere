import React from 'react';
import { Header } from 'antd/lib/layout/layout';
import { Col, Row, Image } from 'antd';
import BreadCrumb from '../components/TokeCrumb';
import Footer from '../components/AppFooter';
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
      <Footer />
    </div>
  )
}

export default More;
