import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from 'react-router-dom'

import Orders from './Orders/Orders'
import Abouts from './Abouts/Abouts'
import Contacts from './Contact us/Contacts'


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Order' element={<Orders/>}/>
      <Route path='/About' element={<Abouts/>}/>
      <Route path='/Contact' element={<Contacts/>}/>
    </Routes>
    </>
  )
}

export default App

