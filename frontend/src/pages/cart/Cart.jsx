import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const {food_list,cartItem,removeProduct,getTotalCartAmount}=useContext(StoreContext);

  const navigate=useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br></br>
        <hr></hr>
          {food_list.map((item,index)=>{
            if(cartItem[item._id]>0){
              return (
                <div>

                <div className="cart-items-title cart-items-item">
                  <img src={item.image}></img>
                  <p>{item.name}</p>
                  <p>Rs. {item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>Rs. {item.price*cartItem[item._id]}</p>
                  <p onClick={()=>{removeProduct(item._id)}} className="cross">x</p>
                </div>
                <hr></hr>
                </div>
              )
            }
          })
        }
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr></hr>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr></hr>
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>{navigate("/order")}}>PROCEED TO CHECKOUT</button>
        </div>
        <div>
          <p>If you have a promo code, Enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="promo code"></input>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart