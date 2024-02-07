import "./SignIn.css";
import EasyLogo from "../../assets/EasyLogo.png";
import Frame1 from "../../assets/Frame1.png";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom"
export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || email === "" || password === "") {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? "" : "none",
                }}
            >
                <h1>User {name} successfully registered!!</h1>
            </div>
        );
    };
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? "" : "none",
                }}
            >
                <h1>Please enter all the fields</h1>
            </div>
        );
    };
    return (
       <Container>
        <Row>
            <Col sm={6}>
            <img src={EasyLogo} alt=".." className="easylogo"></img>
            <div className="form">                        
                            <span className="user">Welcome</span>
                            <p>Login to your EasyForm</p>
                           <div className="messages">
                            {errorMessage()}
                            {successMessage()}
                        </div>
                        <form>
                            <label className="label">Email</label>
                            <input
                                onChange={handleEmail}
                                className="email"
                                value={email}
                                type="text"
                            />
                            <label className="label1">Password</label>
                            <input
                                onChange={handlePassword}
                                className="email"
                                value={password}
                                type="password"
                            />
                            <button onClick={handleSubmit} className="button" type="submit">
                                Login
                            </button>
                            <div className="forgotpassword"><Link to="./" style={{color:"gray"}}>Forgot Password?</Link></div>
                           <>
                           <div className="box">
                            <input type="checkbox"></input>
                           I understand and agree with the <a href="./" style={{color:"lightgreen"}}>Terms & Conditions </a>and
                            <a href="./" style={{color:"lightgreen"}}> Privacy Policy</a></div></>
                            <p style={{marginTop:"20px"}}>Doesn't have on account year?<a href="./SignUp" style={{color:"lightgreen"}}>Sign up</a></p>
                        </form>
                        </div>
            </Col>
            <Col sm={6} style={{ background: "#00cf86", width: "540px", height:"640px" }}>
            <div className="whitebox">
                        <img src={Frame1} alt=".." class='frame'></img>
                    </div>
            </Col>
        </Row>
       </Container>
    );
}




