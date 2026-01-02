import React, { useContext, useEffect, useState } from 'react'
import { Bounce, ToastContainer } from 'react-toastify'
import { AuthStore } from '../store/AuthStore';
import { useNavigate } from 'react-router';
import { ClipLoader } from "react-spinners"
import { ShineBorder } from '../components/components/ui/shine-border';
import { InteractiveHoverButton } from "../components/components/ui/interactive-hover-button";
import { MorphingText } from '../components/components/ui/morphing-text';
const FeedbackForm = () => {
  const texts = [
    "We Value Your Feedback",
    "Your Opinion Matters",
    "Help Us Improve",
    "Share Your Experience",
    "Let Your Voice Be Heard",
    "Shape the Future",
    "Every Feedback Counts",
  ];
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
    <div className="min-h-screen flex flex-col items-center justify-center  text-gray-100">


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

<ShineBorder className={"p-0 w-full max-w-md"} color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} borderWidth={1.4}>
      <div className="w-full max-w-md p-8  rounded-lg shadow-lg shadow-slate-500 bg-[#EEEEEE]">
        <div className="text-center">
          <img
            src=".\CustKart_Logo.png"
            alt="Brand Logo"
            className="w-20 mx-auto scale-150"
          />
          <p className="text-slate-500 font-mono font-bold">"Shop smart,Live better"</p>
          <h1 className="text-3xl font-bold mt-2 text-sky-500">Feedback</h1>
          <MorphingText
          style={{ transitionDuration: "9s" }}
  texts={texts}
  className="text-xl md:text-2xl lg:text-3xl font-bold text-yellow-500"
/>
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
              className="w-full px-4 py-2 mt-2 text-gray-900 rounded-md bg-gray-200 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              required
            />
            
          </div>
            {
                loader?<button
            type="submit"
            className="w-full px-10 py-2 font-bold text-white bg-green-600 rounded-md hover:bg-green-700 " disabled
          >
            <ClipLoader color="#f9f8f8" size={20} />
          </button>:<InteractiveHoverButton
            type="submit"
            className="w-full px-10 py-2 font-bold text-white bg-green-600 rounded-md hover:bg-green-700 text-center "
          >
            Send Feedback
          </InteractiveHoverButton>
            }
            
        </form>
      </div>
      </ShineBorder>
    </div>
  )
}

export default FeedbackForm
