import React,{useState} from 'react';
import { Col, Row, Image, Button} from 'antd';
import AppHeader from './header';
import illus from '../assets/illus.png';
import { saveAs } from "file-saver";
import WalletModal from './Modal/WalletModal/Modal'



function MainScreen() {
  const [openModal, setOpenModal] = useState(false);
    const saveFile = () => {
        saveAs(
          "/whitepaper.pdf",
          "whitepaper.pdf"
        );
      };
    return (
        <div id="hero" className="heroBlock">
            <div className="container-fluid">
                <AppHeader />
                <div className="content homeSlide" >
                    <Row className="paa" style={{ padding: "100px 50px 0px 100px" }} >

                        <Col xs={24} sm={24} md={15} style={{ display: 'block', justifyContent: "left" }}>
                            <h3 className="rider" style={{
                                fontStyle: "normal", fontWeight: 900, fontSize: "72px",
                                lineHeight: "81px", textAlign: "left", fontFamily: "SpaceGrotesk-bold"
                            }}>GAMING IN THE AGE OF WEB 3.0 WITH FELIXPHERE TOKEN</h3>
                            <p style={{ textAlign: "left", width: "60%", fontSize: "24px", padding: "0px 20px" }}>A Virtual Play-To-Earn Protocol Built on BNB Smart Chain To Bring Wealth To You in a Myraid Of Ways</p>

                            <div className="btnHolder" style={{ display: "flex", flexWrap:'wrap', gap:"20px", justifyContent: "left", padding: "0px 20px" }}>
                                <a href='/buy'><Button style={{ borderRadius: "5px", background: "transparent", border: "1px solid #FFCC00", color: "#FFCC00" }} size="large">How To Buy</Button></a>
                                <Button onClick={saveFile} size="large" style={{ borderRadius: "5px", border: "none", background: "#FFCC00", color: "black", }}> Whitepaper</Button>
                                <WalletModal
                                 open={openModal} 
                                 onClose={() => setOpenModal(false)}
                                 name="Buy presale"
                                 
                                 />
                            </div>
                        </Col>

                        <Col xs={24} sm={24} md={9} style={{ display: 'flex', justifyContent: "center" }}>
                            <Image className="no--mob" src={illus} preview={false} />
                        </Col>

                        {/* <Col xs={24} sm={24}>
                            <a href="/buy"><Button className="not_mob2" style={{ display: "none", borderRadius: "5px", background: "transparent", border: "1px solid #FFCC00", color: "#FFCC00", margin: "0px 20px 0px 0px" }} size="large">Buy Presale</Button></a>
                        </Col> */}

                    </Row>

                    <Row className="paa" style={{ padding: "50px 50px 0px 100px" }}>
                   
                    <Col xs={24} sm={24} md={11} style={{ display: 'flex', justifyContent: "center" }}>
                    </Col>
                </Row>


                {/* <Bonus /> */}

                </div>
            </div>
        </div>
    );
}

export default MainScreen;