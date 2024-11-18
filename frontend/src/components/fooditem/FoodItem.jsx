import "./FoodItem.css"
import {assets} from "../../assets/assets.js";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext.jsx";


const FoodItem = ({id,name,price,description,image}) => {
  const {cartItem,addProduct,removeProduct,url}=useContext(StoreContext);
  return (
    <div className="food-item">
        <div className="food-item-image-Container">
            <img src={url+"/images/"+image} className="food-item-image"></img>
        </div>
        <div className="food-item-info">
            <div className="food-item-name">
                <p>{name}</p>
                <img  src={assets.rating_stars}></img>
            </div>
            <div className="food-item-description">{description}</div>
            <div className="food-item-price">Rs {price}</div>
            {!cartItem[id]
              ?<img className="plusSign-container" onClick={()=>{return addProduct(id)}} src={assets.plussign}></img>
              :<div className="food-counter-container">
                <img className="plusSign-container" onClick={()=>{return addProduct(id)}} src={assets.coloredPlus}></img>
                <p>{cartItem[id]}</p>
                <img className="plusSign-container" onClick={()=>{return removeProduct(id)}} src={assets.coloredSub}></img>
              </div>
            }
        </div>
    </div>
  )
}

export default FoodItem