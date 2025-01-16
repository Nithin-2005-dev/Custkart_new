import { createContext, useContext, useState } from "react";
import { AuthStore } from "./AuthStore";
import axios from "axios";

export const OrderStore=createContext({});
export const OrderStoreProvider=({children})=>{
    const {currentUser}=useContext(AuthStore);
    const [orders,setOrders]=useState([]);
    const getOrders=async()=>{
        try{
            const response=await axios.get(`${import.meta.env.VITE_HOST}/api/order/getOrders/${currentUser.id}`);
            setOrders(response.data.orders) 
        }catch(err){
            console.log(err);
        }
    }
    return <OrderStore.Provider value={{orders,getOrders}}>
        {children}
    </OrderStore.Provider>
}