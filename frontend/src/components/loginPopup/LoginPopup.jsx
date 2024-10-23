import { useState } from "react";
import "./LoginPopup.css";
import {assets} from "../../assets/assets.js";
const LoginPopup = ({setShowLogin}) => {
  const [currentState,setCurrentState]=useState("Sign-Up");
  return (
    <div className="login-popup">
        <form className="login-popup-container">
          <div className="login-popup-title">
            <h2>{currentState}</h2>
          </div>
            <img className="cross-icon" onClick={()=>{setShowLogin(false)}} src={assets.crossImage_icon}></img>
          <div className="login-popup-inputs">
            {currentState==="Sign-Up"?
              <input type="text" placeholder="Your name" required></input>
              :
              <></>
            }
            <input type="email" placeholder="Your email" required></input>
            <input type="password" placeholder="Your password" required></input>
          </div>
          <button>{currentState==="Sign-Up"?"Create Account":"Login"}</button>
          {
            currentState==="Login"?
            <p>Create a new account? <span onClick={()=>{setCurrentState("Sign-Up")}}>Click here</span></p>
            :
            <p>Already have an account? <span onClick={()=>{setCurrentState("Login")}}>Click here</span></p> 

          }
          
        </form>
    </div>
  )
}

export default LoginPopup