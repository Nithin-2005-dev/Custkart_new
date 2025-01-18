import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import { AuthStoreProvider } from './store/AuthStore'
import Login from './pages/Login'
import Orders from './pages/Orders'
import { OrderStoreProvider } from './store/OrderStore'
import PastOrders from './pages/PastOrders'
import PendingdOrders from './pages/PendingOrders'
import CancelledOrders from './pages/CancelledOrders'
import UpdateOrderStatus from './pages/UpdateOrderStatus'
const App = () => {
  return (
    <BrowserRouter>
    <AuthStoreProvider>
    <OrderStoreProvider>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/orders' element={<Orders/>}></Route>
      <Route path='/pastOrders' element={<PastOrders/>}></Route>
      <Route path='/pendingOrders' element={<PendingdOrders/>}></Route>
      <Route path='/cancelledOrders' element={<CancelledOrders/>}></Route>
      <Route path='/updateOrderStatus' element={<UpdateOrderStatus/>}></Route>
      </Routes>
      </OrderStoreProvider>
    </AuthStoreProvider>
    </BrowserRouter>
  )
}

export default App
