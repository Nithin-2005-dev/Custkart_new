import { createContext, useContext, useState } from "react";
import { AuthStore } from "./AuthStore";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router";

export const OrderStore=createContext({});
export const OrderStoreProvider=({children})=>{
    const {currentUser}=useContext(AuthStore);
    const [orders,setOrders]=useState([]);
    const [products,setProducts]=useState([]);
    const [placeOrder,setPlaceOrder]=useState();
    const navigate=useNavigate();
    const getOrders=async()=>{
        try{
            const response=await axios.get(`${import.meta.env.VITE_HOST}/api/order/getOrders/${currentUser.id}`);
            setOrders(response.data.orders) 
        }catch(err){
            console.log(err);
        }
    }
    const getProducts=async()=>{
        try{
            const response=await axios.get(`${import.meta.env.VITE_HOST}/api/product/getProducts/${currentUser.id}`);
            setProducts(response.data.products) 
        }catch(err){
            console.log(err);
        }
    }
    const handlePlaceOrder=async(e)=>{
        e.preventDefault();
        const address=e.target.address.value;
        const quantity=e.target.quantity.value;
        const instituteName=e.target.instituteName.value;
        const clubName=e.target.clubName.value;
        const userNote=e.target.userNote.value;
        try{
            const response=await axios.post(`${import.meta.env.VITE_HOST}/api/order/placeOrder`,{
                userId:currentUser.id,
                products:[{productId:placeOrder._id,quantity:quantity}],
                address,instituteName,clubName,userNote
            });
            toast.success("Order Received.Wait for conformation mail.", {
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
                navigate("/orders")
            },4000);
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
        e.target.address.value="";
        e.target.quantity.value="";
        e.target.instituteName.value="";
        e.target.clubName.value="";
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
    const handleAddProduct=async(e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append("image",e.target.image.files[0]);
        try{
            const response=await axios.post(`${import.meta.env.VITE_HOST}/api/product/addProduct?designedBy=${currentUser.id}`,formData,formData,
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                })
                toast.error("Design added successfully!Please refresh the page.", {
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
                console.log(err);
        }
    }
    return <OrderStore.Provider value={{orders,getOrders,products,getProducts,placeOrder,setPlaceOrder,handlePlaceOrder,handleCancelOrder,handleAddProduct}}>
        {children}
    </OrderStore.Provider>
}