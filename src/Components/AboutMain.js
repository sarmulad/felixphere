import React, { useState } from 'react';
import { Col, Row, Collapse } from 'antd';

const { Panel } = Collapse;

function AboutMain() {

    const [expandIconPosition, setExpandIconPosition] = useState('start');

    const onPositionChange = (newExpandIconPosition) => {
        setExpandIconPosition(newExpandIconPosition);
    };

    const onChange = (key) => {
        console.log(key);
    };



    return (

        <div className="aboutMain mainScreen" >
            <Row style={{ padding: "20px" }}>
                <Col xs={24} sm={24} md={24} className="pad-mob" style={{ marginTop: "100px", textAlign: "center", }}>
                    <p className="imu" style={{ width: "60%", textAlign: "center", marginLeft: "auto", marginRight: "auto", color: "white" }}>
                        FREQUENTLY ASKED QUESTIONS
                    </p>

                </Col>
            </Row>


            <Row className="faq-mob" style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }}>
                <Col xs={24} sm={24} md={24} className="pad-mob" style={{  marginBottom: "80px", fontSize: "24px" }}>


                    <Collapse
                        defaultActiveKey={['1']}
                        onChange={onChange}
                        expandIconPosition={expandIconPosition}
                    >
                        <Panel header="How Can I Participate In A Game?" key="1" >
                            <p>Click on the game that you are interested in and follow the prompts that show up.</p>
                        </Panel>
                        <Panel header="How Can I Purchase $FELIX?" key="2" >
                            <p>For now, you can purchase the $FELIX token through our presale website. </p>
                        </Panel>
                        <Panel header="How Often Will There Be A Lottery Draw?" key="3" >
                            <p>Every day at 16:00 BST, lotto draws on the Felixphere ecosystem will take place. </p>
                        </Panel>

                        <Panel header="How Many Tokens Are Available During The Presale Phase?" key="4" >
                            <p>No. There will be two month vesting period for the tokens purchased during the presale phase. </p>
                        </Panel>
                    </Collapse>
                </Col>


            </Row>

        </div>
    );
}

export default AboutMain;