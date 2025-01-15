import React, { useContext } from 'react'
import { Link } from 'react-router'
import { AuthStore } from '../store/AuthStore'
import { Bounce, ToastContainer } from 'react-toastify';

const Register = () => {
  const {registerUser}=useContext(AuthStore);
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
          <h1 className="text-3xl font-bold mt-2 text-sky-500">Register</h1>
        </div>
        <form className="space-y-6" onSubmit={registerUser}>
        <div>
            <label htmlFor="userName" className="block text-sm font-medium text-slate-800">
              User Name
            </label>
            <input
              type="text"
              id="userName"
              placeholder="Enter your name"
              className="w-full px-4 py-2 mt-2 text-gray-900 rounded-md bg-gray-100 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-800">
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 mt-2 text-gray-900 rounded-md bg-gray-100 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-800">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 text-gray-900 rounded-md bg-gray-100 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-800">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 text-gray-900 rounded-md bg-gray-100 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              required
            />
          </div>

         

          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-green-600 rounded-md hover:bg-green-700 "
          >
            Register
          </button>
        </form>
        <p className="text-sm text-center text-black">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
