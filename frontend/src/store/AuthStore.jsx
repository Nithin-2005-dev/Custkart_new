import axios from "axios";
import { createContext, useState } from "react";
import {jwtDecode} from "jwt-decode"
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
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
           const token=(response.data.token);
           document.cookie=`custkart_token=${token}`;
           Cookies.set("custkart_token",token,{expires:365});
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
            setTimeout(()=>{
                navigate("/");
            },3000);
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
    const registerUser=async(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        const phone=e.target.phone.value;
        const userName=e.target.userName.value;
        try{
            const response=await axios.post(`${import.meta.env.VITE_HOST}/api/auth/register`,{email,password,name:userName,phone});
            toast.success("Registration successfull!", {
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
                setTimeout(()=>{
                navigate("/login");
            },3000);
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
            e.target.phone.value="";
            e.target.userName.value="";
        }
    }
    const getUser=async()=>{
        const token=Cookies.get("custkart_token");
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
    const handleLOgOut=()=>{
        Cookies.remove("custkart_token");
        setcurrentUser(null);
    }
    const handleFeedback=async(e)=>{
        e.preventDefault();
        const message=e.target.message.value;
        try{
            const response=await axios.post(`${import.meta.env.VITE_HOST}/api/feedback/send`,{userId:currentUser.id,message});
           toast.success("Feedback recieved successfully", {
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
            e.target.message.value="";
        }
    }
return <AuthStore.Provider value={{loginUser,registerUser,getUser,currentUser,handleLOgOut,handleFeedback}}>
{children}
</AuthStore.Provider>
}
export const sendOtp=async(email)=>{
    try{
       const response= await axios.post(`${import.meta.env.VITE_HOST}/api/auth/sendMail`,{email});
        toast.success("OTP sent successfully!", {
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
        return (response.data.otpId)
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
    }
}
export const verifyEmail=async(otpId,otp)=>{
    try{
        const response= await axios.post(`${import.meta.env.VITE_HOST}/api/auth/verifyMail/${otpId}`,{otp});
        toast.success("Verification successfull!Please login.!", {
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
            setTimeout(()=>{
                window.location.href = `${import.meta.env.VITE_CurrentHOST}/login`;
            },3000);
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
    }
}
export const verifyForgotPasswordEmail=async(otpId,otp,newPassword)=>{
    try{
        const response= await axios.post(`${import.meta.env.VITE_HOST}/api/auth/forgotPasswordMail/${otpId}`,{otp,newPassword});
        toast.success("Password changed successfully!Please login.!", {
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
            setTimeout(()=>{
                window.location.href = `${import.meta.env.VITE_CurrentHOST}/login`;
            },3000);
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
    }
}
export const sendForgotPasswordOtp=async(email)=>{
    try{
       const response= await axios.post(`${import.meta.env.VITE_HOST}/api/auth/sendForgotPasswordMail`,{email});
        toast.success("OTP sent successfully!", {
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
        return (response.data.otpId)
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
    }
}