import "./FoodItem.css"
import {assets} from "../../assets/assets.js";
import { useState } from "react";


const FoodItem = ({id,name,price,description,image}) => {
  const [itemCount,setItemCount]=useState(0);
  return (
    <div className="food-item">
        <div className="food-item-image-Container">
            <img src={image} className="food-item-image"></img>
        </div>
        <div className="food-item-info">
            <div className="food-item-name">
                <p>{name}</p>
                <img  src={assets.rating_stars}></img>
            </div>
            <div className="food-item-description">{description}</div>
            <div className="food-item-price">Rs {price}</div>
            {!itemCount
              ?<img className="plusSign-container" onClick={()=>{return setItemCount((prev)=>{return prev+1})}} src={assets.plussign}></img>
              :<div className="food-counter-container">
                <img className="plusSign-container" onClick={()=>{return setItemCount((prev)=>{return prev+1})}} src={assets.coloredPlus}></img>
                <p>{itemCount}</p>
                <img className="plusSign-container" onClick={()=>{return setItemCount((prev)=>{return prev-1})}} src={assets.coloredSub}></img>
              </div>
            }
        </div>
    </div>
  )
}

export default FoodItem