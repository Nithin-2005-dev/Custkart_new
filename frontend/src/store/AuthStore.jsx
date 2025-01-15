import axios from "axios";
import { createContext } from "react";
import {jwtDecode} from "jwt-decode"
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router";
export const AuthStore=createContext({});
export const AuthStoreProvider=({children})=>{
    const navigate=useNavigate();
    const loginUser=async(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        try{
            const response=await axios.post(`${import.meta.env.VITE_HOST}/api/auth/login`,{email,password});
           const token=(response.data.token);
           document.cookie=`custkart_token=${token}`;
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
            navigate("/login")
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
return <AuthStore.Provider value={{loginUser,registerUser}}>
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
            window.location.href = `${import.meta.env.VITE_CurrentHOST}/login`;
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