import React, { useRef, useState } from 'react'
import { Link } from 'react-router'
import { Bounce, ToastContainer } from 'react-toastify'
import { sendOtp, verifyEmail } from '../store/AuthStore'
import { ClipLoader } from 'react-spinners'
import { RetroGrid } from '../components/components/ui/retro-grid'

const VerifyEmail = () => {
      const [loader,setLoader]=useState(false);
      const [otpLoader,setOtpLoader]=useState(false);
    const emailRef=useRef();
    const otpRef=useRef();
    const [otp,setOtp]=useState();
  return (
    <div className="min-h-screen flex items-center justify-center  text-gray-100">
    <RetroGrid lightLineColor="black" opacity={1} cellSize={80}/>
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
      <div className="w-full max-w-md p-8  rounded-lg shadow-lg shadow-slate-500 bg-gray-300 z-50 bg-opacity-75">
        <div className="text-center">
          <img
            src=".\CustKart_Logo.png"
            alt="Brand Logo"
            className="w-20 mx-auto scale-150"
          />
          <p className="text-slate-500 font-mono font-bold">"Shop smart,Live better"</p>
          <h1 className="text-3xl font-bold mt-2 text-sky-500">Verify Email</h1>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-800">
              Email Address
            </label>

            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 text-gray-900 rounded-md bg-gray-100 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              required ref={emailRef}
            />
            {
              otpLoader ?<p className='bg-red-600 mt-2 p-1 px-2 rounded-lg hover:bg-red-500 inline-block cursor-pointer' disabled
            >
            <ClipLoader color="#f9f8f8" size={20} />
            </p>:<p className='bg-red-600 mt-2 p-1 px-2 rounded-lg hover:bg-red-500 inline-block cursor-pointer' onClick={async()=>{
              setOtpLoader(true);
                const response=await sendOtp(emailRef.current.value)
                console.log(response);
                setOtp(response);
              setOtpLoader(false);
            }}>{otp?"Resend OTP":"Send OTP"}</p>
            }
          </div>
        {otp && <div>
            <label htmlFor="otp" className="block text-sm font-medium text-slate-800">
              OTP
            </label>
            <input
              type="number"
              id="otp"
              placeholder="Enter 4 digit otp"
              className="w-full px-4 py-2 mt-2 text-gray-900 rounded-md bg-gray-100 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              required ref={otpRef}
            />
          </div>}
          {
            loader?<button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-green-600 rounded-md hover:bg-green-700" disabled
          >
            <ClipLoader color="#f9f8f8" size={20} />
          </button>:<button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-green-600 rounded-md hover:bg-green-700" onClick={async ()=>{
              setLoader(true);
               await verifyEmail(otp,otpRef.current.value)
               setLoader(false);
            }} 
          >
            Verify
          </button>
          }
        </div>
        <p className="text-sm text-center text-black">
          Don't have an account?{" "}
          <Link to={"/register"} className="text-blue-400 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default VerifyEmail
