import React from 'react'
import Home from './pages/Home/Home'
import Nav from './Component/Nav/Nav'
import Footer from './Component/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Detailed from './pages/Detailed'
import Buy from './Component/Buy'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import StaffDetail from './pages/StaffDetail'

const App = () => {
  return (
    <div>
<Nav/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/detail' element={<Detailed/>}/>
  <Route path='/buy/:id' element={<Buy/>}/>
  <Route path='/staff/:id' element={<StaffDetail/>}/>
  <Route path='/signup' element={<SignUp/>}/>
  <Route path='/login' element={<Login/>}/>
</Routes>
<Footer/>
    </div>
  )
}

export default App
