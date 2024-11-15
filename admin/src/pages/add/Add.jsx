import "./Add.css";
import { assets } from "../../assets/assets.js";
const Add = () => {
  return (
    <div className="add">
      <form className="flex-col">
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={assets.uploadImage}></img>
          </label>
          <input type="file" id="image" hidden required></input>
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input type="text" name="name" placeholder="Type here"></input>
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea name="description" rows="6" placeholder="Write content here required"></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Catgory</p>
            <select name="category">
              <option value="Appetizers">Appetizers</option>
              <option value="Maincourse">Maincourse</option>
              <option value="Deserts">Deserts</option>
              <option value="Beverages">Beverages</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input type="Number" name="price" placeholder="Rs."></input>
          </div>
        </div>
        <button type="submit" className="add-button">Add</button>
      </form>
    </div>
  )
}

export default Add