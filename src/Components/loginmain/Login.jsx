import React, { useState } from "react";
import './Login.css';
import Image from "../images/bgm.png";
import Image2 from "../images/bgm.png";

function Login (){

    // state for firstName
    const [getFirstName, setFirstName] = useState('');
    const firstNameValue = (e) => setFirstName(e.target.value);

    // state for lastName
    const [getLastName, setLastName] = useState('');
    const LastNameValue = (e) => setLastName(e.target.value);

    // state for email
    const [getEmail, setEmail] = useState('');
    const Email = (e) => setEmail(e.target.value);

    // state for password
    const [getPassword, setPassword] = useState('');
    const Password = (e) => setPassword(e.target.value);

    // button click to submit
    const ButtonClick = () => {

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');

    } 
 return(
    <div className="body">
    <main>
        <div className="container">
        <img src={Image} alt="" className="bgm"/>
        <img src={Image2} alt="" className="bgd"/>
            <div className="header_paragraph">
                <h4>Learn to code by watching others</h4>
                <p>See how experience developers solve problems in real-time.
                    Watching sscripted tutorials is great, but understanding 
                    how developers think is invaluable. 
                </p>
            </div>
            <div className="login_intro_container">
                <div className="intro">
                    <p className="try"><span>Try it free 7 days</span> then $20/mo. thereafter</p>
                </div>
                <form className="login">
                    <input value={getFirstName} onChange={firstNameValue} type="text" name="firstName" placeholder="First Name" required/>
                    <input value={getLastName} onChange={LastNameValue} type="text" name="lastName" placeholder="Last Name" required/>
                    <input value={getEmail} onChange = {Email} type="Email" name="email" placeholder="Email Address" required/>
                    <input value={getPassword} onChange={Password} type="password" name="password" placeholder="Password" required/>
                    <button onClick={ButtonClick} type="submit">CLAIM YOUR FREE TRIAL</button>
                    <p className="terms">By clicking the button you are agreeing our <span className="red">Terms and Services</span></p>
                </form>
            </div>
        </div> 
    </main>  
    </div>
 )
}
export default Login;