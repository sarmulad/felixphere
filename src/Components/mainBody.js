import React from 'react';
import { Col, Row, Image, Button } from 'antd';

import dice from '../assets/dice.png';
import two from '../assets/two.png';

import illus1 from '../assets/42.png';
import illus7 from '../assets/52.png';

import image0 from '../assets/image0.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';

import rect from '../assets/Rect.png';
import AppFooter from './AppFooter';

function MainBody() {
    return (

        <div className="mainScreen">
            <div style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}>

                <Row className="spon_mob" style={{ padding: "20px", justifyContent: "space-between" }}>
                    <Col xs={24} sm={24} md={11} style={{ display: 'flex', justifyContent: "center" }}>
                        <div className="contents">
                            <p className="pto pto1" style={{ color: "white", borderRadius: "10px", background: "linear-gradient(269.71deg, #010101 2.61%, #CC9900 102.7%)" }}>
                                Real Games, Real Gains!
                            </p>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={11} style={{ display: 'flex', justifyContent: "center" }}>
                        <div className="contents">
                            <p className="pto" style={{ color: "white", borderRadius: "10px", background: "linear-gradient(269.71deg, #CC9900 7.03%, #010101 102.15%)" }}>
                                Challenge Anyone in the Felixphere community and
                                earn $FELIX Tokens as rewards.
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className="spon_mob" style={{ padding: "20px", justifyContent: "space-between" }}>
                    <Col xs={24} sm={24} md={11} style={{ display: 'flex', justifyContent: "center" }}>
                        <div className="contents">
                            <p className="pto" style={{ color: "white", borderRadius: "10px", background: "linear-gradient(269.71deg, #010101 2.61%, #CC9900 102.7%)" }}>
                                Take the Chance, Make the Change, Be a Winner
                            </p>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={11} style={{ display: 'flex', justifyContent: "center" }}>
                        <div className="contents">
                            <p className="pto" style={{ color: "white", borderRadius: "10px", background: "linear-gradient(269.71deg, #CC9900 7.03%, #010101 102.15%)" }}>
                                Challenge, Play, Earn, Repeat!
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className="spon_mob" style={{ padding: "20px", justifyContent: "space-between" }}>
                    <Col xs={24} sm={24} md={11} style={{ display: 'flex', justifyContent: "center" }}>
                        <div className="contents">
                            <p className="pto" style={{ color: "white", borderRadius: "10px", background: "linear-gradient(269.71deg, #010101 2.61%, #CC9900 102.7%)" }}>
                                $FELIX Token - The Utility Token Endorsed by “Lady Luck”
                                - Earn $Felix Tokens, it’s Fun, Easy and Rewarding.
                            </p>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={11} style={{ display: 'flex', justifyContent: "center" }}>
                        <div className="contents">
                            <p className="pto" style={{ color: "white", borderRadius: "10px", background: "linear-gradient(269.71deg, #CC9900 7.03%, #010101 102.15%)" }}>
                                Become the Master of the Felixsphere!
                            </p>
                        </div>
                    </Col>
                </Row>



                <Row>

                    <Col xs={24} sm={24} md={24} className="pad-mob" style={{ marginTop: "120px" }}>
                        <h3 style={{ color: "white", fontSize: "40px", textAlign: "center" }}>Our Games</h3>
                    </Col>

                </Row>

                <Row style={{ padding: "20px", maxWidth:'800px', margin:'3rem auto'}}>
                    
                    <Col xs={24} sm={24} md={10} lg={12} className="shape-outline outline-1 shape-1">
                        <div className="shape sh-1">
                            <Image className="kk-image" style={{ width: "30%" }} src={two} preview={false} />
                            <h3 className="all-mob" style={{ color: "#FFCC00", textAlign: "center" }}>Rock/Paper/Scissors</h3>
                            <p  style={{ color: "white",  }}>
                                A simple hand game usually played by two people where each player forms one of the three shapes and displays it simultaneously.
                                
                            </p>
                            <p  style={{ color: "white",  }}>
                                They can either form “rock”, “paper” or “scissors”. Rock trumps scissors because they can break scissors, scissors beat paper because they were created to
                                cut paper and paper leads rock because rock can be covered with paper.
                            </p>
                            <div className="btn-mo" style={{ display: 'flex', justifyContent: "center", marginTop:'2rem' }}>
                                <Button style={{ background: "#FFCC00", border: "none", color: "#000" }} size="large">Coming Soon</Button>

                            </div>
                        </div>
                    </Col>


                    <Col xs={24} sm={24} md={10} lg={12} className="shape-outline outline-2 shape-2">
                        <div className="shape sh-2 " >

                            <Image className="kk-image" style={{ width: "30%" }} src={dice} preview={false} />
                            <h3 className="all-mob" style={{ color: "#FFCC00", textAlign: "center" }}>Roll The Dice</h3>

                            <p  style={{ color: "white",  }}>
                              The game is played by 2 or more players. Each player places a bet on the outcome of the roll of a pair of dice.
                            </p>
                            <p style={{ color: "white",  }}>
                              The bet could be either over a certain amount or under a certain amount. The winner is whoever’s bet is closest to the outcome of the roll.
                            </p>
                            
                            <div className="btn-mo" style={{ display: 'flex', justifyContent: "center", marginTop:'2rem' }}>
                                <Button style={{ background: "#FFCC00", border: "none", color: "#000" }} size="large">Coming Soon</Button>
                            </div>

                        </div>
                    </Col>

                    <Col xs={24} sm={24} md={10} lg={12} className="shape-outline outline-3 shape-3">
                        <div className="shape sh-3" >

                            <Image className="kk-image" style={{ width: "30%" }} src={illus1} preview={false} />
                            <h3 className="all-mob" style={{ color: "#FFCC00", textAlign: "center" }}>Tic-Tac-Toe</h3>

                            <p  style={{ color: "white",  }}>
                                Also known as Xs and Os, this game is for two players. At the start of the game, they each choose either an X or an O and then they take turns writing their chosen symbol on spaces in a three-by-three grid. The first player to write their letter, three in a row either horizontally, vertically, or diagonally, wins.

                            </p>
                            <div className="btn-mo" style={{ display: 'flex', justifyContent: "center", marginTop:'2rem' }}>
                                <Button style={{ background: "#FFCC00", border: "none", color: "#000"}} size="large">Coming Soon</Button>
                            </div>

                        </div>
                    </Col>

                    <Col xs={24} sm={24} md={10} lg={12} className="shape-outline outline-4 shape-4">
                        <div className="shape sh-4" >

                            <Image className="kk-image" style={{ width: "30%" }} src={illus7} preview={false} />
                            <h3 className="all-mob" style={{ color: "#FFCC00", textAlign: "center" }}>Dots and Boxes</h3>

                            <p style={{ color: "white",  }}>
                                This game is also played by two people and is similar to tic-tac-toe. There is a grid with enough dots to form at least 5 boxes. Each player takes turns drawing lines to connect the dots to complete a box and put their initials in it. When all the boxes have been drawn and initials are written to claim ownership, whoever’s initial is the most wins.

                            </p>
                            <div className="btn-mo" style={{ display: 'flex', justifyContent: "center", marginTop:'2rem' }}>
                                <Button style={{ background: "#FFCC00", border: "none", color: "#000" }} size="large">Coming Soon</Button>

                            </div>

                        </div>
                    </Col>

                </Row>

                <Row style={{ padding: "20px", marginBottom: "30px" }}>


                    <Col xs={24} sm={24} md={12} className="pad-mob">
                        <Image src={image0} preview={false} />

                    </Col>


                    <Col xs={24} sm={24} md={12} className="pad-mob" style={{ marginTop: "60px" }}>
                        <h3 className="h-mob" style={{ color: "#FFCC00", textAlign: "left" }}>Felixphere - In a Pot of Gold</h3>


                        <p style={{ color: "white" }}>
                            Felixphere is a community, a safe and inclusive place where people can meet, interact, play and earn.

                            <br />
                            <br />

                            The Felixphere ecosystem is designed for anybody to play and gain! Through play-to-earn games and a daily lottery, Felixphere is presenting users with the opportunity to gamble for a chance to earn big or bathe in a “pot of gold”
                            <br />
                            <br />

                            Fingers Crossed!

                        </p>

                    </Col>



                </Row>


                <Row className="spon_mob_1" style={{ padding: "20px", marginBottom: "30px" }}>

                    <Col xs={24} sm={24} md={12} className="pad-mob" style={{ marginTop: "60px" }}>
                        <h3 className="h-mob" style={{ color: "#FFCC00", textAlign: "left" }}>Felixphere - “Lucky Number 7” - When you Gain, What do you Gain?
                        </h3>

                        <p style={{ color: "white" }}>You’ve entered the Felixphere, welcome! Now what? Start the Game!
                        </p>


                        <p style={{ color: "white" }}>
                            <Image src={rect} /> Deposit your quota to the prize pot
                        </p>
                        <p style={{ color: "white" }}>
                            <Image src={rect} /> Felixphere also adds a 10% bonus to the total! (the higher
                            the player's tokens are deposited, the more Felixphere contributes) </p>
                        <p style={{ color: "white" }}>
                            <Image src={rect} /> The winner takes 90% of the prize pot as their reward.
                        </p>
                        <p style={{ color: "white" }}>
                            <Image src={rect} /> The remaining 10% is distributed as cashback for wallet holders
                        </p>
                        <p style={{ color: "white" }}>
                            Get Gaming, Get Gaining!
                        </p>

                    </Col>
                    <Col xs={24} sm={24} md={12} className="pad-mob" style={{ display: "flex", justifyContent: "flex-end" }}>

                        <Image src={image1} preview={false} />

                    </Col>


                </Row>

                <Row style={{ padding: "20px", marginBottom: "30px" }}>
                    <Col xs={24} sm={24} md={12} className="pad-mob" style={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <Image src={image2} preview={false} style={{
                            display: "flex",
                            alignItems: "center"
                        }} />

                    </Col>

                    <Col xs={24} sm={24} md={12} className="pad-mob" style={{ marginTop: "60px" }}>
                      <h3 className="h-mob" style={{ color: "#FFCC00", textAlign: "left" }}>Felixphere - The Lucky Lotto  </h3>
                      <p style={{ color: "white" }}>Every day at 16:00 BST join our lotto draws where you can win an array of prizes and rewards! </p>
                      <p style={{ color: "white" }}>
                            <Image src={rect} /> Create a wallet and fund it with $FELIX tokens to be able to purchase a ticket
                      </p>
                      <p style={{ color: "white" }}>
                            <Image src={rect} /> Select 5 numbers from 0-9
                      </p>
                      <p style={{ color: "white" }}>
                            <Image src={rect} /> Match any number in the same position to win prizes - The more numbers you match, the more you win
                      </p>
                    
                    </Col>



                </Row>


                <Row className="spon_mob_1" style={{ padding: "20px", marginBottom: "30px", alignItems:'center' }}>

                    <Col xs={24} sm={24} md={12} className="pad-mob" style={{ marginTop: "60px" }}>
                        <h3 className="h-mob" style={{ color: "#FFCC00", textAlign: "left" }}>Felixphere - Rewards/Referral System = The Two-Leaf Clover - A Lucky Rarity! </h3>
                        <p style={{ color: "white" }}>The Felixphere Community is a Lucky one! We have created the most forward-thinking and exclusive 2-layer rewards and referral program in the cryptosphere - the Two-Leaf Clover - A Lucky Rarity. </p>

                         <Row style={{ justifyContent: "space-between" }}>
                            <Col xs={24} sm={24} md={12} className="pad-mob" style={{ marginTop: "20px" }}>
                                <h4 style={{ color: "#FFCC00", padding: "20px" }}>Layer - Leaf 1</h4>
                                <p style={{ color: "white", padding: "20px" }}>
                                    <Image src={rect} /> Create an ID that can be accessed after playing 3 games on the Felixphere ecosystem and then invite your friends to join through your unique referral ID.

                                </p>
                                <p style={{ color: "white", padding: "20px" }}>
                                    <Image src={rect} /> After they sign up, for each game they play and win, 2% of the 10% charge on their winnings is credited to your wallet.

                                </p>


                            </Col>

                            <Col xs={24} sm={24} md={12} className="pad-mob" style={{ marginTop: "20px" }}>
                                <h4 style={{ color: "#FFCC00", padding: "20px" }}>Layer - Leaf 2</h4>
                                <p style={{ color: "white", padding: "20px" }}>
                                    <Image src={rect} /> The moment someone who was referred by you creates a referral ID, your wallet is linked to it.
                                </p>
                                <p style={{ color: "white", padding: "20px" }}>
                                    <Image src={rect} /> For every person that uses their own referral ID, you are eligible for 0.5% of the 10% charge on their referred person.
                                </p>


                            </Col>
                        </Row>



                    </Col>
                    <Col xs={24} sm={24} md={12} className="pad-mob" style={{ display: "flex", justifyContent: "flex-end" }}>

                        <Image src={image3} preview={false} />

                    </Col>



                </Row>

                <Row style={{ padding: "20px", marginBottom: "30px", alignItems:'center'}}>

                    <Col xs={24} sm={24} md={12} className="pad-mob">
                        <Image src={image4} preview={false} />

                    </Col>

                    <Col xs={24} sm={24} md={12} className="pad-mob" style={{ marginTop: "60px" }}>
                        <h3 className="h-mob" style={{ color: "#FFCC00", textAlign: "left" }}>Felixphere - The $FELIX Token  </h3>
                        <p style={{ color: "white" }}>$FELIX is built on the BNB Smart Chain. The token powers the entire ecosystem and all transactions on the Felixphere platform</p>
                        <p style={{ color: "white" }}>Use <span style={{color:'#ffcc00'}}>$FELIX</span> to:</p>
                        <p style={{ color: "white" }}>
                            <Image src={rect} /> Participate in great online games;
                        </p>
                        <p style={{ color: "white" }}>
                            <Image src={rect} /> Buy lottery tickets;
                        </p>
                        <p style={{ color: "white" }}>
                            <Image src={rect} /> Participate in governance on the Felixphere DAO;
                        </p>
                        <p style={{ color: "white" }}>
                            <Image src={rect} /> Stake, lend, borrow, pool, and trade;
                        </p>
                        <p style={{ color: "white" }}>
                            <Image src={rect} /> Token holders will be exposed to airdrops to their wallets;
                        </p>
                    </Col>
                </Row>
                <Row className="spon_mob_1" style={{ padding: "20px", marginBottom: "30px" }}>

                <Col xs={24} sm={24} md={12} className="pad-mob" style={{ marginTop: "60px" }}>
                <h3 className="h-mob" style={{ color: "#FFCC00", textAlign: "left" }}>Felixphere Games - Safe and Sound </h3>
                <p style={{ color: "white" }}>
                    <Image src={rect} />Is Felixphere secure? - The SHA-256 method, which is used to protect each and every game,
                    ensures that the objective of the game cannot be altered in any way. Your game will also be
                    safe from any interference from outside parties thanks to our cutting-edge technology.

                </p>
                <p style={{ color: "white" }}>
                    <Image src={rect} /> Since it was first introduced, there have been no security breaches on our platform, allowing
                    users from all over the world to have fun and share experiences on Felixphere.

                </p>

                </Col>
                <Col xs={24} sm={24} md={12} className="pad-mob" style={{ display: "flex", justifyContent: "flex-end" }}>

                    <Image src={image5} preview={false} />

                </Col>



                </Row>
                <div>
                </div>


            </div>
            <AppFooter />

        </div>
    );
}

export default MainBody;