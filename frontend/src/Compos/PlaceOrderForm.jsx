import React, { useContext, useEffect, useState } from 'react'
import { Bounce, ToastContainer } from 'react-toastify'
import confetti from "canvas-confetti";
import { OrderStore } from '../store/OrderStore'
import { useNavigate } from 'react-router'
import { ClipLoader } from 'react-spinners'
const PlaceOrderForm = () => {
  const [loader,setLoader]=useState(false)
  const {placeOrder,handlePlaceOrder}=useContext(OrderStore);
  const navigate=useNavigate();
  useEffect(()=>{
    if(!placeOrder){
      navigate("/products")
  }
  },[placeOrder])
  const handleClick = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];
 
    const frame = () => {
      if (Date.now() > end) return;
 
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });
 
      requestAnimationFrame(frame);
    };
 
    frame();
  };
  return (
    <div className="min-h-screen flex items-center justify-center  text-gray-100 my-5">
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
      <div className="w-full max-w-md p-8  rounded-lg shadow-lg shadow-slate-500 bg-gray-300">
        <div className="text-center">
          <img
            src=".\CustKart_Logo.png"
            alt="Brand Logo"
            className="w-20 mx-auto scale-150"
          />
          <p className="text-slate-500 font-mono font-bold">"Shop smart,Live better"</p>
          <h1 className="text-3xl font-bold mt-2 text-sky-500">Place Order</h1>
        </div>

        <form className="space-y-6" onSubmit={async(e)=>{
            setLoader(true)
          const res= await handlePlaceOrder(e);
          if(res){
            handleClick();
          }
            setLoader(false);
            }}>
        <p className='text-black my-2'><strong>Product Id:</strong>{placeOrder?._id}</p>
        <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-slate-800">
              Quantity
            </label>
            <input
              type="number"
              id='quantity'
              placeholder="Enter quantity"
              className="w-full px-4 py-2 mt-2 text-gray-900 rounded-md bg-gray-100 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-slate-800">
              Address
            </label>
            <input
              type="text"
              id='address'
              placeholder="Enter your full address"
              className="w-full px-4 py-2 mt-2 text-gray-900 rounded-md bg-gray-100 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="instituteName" className="block text-sm font-medium text-slate-800">
              Institute Name
            </label>
            <input
              type="text"
              id='instituteName'
              placeholder="Enter your institute name"
              className="w-full px-4 py-2 mt-2 text-gray-900 rounded-md bg-gray-100 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="clubName" className="block text-sm font-medium text-slate-800">
              Club Name
            </label>
            <input
              type="text"
              id='clubName'
              placeholder="Enter your club name"
              className="w-full px-4 py-2 mt-2 text-gray-900 rounded-md bg-gray-100 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="userNote" className="block text-sm font-medium text-slate-800">
              Instructions (optional)
            </label>
            <input
              type="text"
              id='userNote'
              placeholder="Enter instructions if Any"
              className="w-full px-4 py-2 mt-2 text-gray-900 rounded-md bg-gray-100 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
          </div>
          {
                loader?<button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-green-600 rounded-md hover:bg-green-700 " disabled
          >
            <ClipLoader color="#f9f8f8" size={20} />
          </button>:<button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-green-600 rounded-md hover:bg-green-700 "
          >
            Place Order
          </button>
            }
        </form>
      </div>
    </div>
  )
}

export default PlaceOrderForm
