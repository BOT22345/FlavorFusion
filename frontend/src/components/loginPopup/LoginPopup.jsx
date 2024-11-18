import { useContext, useState } from "react";
import "./LoginPopup.css";
import {assets} from "../../assets/assets.js";
import { StoreContext } from "../../context/StoreContext.jsx";
import axios from "axios";
const LoginPopup = ({setShowLogin}) => {

  const {url,setToken}=useContext(StoreContext);

  const [currentState,setCurrentState]=useState("Sign-Up");
  const [data,setData]=useState({
    name:"",
    email:"",
    password:""
  });

  const onChangeHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}));
  }

  const onLogin=async (event)=>{
    event.preventDefault();
    let newUrl=url;
    if(currentState==="Login"){
      newUrl+="/api/user/login";
    }
    else{
      newUrl +="/api/user/register";
    }

    const response= await axios.post(newUrl,data);

    if(response.data.success){
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token);
    }
    else{
      alert(response.data.message);
    }
  }


  return (
    <div className="login-popup">
        <form onSubmit={onLogin} className="login-popup-container">
          <div className="login-popup-title">
            <h2>{currentState}</h2>
          </div>
            <img className="cross-icon" onClick={()=>{setShowLogin(false)}} src={assets.crossImage_icon}></img>
          <div className="login-popup-inputs">
            {currentState==="Sign-Up"?
              <input type="text" name="name" onChange={onChangeHandler} value={data.name} placeholder="Your name" required></input>
              :
              <></>
            }
            <input type="email" name="email" onChange={onChangeHandler} value={data.email} placeholder="Your email" required></input>
            <input type="password" name="password" onChange={onChangeHandler} value={data.password} placeholder="Your password" required></input>
          </div>
          <button type="submit" className="login-button">{currentState==="Sign-Up"?"Sign-Up":"Login"}</button>
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