import React from 'react'
import Home from './pages/Home/Home'
import Nav from './Component/Nav/Nav'
import Footer from './Component/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Detailed from './pages/Detailed'
import Buy from './Component/Buy'

const App = () => {
  return (
    <div>
<Nav/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/detail' element={<Detailed/>}/>
  <Route path='/buy:id' element={<Buy/>}/>
</Routes>
<Footer/>
    </div>
  )
}

export default App
