import React, { useContext, useEffect, useState } from "react";
import { OrderStore } from "../store/OrderStore";
import { AuthStore } from "../store/AuthStore";
import { Bounce, ToastContainer } from "react-toastify";
import { ClipLoader } from "react-spinners";

const PreviousOrders = () => {
    const [loader,setLoader]=useState(false)
  const { orders, getOrders, handleCancelOrder } = useContext(OrderStore);
  const { currentUser } = useContext(AuthStore);

  useEffect(() => {
    if (currentUser) {
      getOrders();
    }
  }, [currentUser]);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
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
      <h2 className="text-4xl font-extrabold text-gray-800 text-center p-4">
        Your Orders
      </h2>

      <div className="flex flex-col-reverse items-center justify-evenly gap-8">
        {orders && orders.length > 0 ? (
          orders.map((order) => (
            <div
              key={order._id}
              className="flex flex-col lg:flex-row max-w-4xl w-full bg-white rounded-lg shadow-lg"
            >
              <div className="w-full lg:w-1/3 flex justify-center items-center p-4">
                <img
                  src={order.products[0].productId.url}
                  alt="Product"
                  className="w-full max-h-48 object-contain"
                />
              </div>

              <div className="w-full lg:w-2/3 p-4 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-600">
                    <strong>Order Id:</strong> {order._id}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Address:</strong> {order.address}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Quantity:</strong> {order.products[0].quantity}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Institute:</strong> {order.instituteName}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Club:</strong> {order.clubName}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Status:</strong> {order.orderStatus}
                  </p>
                </div>

                <div className="mt-4">
                  {!(order.orderStatus === "PENDING") ? (
                    <button className={`${!(order.orderStatus === "CANCELLED") &&'bg-sky-500 '} bg-red-500 px-4 py-2 text-white rounded-lg lowercase cursor-default`}>
                      {order.orderStatus}
                    </button>
                  ) : (
                    loader?
                    <button
                      className="bg-red-500 px-4 py-2 text-white rounded-lg"
                      disabled
                    >
            <ClipLoader color="#f9f8f8" size={20} />
                    </button>:<button
                      className="bg-red-500 px-4 py-2 text-white rounded-lg"
                      onClick={async() => {
                      setLoader(true)
                      await handleCancelOrder(order._id)
                      setLoader(false)
                      }}
                    >
                      Cancel order
                    </button>
                  )}
                </div>
              </div>
            </div>
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
