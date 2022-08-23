import React, { useState, useContext } from 'react'
import { Col, Row, Space, Image, Tabs, Button } from 'antd';
import { StageContext } from '../context/StageContext';
import img from '../assets/13t.png';
import line from '../assets/Line16.png';

const Bonus = () => {

    const stageContext = useContext(StageContext);

    const stage1 = stageContext.stages ? stageContext.stages[0] : {start_date:'',end_date:'',bonuses:{base_percentage:0}};
    const stage2 = stageContext.stages ? stageContext.stages[1] : {start_date:'',end_date:'',bonuses:{base_percentage:0}};
    const stage3 = stageContext.stages ? stageContext.stages[2] : {start_date:'',end_date:'',bonuses:{base_percentage:0}};
    const stage4 = stageContext.stages ? stageContext.stages[3] : {start_date:'',end_date:'',bonuses:{base_percentage:0}};

    return (
        <div className="for--bg mainScreen" >
            <Space size="large"></Space>
            <Row className="ttoke" align="center" style={{ width: "100%", justifyContent: "center" }}>
                <div style={{
                    display: "flex",
                    width: "70%",
                    color: "white",
                    position: "relative",
                    top: "15px",
                    justifyContent: "center"
                }}>
                    <Col className=" gutter-row br-right" xs={24} sm={24} md={6} >
                        <p className="test1"></p>
                        <br></br>
                        <div style={{ display: "flex" }}>
                            <h2 className="testing" style={{ width: "100%", border: "none", color: "#FFCC00", fontWeight: "bolder" }}>ROUND 1</h2>
                            <Image style={{
                                position: "relative",
                                top: "90px"
                            }} src={line} />
                        </div>
                    </Col>
                    <Col className=" gutter-row br-right" xs={24} sm={24} md={6} >
                        <p className="test1"></p>
                        <br></br>
                        <div style={{ display: "flex" }}>
                            <h2 className="testing" style={{ width: "100%", border: "none", color: "#FFCC00", fontWeight: "bolder" }}>ROUND 2</h2>
                            <Image style={{
                                position: "relative",
                                top: "90px"
                            }} src={line} />
                        </div>
                    </Col>
                    <Col className=" gutter-row br-right" xs={24} sm={24} md={6} >
                        <p className="test1"></p>
                        <br></br>
                        <div style={{ display: "flex" }}>
                            <h2 className="testing" style={{ width: "100%", border: "none", color: "#FFCC00", fontWeight: "bolder" }}>ROUND 3</h2>
                            <Image style={{
                                position: "relative",
                                top: "90px"
                            }} src={line} />
                        </div>
                    </Col>
                    <Col className=" gutter-row br-right" xs={24} sm={24} md={6} >
                        <p className="test1"></p>
                        <br></br>
                        <div style={{ display: "flex" }}>
                            <h2 className="testing" style={{ width: "100%", border: "none", color: "#FFCC00", fontWeight: "bolder" }}>ROUND 4</h2>
                            <Image style={{
                                position: "relative",
                                top: "90px"
                            }} src={line} />
                        </div>
                    </Col>
                </div>
            </Row>
            <Row align="center" className="tken" style={{ marginBottom: "150px" }}>
                <div className="tab1 box1" style={{
                    display: "flex",
                    width: "80%",
                    color: "white",
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <Col className=" gutter-row br-right" xs={24} sm={24} md={6} >
                        <p className="test1"></p>
                        <br></br>
                        <div style={{ display: "flex" }}>
                            <p className="testing" style={{ width: "100%", fontSize: "16px" }}>{(new Date(stage1.start_date)).toDateString().toUpperCase()} - {(new Date(stage1.end_date)).toDateString().toUpperCase()}</p>
                            <Image style={{
                                position: "relative",
                                top: "90px"
                            }} src={line} />
                        </div>
                        <div style={{ display: "flex" }}>
                            <p className="testing" style={{ width: "100%", fontSize: "16px" }}>Upto  <span style={{ color: "#FFCC00", fontWeight: "bolder" }}>{stage1.bonuses.base_percentage}%</span> in
                                Bonuses</p>
                            <Image style={{
                                position: "relative",
                                top: "90px"
                            }} src={line} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <a href="https://luck.felixphere.io/register"><Button size="large" style={{ borderRadius: "5px", border: "none", fontWeight: "bold", background: "#FFCC00", color: "black" }}> Buy Tokens</Button></a>
                        </div>
                    </Col>
                    <Col className=" gutter-row br-right" xs={24} sm={24} md={6} >
                        <p className="test1"></p>
                        <br></br>
                        <div style={{ display: "flex" }}>
                            <p className="testing" style={{ width: "100%", fontSize: "16px" }}>{(new Date(stage2.start_date)).toDateString().toUpperCase()} - {(new Date(stage2.end_date)).toDateString().toUpperCase()}</p>
                            <Image style={{
                                position: "relative",
                                top: "90px"
                            }} src={line} />
                        </div>
                        <div style={{ display: "flex" }}>
                            <p className="testing" style={{ width: "100%", fontSize: "16px" }}>Upto  <span style={{ color: "#FFCC00", fontWeight: "bolder" }}>{stage2.bonuses.base_percentage}%</span> in
                                Bonuses</p>
                            <Image style={{
                                position: "relative",
                                top: "90px"
                            }} src={line} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <a href="https://luck.felixphere.io/register"><Button size="large" style={{ borderRadius: "5px", border: "none", fontWeight: "bold", background: "#FFCC00", color: "black" }}> Buy Tokens</Button></a>
                        </div>
                    </Col>
                    <Col className=" gutter-row br-right" xs={24} sm={24} md={6} >
                        <p className="test1"></p>
                        <br></br>
                        <div style={{ display: "flex" }}>
                            <p className="testing" style={{ width: "100%", fontSize: "16px" }}>{(new Date(stage3.start_date)).toDateString().toUpperCase()} - {(new Date(stage3.end_date)).toDateString().toUpperCase()}</p>
                            <Image style={{
                                position: "relative",
                                top: "90px"
                            }} src={line} />
                        </div>
                        <div style={{ display: "flex" }}>
                            <p className="testing" style={{ width: "100%", fontSize: "16px" }}>Upto  <span style={{ color: "#FFCC00", fontWeight: "bolder" }}>{stage3.bonuses.base_percentage}%</span> in
                                Bonuses</p>
                            <Image style={{
                                position: "relative",
                                top: "90px"
                            }} src={line} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <a href="https://luck.felixphere.io/register"><Button size="large" style={{ borderRadius: "5px", border: "none", fontWeight: "bold", background: "#FFCC00", color: "black" }}> Buy Tokens</Button></a>
                        </div>
                    </Col>
                    <Col className="gutter-row" xs={24} sm={24} md={6} >
                        <p className="test1"></p>
                        <br></br>
                        <div style={{ display: "flex" }}>
                            <p className="testing" style={{ width: "100%", fontSize: "16px" }}>{(new Date(stage4.start_date)).toDateString().toUpperCase()} - {(new Date(stage4.end_date)).toDateString().toUpperCase()}</p>
                            <Image style={{
                                position: "relative",
                                top: "90px"
                            }} src={line} />
                        </div>
                        <div style={{ display: "flex" }}>
                            <p className="testing" style={{ width: "100%", fontSize: "16px" }}>Upto  <span style={{ color: "#FFCC00", fontWeight: "bolder" }}>{stage4.bonuses.base_percentage}%</span> in
                                Bonuses</p>
                            <Image style={{
                                position: "relative",
                                top: "90px"
                            }} src={line} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <a href="https://luck.felixphere.io/register"><Button size="large" style={{ borderRadius: "5px", border: "none", fontWeight: "bold", background: "#FFCC00", color: "black" }}> Buy Tokens</Button></a>
                        </div>
                    </Col>
                </div>
            </Row>
            <Row className="mobile" style={{ display: "none" }}>
                <Col className="gutter-row" xs={24} sm={24} style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    border: "2px solid #FFCC00",
                    padding: "50px",
                    marginBottom: "20px"
                }} >
                    <h2 className="" style={{ textAlign: "center", width: "100%", border: "none", color: "#FFCC00", fontWeight: "bolder" }}>ROUND 1</h2>
                    <p className="" style={{ textAlign: "center", color: "white", width: "100%", fontSize: "16px" }}>{(new Date(stage1.start_date)).toDateString().toUpperCase()} - {(new Date(stage1.end_date)).toDateString().toUpperCase()}</p>
                    <p className="" style={{ textAlign: "center", color: "white", width: "100%", fontSize: "16px" }}>Upto  <span style={{ fontSize: "20px", color: "#FFCC00", fontWeight: "bolder" }}>{stage1.bonuses.base_percentage}%</span> in
                        Bonuses</p>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <a href="https://luck.felixphere.io/register"><Button size="large" style={{ borderRadius: "5px", border: "none", fontWeight: "bold", background: "#FFCC00", color: "black" }}> Buy Tokens</Button></a>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} sm={24} style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    border: "2px solid #FFCC00",
                    padding: "50px",
                    marginBottom: "20px"
                }} >
                    <h2 className="" style={{ textAlign: "center", width: "100%", border: "none", color: "#FFCC00", fontWeight: "bolder" }}>ROUND 2</h2>
                    <p className="" style={{ textAlign: "center", color: "white", width: "100%", fontSize: "16px" }}>{(new Date(stage2.start_date)).toDateString().toUpperCase()} - {(new Date(stage2.end_date)).toDateString().toUpperCase()}</p>
                    <p className="" style={{ textAlign: "center", color: "white", width: "100%", fontSize: "16px" }}>Upto  <span style={{ fontSize: "20px", color: "#FFCC00", fontWeight: "bolder" }}>{stage2.bonuses.base_percentage}%</span> in
                        Bonuses</p>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <a href="https://luck.felixphere.io/register"><Button size="large" style={{ borderRadius: "5px", border: "none", fontWeight: "bold", background: "#FFCC00", color: "black" }}> Buy Tokens</Button></a>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} sm={24} style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    border: "2px solid #FFCC00",
                    padding: "50px",
                    marginBottom: "20px"
                }} >
                    <h2 className="" style={{ textAlign: "center", width: "100%", border: "none", color: "#FFCC00", fontWeight: "bolder" }}>ROUND 3</h2>
                    <p className="" style={{ textAlign: "center", color: "white", width: "100%", fontSize: "16px" }}>{(new Date(stage3.start_date)).toDateString().toUpperCase()} - {(new Date(stage3.end_date)).toDateString().toUpperCase()}</p>
                    <p className="" style={{ textAlign: "center", color: "white", width: "100%", fontSize: "16px" }}>Upto  <span style={{ fontSize: "20px", color: "#FFCC00", fontWeight: "bolder" }}>{stage3.bonuses.base_percentage}%</span> in
                        Bonuses</p>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <a href="https://luck.felixphere.io/register"><Button size="large" style={{ borderRadius: "5px", border: "none", fontWeight: "bold", background: "#FFCC00", color: "black" }}> Buy Tokens</Button></a>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} sm={24} style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    border: "2px solid #FFCC00",
                    padding: "50px",
                    marginBottom: "20px"
                }} >
                    <h2 className="" style={{ textAlign: "center", width: "100%", border: "none", color: "#FFCC00", fontWeight: "bolder" }}>ROUND 4</h2>
                    <p className="" style={{ textAlign: "center", color: "white", width: "100%", fontSize: "16px" }}>{(new Date(stage4.start_date)).toDateString().toUpperCase()} - {(new Date(stage4.end_date)).toDateString().toUpperCase()}</p>
                    <p className="" style={{ textAlign: "center", color: "white", width: "100%", fontSize: "16px" }}>Upto  <span style={{ fontSize: "20px", color: "#FFCC00", fontWeight: "bolder" }}>{stage4.bonuses.base_percentage}%</span> in
                        Bonuses</p>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <a href="https://luck.felixphere.io/register"><Button size="large" style={{ borderRadius: "5px", border: "none", fontWeight: "bold", background: "#FFCC00", color: "black" }}> Buy Tokens</Button></a>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Bonus




