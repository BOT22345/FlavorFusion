import "./Navbar.css";
import {assets} from "../../assets/assets.js";
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
        <img className="logoImage" src={assets.logoImage}></img>
        <img className="logoText" src={assets.logoText}></img>
        </div>
        <img className="profile" src={assets.adminProfile}></img>
    </div>
  )
}

export default Navbar