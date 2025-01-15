import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { Bounce, ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { AuthStoreProvider } from './store/AuthStore'
import VerifyEmail from './pages/verifyEmail'
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
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/verifyEmail' element={<VerifyEmail/>}/>
      </Routes>
      </AuthStoreProvider>
    </Router>
  )
}

export default App
