import React from 'react';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import {Routes,Route} from "react-router-dom";
import Add from './pages/add/Add';
import List from "./pages/list/List";
import Orders from "./pages/orders/Order"

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <hr></hr>
      <div className='app-content'>
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/add" element={<Add></Add>}></Route>
          <Route path="/list" element={<List></List>}></Route>
          <Route path="/orders" element={<Orders></Orders>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App