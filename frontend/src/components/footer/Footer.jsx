import { assets } from "../../assets/assets"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={assets.logo}></img>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo soluta at tempora excepturi dignissimos quae architecto ipsam! Illum, nostrum quibusdam.</p>
          <div className="socia-media-icons">
            <img src={assets.facebook_icon}></img>
            <img src={assets.email_icon}></img>
            <img src={assets.linkedin_icon}></img>
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