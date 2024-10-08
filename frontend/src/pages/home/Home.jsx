import { useState } from "react"
import ExploreMenu from "../../components/exploremenu/ExploreMenu"
import Header from "../../components/header/Header"
import "./Home.css"
import FoodDisplay from "../../components/fooddisplay/FoodDisplay"

const Home = () => {
  const [category,setCategory]=useState("All");
  return (
    <div>
      <Header></Header>
      <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
      <FoodDisplay category={category}></FoodDisplay>
    </div>
  )
}

export default Home