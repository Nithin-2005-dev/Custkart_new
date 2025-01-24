import React, { useContext, useEffect } from 'react'
import Header from '../Compos/Header'
import { useNavigate } from 'react-router'
import { AuthStore } from '../store/AuthStore'
import PreviousOrders from '../Compos/PreviousOrders'
import Footer from '../Compos/Footer'
import { Bounce, ToastContainer } from 'react-toastify'

const Orders = () => {
    const {getUser}=useContext(AuthStore)
    const navigate=useNavigate();
    useEffect(()=>{
        const checkUser=async()=>{
        const response =await getUser();
        if(!response){
            navigate("/login")
        }
        }
        checkUser();
     },[])
  return (
    <div>
      <Header/>
      <PreviousOrders/>
      <Footer/>
    </div>
  )
}

export default Orders
