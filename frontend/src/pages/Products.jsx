import React, { useContext, useEffect } from 'react'
import Header from '../Compos/Header'
import PreviousProducts from '../Compos/PreviousProducts'
import { AuthStore } from '../store/AuthStore'
import { useNavigate } from 'react-router'
import Footer from '../Compos/Footer'
import DesignForm from '../Compos/DesignForm'

const Products = () => {
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
      <div className='min-h-screen flex flex-col justify-evenly'>
      <DesignForm/>
      <PreviousProducts/>
      </div>
      <Footer/>
    </div>
  )
}

export default Products
