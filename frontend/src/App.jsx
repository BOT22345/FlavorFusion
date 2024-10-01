import { Navbar } from "./components/navbar/Navbar"
import {Routes,Route} from "react-router-dom"
import Home from "./pages/home/Home"
import Cart from "./pages/cart/Cart"
import PlaceOrder from "./pages/placeorder/PlaceOrder"


const App = () => {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/placeorder" element={<PlaceOrder/>}></Route>
      </Routes>
    </div>
  )
}

export default App