import { assets } from "../../assets/assets"
import "./Footer.css"
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-left">
        <div className="logoContainer">
          <img className="logo" src={assets.logo}></img>
          <img src={assets.logoText} className="logo-text"></img>
        </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo soluta at tempora excepturi dignissimos quae architecto ipsam! Illum, nostrum quibusdam.</p>
          <div className="social-media-icons">
            <img className="social-media-icon" src={assets.facebook_icon}></img>
            <img className="social-media-icon" src={assets.email_icon}></img>
            <img className="social-media-icon" src={assets.linkedin_icon}></img>
          </div>
        </div>
        <div className="footer-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>123456789</li>
            <li>abc@gamil.com</li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <p className="footer-copyright">Copyright 2024 @ FlavouFusion.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer