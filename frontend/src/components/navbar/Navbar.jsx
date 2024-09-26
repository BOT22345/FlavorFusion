import "./Navbar.css"
import {assets} from "../../assets/assets.js"

export const Navbar = () => {
  return (
    <div className="navbar">
        <img className="logo" src={assets.logo}></img>
        <ul className="navbar-menu">
          <li>Home</li>
          <li>Menu</li>
          <li>Mobile-App</li>
          <li>Contact Us</li>
        </ul>
    </div>
  )
}
