import "./EasyForm.css";
import EasyLogo from "../../assets/EasyLogo.png";
import Vector1 from "../../assets/Vector1.png";
import Vector2 from "../../assets/Vector2.png";
import manash from "../../assets/manash.png";
import envelope from "../../assets/envelope.png";
import plus from "../../assets/plus.png";
import Form3 from "../../assets/Form3.png";
import Form1 from "../../assets/Form1.png";
import Form2 from "../../assets/Form2.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function EasyForm() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm={6} style={{padding:"15px"}}>
                        <img src={EasyLogo} alt="./" style={{ marginTop: "5px",marginLeft:"60px" }} />
                    </Col>
                    <Col sm={6}>
                        {/* <img src={Vector1} alt="./" className="vector1" /> */}
                        {/* <img src={Vector2} alt="..." className="vector2" /> */}
                        <img src={manash} alt="..." className="manash" />
                    </Col>
                </Row>
            </Container>
            <Container fluid className="header">
                <Row>
                    <Col className="envelop">
                        <img src={envelope} alt="..." style={{ width: "100%" }} />
                    </Col>
                </Row>
                <Row className="newform">
                    <h4 style={{ marginTop: "30px", borderBottom: "1px solid gray" }}>Create a new form</h4>
                    <Col sm={3}>
                        <i class="fa-regular fa-circle-left fa-2xl" style={{ color: "rgb(0 207 134)", marginLeft: "550px", marginTop: "45px" }}></i>
                    </Col>
                    <Col sm={3}>
                        <i class="fa-solid fa-circle-right fa-2xl" style={{ color: "rgb(0 207 134)", marginLeft: "180px", marginTop: "45px" }} ></i>
                    </Col>
                    <Row>
                        <Col sm style={{ marginLeft: "50px" }}>
                            <Card style={{ width: '16rem', height: '14rem', borderRadius: "26px", borderColor: "#00ce96" }}>
                                <img src={plus} alt="..." className="plus" />
                            </Card>
                            <h5 style={{marginLeft:"60px"}}>Create New</h5>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '16rem', height: '14rem', borderRadius: "28px", background: "#80808021" }}>
                                <img src={Form3} alt="..." className="Form" />
                            </Card>
                            <h5 style={{marginLeft:"35px"}}>Contact Information</h5>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '16rem', height: '14rem', borderRadius: "28px", background: "lightgreen" }}>
                                <img src={Form1} alt="..." className="Form" />
                            </Card>
                            <h5 style={{marginLeft:"35px"}}>Travel Booking Form</h5>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '16rem', height: '14rem', borderRadius: "28px", background: "#ed9b708a" }}>
                                <img src={Form2} alt="..." className="Form" />
                            </Card>
                            <h5 style={{marginLeft:"35px"}}>Event Booking Form</h5>
                        </Col>
                        <Row className="recent">
                            <h4 style={{ borderBottom: "1px solid gray", padding: "18px" }}>Recent Forms</h4>
                        </Row>
                        <Row style={{marginTop:"35px"}}>
                            <Col sm style={{ marginLeft: "50px"}}>
                                <Card style={{ width: '16rem', height: '14rem', borderRadius: "28px", borderColor:"gray",background: "#80808021" }}>
                                    <img src={Form3} alt="..." className="Form" />
                                </Card>
                                <h5 style={{marginLeft:"20px"}}  >Contact Information</h5>
                            </Col>
                            <Col sm style={{marginRight:"80px",marginLeft:"-505px"}}>
                        <Card style={{ width: '16rem',height:'14rem',borderRadius:"28px",borderColor:"gray",background:"lightgreen" }}>
                            <img src={Form1} alt="..." className="Form" />
                        </Card>
                        <h5 style={{marginLeft:"25px"}}>Travel Booking Form</h5>
                    </Col>
                        </Row>
                    </Row>
                </Row>
            </Container>
        </>
    )
}
export default EasyForm;