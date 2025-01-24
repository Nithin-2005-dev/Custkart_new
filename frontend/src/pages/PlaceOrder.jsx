import React, { useContext } from 'react'
import Header from '../Compos/Header'
import PlaceOrderForm from '../Compos/PlaceOrderForm'
import Footer from '../Compos/Footer'

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
