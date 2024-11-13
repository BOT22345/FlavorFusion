import "./PlaceOrder.css";

const PlaceOrder = () => {
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name"></input>
          <input type="text" placeholder="Last Name"></input>
        </div>
        <input type="email" placeholder="Email Addresss"></input>
        <input type="text" placeholder="Street"></input>
        <div className="multi-fields">
          <input type="text" placeholder="City"></input>
          <input type="text" placeholder="State"></input>
        </div>
        <input type="text" placeholder="Phone No."></input>
      </div>
      <div className="place-order-right">

      </div>
    </form>
  )
}

export default PlaceOrder