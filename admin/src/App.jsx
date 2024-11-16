import React from 'react';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import {Routes,Route} from "react-router-dom";
import Add from './pages/add/Add';
import List from "./pages/list/List";
import Orders from "./pages/orders/Order"

const App = () => {
  const url="http://localhost:4000";
  return (
    <div>
      <Navbar></Navbar>
      <hr></hr>
      <div className='app-content'>
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/add" element={<Add url={url}></Add>}></Route>
          <Route path="/list" element={<List url={url}></List>}></Route>
          <Route path="/orders" element={<Orders url={url}></Orders>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App