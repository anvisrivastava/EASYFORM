import "./SignUp.css";
import EasyLogo from "../../assets/EasyLogo.png";
import Girl from "../../assets/Girl.png";
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
    const [confirmPassword,setConfirmPassword]=useState("");
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
    const handleConfirmPassword = (e) => {
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
       <Container className='signup'>
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
                        <label className="label2">Name</label>
                            <input
                                onChange={handleName}
                                className="input"
                                value={name}
                                type="text"
                            />
                            <label className="label2">Email</label>
                            <input
                                onChange={handleEmail}
                                className="input"
                                value={email}
                                type="text"
                            />
                            <label className="label3">Password</label>
                            <input
                                onChange={handlePassword}
                                className="input"
                                value={password}
                                type="password"
                            />
                            <label className="label4">ConfirmPassword</label>
                            <input
                                onChange={handleConfirmPassword}
                                className="input"
                                value={confirmPassword}
                                type="password"
                            />
                            <button onClick={handleSubmit} className="Account" type="submit">
                                Create Account
                            </button>
                            <p className="line">Already have an account?<a href="./" style={{color:"lightgreen",margintop:"4px",marginRight:"20px"}}> Log in</a>
                            </p>
                        </form>
                        </div>
            </Col>
            <Col sm={6} style={{ background: "#00cf86", width: "540px", height:"640px" }}>
            <div className="whitebox">
                        <img src={Girl} alt=".." class='Girl'></img>
                    </div>
            </Col>
        </Row>
       </Container>
    );
}




