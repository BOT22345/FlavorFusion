import "./FoodItem.css"
import {assets} from "../../assets/assets.js";


const FoodItem = ({id,name,price,description,image}) => {
  return (
    <div className="food-item">
        <div className="food-item-image-Container">
            <img src={image} className="food-item-image"></img>
        </div>
        <div className="food-item-info">
            <div className="food-item-name">
                <p>{name}</p>
                <img src={assets.rating_stars}></img>
            </div>
            <div className="food-item-price">{price}</div>
            <div className="food-item-description">{description}</div>
        </div>
    </div>
  )
}

export default FoodItem