import axios from "axios";
import { createContext } from "react";
import Cookies from "js-cookie"
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
import { useNavigate } from "react-router";
import {jwtDecode} from "jwt-decode"
import { useState } from "react";
export const AuthStore=createContext({});
export const AuthStoreProvider=({children})=>{
        const [currentUser,setcurrentUser]=useState();
    const navigate=useNavigate();
    const loginUser=async(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        try{
            const response=await axios.post(`${import.meta.env.VITE_HOST}/api/auth/login`,{email,password});
            if(!response.data.isAdmin){
                toast.warn("Admin credentials required!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce
            });
            return;
            }
           const token=(response.data.token);
           Cookies.set("custkart_token_admin",token,{expires:365});
           const checkToken=
           toast.success("Login Successfull!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce
            });
            navigate("/");
        }catch(err){
            if(err.response){
                toast.error(err.response?.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce
                    });
                }else{
                    toast.error(err.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        transition: Bounce
                        });
                }

        }finally{
            e.target.email.value="";
            e.target.password.value="";
        }
    }
    const getUser=async()=>{
        const token=Cookies.get("custkart_token_admin");
        if(!token){
            return false;
        }
        const deCodedToken=jwtDecode(token);
        try{
            const user=await axios.get(`${import.meta.env.VITE_HOST}/api/user/getUser/${deCodedToken.id}`);
            setcurrentUser(user.data.user);
            return true;
        }catch(err){
            return false;
        }
    }
    return <AuthStore.Provider value={{loginUser,getUser,currentUser}}>
        {children}
    </AuthStore.Provider>
}