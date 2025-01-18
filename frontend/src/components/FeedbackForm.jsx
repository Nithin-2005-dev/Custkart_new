import React, { useContext, useEffect, useState } from 'react'
import { Bounce, ToastContainer } from 'react-toastify'
import { AuthStore } from '../store/AuthStore';
import { useNavigate } from 'react-router';
import { ClipLoader } from "react-spinners"
const FeedbackForm = () => {
    const [loader,setLoader]=useState(false)
    const {getUser,handleFeedback}=useContext(AuthStore)
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
    <div className="min-h-screen flex items-center justify-center  text-gray-100">
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
            src="\src\assets\CustKart Logo.png"
            alt="Brand Logo"
            className="w-20 mx-auto scale-150"
          />
          <p className="text-slate-500 font-mono font-bold">"Shop smart,Live better"</p>
          <h1 className="text-3xl font-bold mt-2 text-sky-500">Feedback</h1>
        </div>

        <form className="space-y-6" onSubmit={async(e)=>{
            setLoader(true)
           await handleFeedback(e);
            setLoader(false);
            }}>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-800">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Enter your feedback message"
              className="w-full px-4 py-2 mt-2 text-gray-900 rounded-md bg-gray-100 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              required
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
            Send Feedback
          </button>
            }
        </form>
      </div>
    </div>
  )
}

export default FeedbackForm
