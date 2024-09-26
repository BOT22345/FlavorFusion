import "./Navbar.css"
import {assets} from "../../assets/assets.js"

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logoContainer">
          <img className="logo" src={assets.logo}></img>
          <img src={assets.logoText} className="logo-text"></img>
        </div>
        <ul className="navbar-menu">
          <li>Home</li>
          <li>Menu</li>
          <li>Mobile-App</li>
          <li>Contact Us</li>
        </ul>
        <div className="navbar-right">
          <img src={assets.searchIcon} className="assets-search-icon"></img>
          <div className="navbar-search-icon">
            <img src={assets.basketIcon}className="basketIcon"></img>
            <div className="dot"></div>
          </div>
          <button>sign in </button>
        </div>
    </div>

  )
}
