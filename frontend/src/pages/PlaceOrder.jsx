import React, { useContext } from 'react'
import Header from '../components/Header'
import PlaceOrderForm from '../components/PlaceOrderForm'
import Footer from '../components/Footer'

const PlaceOrder = () => {
  return (
    <div>
      <Header/>
      <PlaceOrderForm/>
      <Footer/>
    </div>
  )
}

export default PlaceOrder
