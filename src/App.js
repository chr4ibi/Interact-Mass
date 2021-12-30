import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage'
import Galerypage from './pages/Galerypage'
import Contactpage from './pages/Contactpage'
import Shoppage from './pages/Shoppage'

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Homepage />} />
      <Route exact path='/about' element={<Aboutpage />} />
      <Route exact path='/galery' element={<Galerypage />} />
      <Route exact path='/contact' element={<Contactpage />} />
      <Route exact path='/shop' element={<Shoppage />} />
    </Routes>
  )
}

export default App

