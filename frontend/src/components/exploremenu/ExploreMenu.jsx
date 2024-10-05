import "./ExploreMenu.css"
import { menu_item } from "../../assets/assets.js"

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
        <h1>Explore our menu</h1>
        <p className="explore-menu-text">Discover our menu divided into four major sections: delicious appetizers, hearty main courses, tempting desserts, and refreshing beverages, ensuring a delightful dining experience for every palate.</p>
        <div className="explore-menu-list">

        {menu_item.map((item,index)=>{
            return (
                
            <div onClick={()=>{setCategory(prev=>prev===item.itemName ? "All" : item.itemName)}} key={index} className="explore-menu-list-items">  
                <img className="explore-menu-images" src={item.itemImage}></img>
                <p>{item.itemName}</p>
            
            </div>
        )
        })}
    </div>
    <hr></hr>
    </div>
  )
}

export default ExploreMenu