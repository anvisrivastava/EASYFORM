import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Home.css";
import Frame2 from "../../assets/Frame2.png";
import EasyForm2 from "../../assets/EasyForm2.png";
import PrevIcon from "../../components/Home/PrevIcon";
import NextIcon from "../../components/Home/NextIcon";
import Canva from "../../assets/Canva.png";
import Mailchimp from "../../assets/Mailchimp.png";
import Button from "react-bootstrap/Button";
import { useRef } from "react";
import { Carousel } from "react-bootstrap";
import Man from "../../assets/Man.png";
import Comma from "../../assets/Comma.png";
import Comma1 from "../../assets/Comma1.png";
import form from "../../assets/form.png";
import LogoWhite from "../../assets/LogoWhite.png";
import youtube from "../../assets/youtube.png";
import linkedin from "../../assets/linkedin.png";
import facebook from "../../assets/facebook.png";
import Vector from "../../assets/Vector.png";


function Home() {
    const ref = useRef(null);

    const onNextClick = () => {
        ref.current.next();
    }

    const onPrevClick = () => {
        ref.current.prev();
    }
    return (
        <>
            <Container fluid className='home'>
                <Row>
                    <Col sm={6}>
                        <img src={Frame2} alt='...' className="frame2" style={{ padding: "35px", backgroundColor: "white" }} />
                    </Col>
                    <Col sm={6}>
                        <h1 className='embed'>How To Embed Easy<br /> Forms On Your Site<br /> (Easy)</h1>
                        <button className="buttn">Get Started It's Free</button>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <Row>
                    <Col sm={6}>
                        <h1 className="create">To get started you first need to<br /> create a Easy Form.</h1>
                        <p style={{ marginLeft: "105px", marginRight: "5px" }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Col>
                    <Col sm={6}>
                        <img src={EasyForm2} style={{ marginTop: "70px", marginLeft: "80px" }} />
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col sm={6}>
                        <img src={EasyForm2} style={{ marginTop: "80px", marginLeft: "140px" }} />
                    </Col>
                    <Col sm={6}>
                        <h2 className="create1">Create an online form as easily as<br /> creating a document.</h2>
                        <p style={{ marginLeft: "45px" }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim<br /> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut<br /> aliquip ex ea commodo consequat.</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='homepage'>
                <Row>
                    <Col sm={6}>
                        <h1 className="workflow">Works with Your existing workflow</h1>
                        <a href="./" className="browser">Browser 50+ Integrations</a><br />
                        <Button variant="link" id="prev-btn" onClick={onPrevClick}>
                            <PrevIcon />
                        </Button>
                        <Button variant="link" id="prev-btn" onClick={onNextClick}>
                            <NextIcon />
                        </Button>
                    </Col>
                    <Col sm={6}>
                        <Carousel indicators={false} interval={null} controls={false} ref={ref}>
                            <Carousel.Item>
                                <img src={Canva} className="Canva" alt={Canva} />
                                <img src={Mailchimp} className="Mailchimp" alt={Mailchimp} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={Canva} className="Canva" alt={Canva} />
                                <img src={Mailchimp} className="Mailchimp" alt={Mailchimp} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={Canva} className="Canva" alt={Canva} />
                                <img src={Mailchimp} className="Mailchimp" alt={Mailchimp} />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col sm className='text'>
                        <h2>You Can Do it All With A Form</h2>
                        <p style={{marginLeft:"-30px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/> tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm className='boxes'>
                        <h4 style={{ marginLeft: "4px" }}>Product</h4>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill=" #00cf86" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                        </svg>Easy Form</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill=" #00cf86" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                        </svg>Product Research</p>
                        <p> <svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill=" #00cf86" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                        </svg>Product Feedback</p>
                    </Col>
                    <Col sm className='boxes'>
                        <h4 style={{ marginLeft: "4px" }}>Creators</h4>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill=" #00cf86" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                        </svg>Contact Details</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill=" #00cf86" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                        </svg>Customer Feedback</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill=" #00cf86" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                        </svg>Product Recommendation</p>
                    </Col>
                    <Col sm className='boxes'>
                        <h4 style={{ marginLeft: "4px" }}>Response</h4>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill=" #00cf86" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                        </svg>Request</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill=" #00cf86" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                        </svg>Received</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm className='boxes1'>
                        <h4 style={{ marginLeft: "4px" }}>Marketing</h4>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill=" #00cf86" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                        </svg>Signups</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill=" #00cf86" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                        </svg>Branding</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill=" #00cf86" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                        </svg>Customer Feedback</p>
                    </Col>
                    <Col sm className='boxes1'>
                        <h4 style={{ marginLeft: "4px" }}>General Business</h4>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill=" #00cf86" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                        </svg>Referral</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill=" #00cf86" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                        </svg>Resgistration</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill=" #00cf86" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                        </svg>Client Onboarding</p>
                    </Col>
                    <Col sm className='boxes1'>
                        <h4 style={{ marginLeft: "4px" }}>Customer Success</h4>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill=" #00cf86" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                        </svg>FAQ Builder</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill=" #00cf86" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                        </svg>Net Promoter Score</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill=" #00cf86" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                        </svg>Customer Satisfaction</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='footer'>
                <Row>
                    <Col sm className='text-center'>
                        <h3>Customers Love EasyForm</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm className='man'>
                        <img src={Man} alt="../" style={{ width: "120px" }} />
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                        <img src={Comma} alt=".." style={{ width: "55px", height: "35px", marginLeft: "325px", marginBottom: "-40px" }} />
                        <p style={{ textAlign: "center" }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br /> labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br />ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <img src={Comma1} alt=".." style={{ width: "55px", height: "35px", marginLeft: "920px", marginTop: "-70px" }} />
                        <h4 style={{ textAlign: "center", marginTop: "-15px", color: "#00d78b" }}>Suman Chakraborty</h4>
                        <p style={{ textAlign: "center", fontWeight: "bold" }}>Business Developer</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col sm={6}>
                        <img src={form} alt="../" style={{ width: "550px", marginTop: "70px", marginLeft: "150px" }} />
                    </Col>
                    <Col sm={6}>
                        <>
                            <div className='easyform'>
                                <h1>Why Easyform</h1>
                                <h5 style={{ fontSize: "28px" }}>Because after switching to us...</h5>
                            <>
                                <h1 style={{ marginTop: "20px" }}>95%</h1>
                                <p style={{ marginLeft: "100px", marginTop: "-52px", fontSize: "16px" }}>of Customers say they have a better<br />brand exprience</p>
                            </>
                            <>
                                <h1 style={{ marginTop: "20px" }}>92%</h1>
                                <p style={{ marginLeft: "100px", marginTop: "-52px", fontSize: "16px" }}>of customers say they gother more data<br /> more easily</p>
                            </>
                            <>
                                <h1 style={{ marginTop: "20px" }}>85%</h1>
                                <p style={{ marginLeft: "100px", marginTop: "-52px", fontSize: "16px" }}>of customers say they removal deeper<br /> inights from data</p>
                            </>
                        </div>
                        </>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='footer1'>
                <Row>
                    <Col sm={3} className='fb'>
                        <img src={LogoWhite} alt="..." />
                        <p style={{ marginTop: "20px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Col>
                    <Col sm={3} className='lastsection'>
                        <h4>Quick Links</h4>
                        <p>Home<br />Product<br />Creators<br />Response<br />Blog<br />Contact</p>
                    </Col>
                    <Col sm={3} className='company'>
                        <h4>Company</h4>
                        <p>About<br />FAQs<br />Terms & Conditions<br />Privacy Policy</p>
                    </Col>
                    <Col sm={3} className='contact'>
                        <h4 style={{ marginLeft: "-20px" }}>contact Us</h4>
                        <p style={{ marginLeft: "-25px" }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00cf86" class="bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                        </svg>+91 8078909119</p>
                        <p style={{ marginLeft: "-25px" }}> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="#00cf86" class="bi bi-briefcase" viewBox="0 0 16 16">
                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                        </svg>support@easyform.com</p>
                        <p style={{ marginLeft: "-25px" }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00cf86" class="bi bi-geo-alt" viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                        </svg>B-70, First Floor, Sector-2,Noida,Gautsm Buddha Nagar,UP-201301</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='footer2'>
                <Row>
                    <Col sm>
                        <p style={{ marginLeft: "75px" }}>Copyright @ 2023 Easyform I Product of Edueify</p>
                    </Col>
                    <Col sm className='endimg'>
                        <img src={facebook} alt="./" style={{ marginRight: "8px" }} />
                        <img src={Vector} alt="./" style={{ marginRight: "8px" }} />
                        <img src={linkedin} alt="./" style={{ marginRight: "8px" }} />
                        <img src={youtube} alt="/." style={{ marginRight: "8px" }} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;

