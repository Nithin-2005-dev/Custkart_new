import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { AuthStore } from "../store/AuthStore";

const Home = () => {
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
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        Welcome to <span className="text-blue-500">CustKart</span> Admin Page
      </h1>
      <div className="flex flex-col max-w-sm text-center gap-4 w-full">
        <Link
          to={"/orders"}
          className="bg-blue-500 text-white py-3 px-6 rounded-lg font-bold shadow-lg hover:bg-blue-600 transition duration-300"
        >
          View Orders
        </Link>
        <Link
          to={"/updateOrderStatus"}
          className="bg-green-500 text-white py-3 px-6 rounded-lg font-bold shadow-lg hover:bg-green-600 transition duration-300"
        >
          Update Order Status
        </Link>
      </div>
    </div>
  );
};

export default Home;
