import React, { useContext, useEffect, useState } from "react";
import { AuthStore } from "../store/AuthStore";
import { useNavigate } from "react-router";
import {ToastContainer,Bounce} from "react-toastify"
import { OrderStore } from "../store/OrderStore";
const UpdateOrderStatus = () => {
  const {getUser}=useContext(AuthStore)
  const {handleOrderStatusUpdate}=useContext(OrderStore)
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
    <div className="flex flex-col min-h-screen bg-gray-50 p-6 justify-center items-center">
      <h2 className="text-2xl font-extrabold text-gray-800 text-center mb-6">
        Update Order Status
      </h2>
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
      <form className="bg-white p-6 rounded-lg shadow-lg w-1/2 mx-auto" onSubmit={handleOrderStatusUpdate}>
        <div className="mb-4">
          <label htmlFor="orderId" className="block text-sm font-medium text-gray-700">
            Order ID
          </label>
          <input
            type="text"
            id="orderId"
            name="orderId"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="orderStatus" className="block text-sm font-medium text-gray-700">
            Order Status
          </label>
          <select
            id="orderStatus"
            name="orderStatus"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="PLACED">PLACED</option>
            <option value="SHIPPED">SHIPPED</option>
            <option value="OUT OF DELIVERY">OUT OF DELIVERY</option>
            <option value="DELIVERIED">DELIVERIED</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Update Status
        </button>
      </form>
    </div>
  );
};

export default UpdateOrderStatus;
