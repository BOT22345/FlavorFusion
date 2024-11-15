import "./Sidebar.css";
import {assets} from "../../assets/assets.js";
import {NavLink} from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <img src={assets.coloredPlus}></img>
          <p>Add Items</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          <img src={assets.basketIcon}></img>
          <p>List Items</p>
        </NavLink>
        <NavLink to="/orders" className="sidebar-option">
          <img src={assets.basketIcon}></img>
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar