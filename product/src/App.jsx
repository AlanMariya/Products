import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import DAta from './components/DAta'
import { Route, Routes } from 'react-router-dom'
import Addproducts from './components/Addproducts'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      
      
      <Routes>
        <Route path='/p' element={<DAta/>}></Route>
        <Route path='/a' element={<Addproducts/>}></Route>
      </Routes>
    </>
  )
}

export default App

