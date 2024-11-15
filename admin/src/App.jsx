import React from 'react'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <hr></hr>
      <div className='app-content'>
        <Sidebar></Sidebar>
      </div>
    </div>
  )
}

export default App