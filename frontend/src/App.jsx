import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { Bounce, ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { AuthStoreProvider } from './store/AuthStore'
import VerifyEmail from './pages/verifyEmail'
import About from './pages/About'
import Orders from './pages/Orders'
import { OrderStoreProvider } from './store/OrderStore'
import Products from './pages/Products'
import PlaceOrder from './pages/PlaceOrder'
import Feedback from './pages/Feedback'
const App = () => {
  return (
    <Router>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce}
/>
<AuthStoreProvider>
<OrderStoreProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/verifyEmail' element={<VerifyEmail/>}/>
        <Route path='/about' element={<About/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/placeOrder' element={<PlaceOrder/>}/>
      <Route path='/feedback' element={<Feedback/>}/>
      </Routes>
      </OrderStoreProvider>
      </AuthStoreProvider>
    </Router>
  )
}

export default App
