import React, { useContext, useEffect } from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router'
import { AuthStore } from '../store/AuthStore'
import PreviousOrders from '../components/PreviousOrders'

const Orders = () => {
    const {getUser}=useContext(AuthStore)
    const navigate=useNavigate();
    useEffect(()=>{
        getUser();
     },[])
  return (
    <div>
      <Header/>
      <PreviousOrders/>
    </div>
  )
}

export default Orders
