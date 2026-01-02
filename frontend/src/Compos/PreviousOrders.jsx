import React, { useContext, useEffect, useState } from "react";
import { OrderStore } from "../store/OrderStore";
import { AuthStore } from "../store/AuthStore";
import { Bounce, ToastContainer } from "react-toastify";
import OrderCard from "./OrderCard";

const PreviousOrders = () => {
    const [loader,setLoader]=useState(false)
  const { orders, getOrders, handleCancelOrder } = useContext(OrderStore);
  const { currentUser } = useContext(AuthStore);

  useEffect(() => {
    if (currentUser) {
      getOrders();
    }
  }, [currentUser]);
if (!orders) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#000000" size={40} />
      </div>
    );
  }
  return (
    <div className="min-h-screen  p-4">
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
      <h2 className="text-4xl font-extrabold text-white text-center p-4">
        Your Orders
      </h2>

      <div className="flex flex-col-reverse items-center justify-evenly gap-8">
        {orders && orders.length > 0 ? (
          orders.map((order) => (
            <OrderCard order={order} loader={loader} setLoader={setLoader} handleCancelOrder={handleCancelOrder}/>
          ))
        ) : (
          <p className="text-gray-600 text-lg font-medium">
            You have no orders yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default PreviousOrders;
