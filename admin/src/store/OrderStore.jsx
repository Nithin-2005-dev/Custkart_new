import { createContext, useContext, useState } from "react";
import { AuthStore } from "./AuthStore";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router";

export const OrderStore=createContext({});
export const OrderStoreProvider=({children})=>{
    const {currentUser}=useContext(AuthStore);
    const [orders,setOrders]=useState([]);
    const navigate=useNavigate();
    const getOrders=async()=>{
        try{
            const response=await axios.get(`${import.meta.env.VITE_HOST}/api/order/getOrders/${currentUser.id}`);
            setOrders(response.data.orders) 
        }catch(err){
            console.log(err);
        }
    }
    const handleCancelOrder=async(orderId)=>{
        try{
            const response=await axios.post(`${import.meta.env.VITE_HOST}/api/order/cancelOrder/${orderId}`,{
                userId:currentUser.id
            });
            toast.success("Cancellation request recieved.Wait for conformation mail.!", {
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
        }
    }
    const handleOrderStatusUpdate=async(e)=>{
        e.preventDefault();
        const orderId=e.target.orderId.value;
        const orderStatus=e.target.orderStatus.value;
        try{
            const response=await axios.put(`${import.meta.env.VITE_HOST}/api/order/updateOrderStatus/${orderId}`,{
                userId:currentUser.id,
                orderStatus
            });
            toast.success("Order status updated!", {
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
            e.target.orderId.value="";
        e.target.orderStatus.value="";
        }
    }
    return <OrderStore.Provider value={{orders,getOrders,handleCancelOrder,handleOrderStatusUpdate}}>
        {children}
    </OrderStore.Provider>
}