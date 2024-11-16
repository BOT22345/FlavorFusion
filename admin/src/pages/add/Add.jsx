import "./Add.css";
import { assets } from "../../assets/assets.js";
import { useState } from "react";
import axios from "axios";
const Add = () => {
  const url="http://localhost:4000";
  const [image,setImage]=useState(false);
  const [data,setData]=useState({
    name:"",
    description:"",
    price:"",
    category:"Appetizers",
  });

  const onChangeHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}));
  }

  const onSubmitHandler=async (event)=>{
    event.preventDefault();
    const formData=new FormData();
    formData.append("name",data.name);
    formData.append("description",data.description);
    formData.append("price",Number(data.price));
    formData.append("category",data.category);
    formData.append("image",image);
    const response=await axios.post(`${url}/api/food/add`,formData);
    if(response.data.success){
      setData({
        name:"",
      description:"",
      price:"",
      category:"Appetizers",
      })
      setImage(false);
      alert("sent successfull");
    }
    else{
      alert("error in sending data");
    } 
  }


  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.uploadImage}></img>
          </label>
          <input onChange={(e)=>{setImage(e.target.files[0])}} type="file" id="image" hidden required></input>
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder="Type here"></input>
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder="Write content here required"></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Catgory</p>
            <select onChange={onChangeHandler} name="category">
              <option value="Appetizers">Appetizers</option>
              <option value="Maincourse">Maincourse</option>
              <option value="Deserts">Deserts</option>
              <option value="Beverages">Beverages</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input onChange={onChangeHandler} value={data.price} type="Number" name="price" placeholder="Rs."></input>
          </div>
        </div>
        <button type="submit" className="add-button">Add</button>
      </form>
    </div>
  )
}

export default Add