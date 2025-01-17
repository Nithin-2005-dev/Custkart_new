import React, { useContext, useEffect } from "react";
import { OrderStore } from "../store/OrderStore";
import { AuthStore } from "../store/AuthStore";
import { Bounce, ToastContainer } from "react-toastify";

const PreviousOrders = () => {
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

      <div className="flex flex-col items-center justify-evenly gap-8">
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
                    <strong>Product type:</strong> {order.products[0].productId.productType}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Material type:</strong> {order.products[0].productId.materialType}
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
                  {(order.orderStatus === "CANCELLED" ||
                    order.orderStatus === "CANCELLATION PENDING" ||
                    order.orderStatus === "DELIVERIED" ||
                    order.orderStatus === "OUT OF DELIVERY") ? (
                    <button className="bg-sky-500 px-4 py-2 text-white rounded-lg lowercase cursor-default">
                      {order.orderStatus}
                    </button>
                  ) : (
                    <button
                      className="bg-red-500 px-4 py-2 text-white rounded-lg"
                      onClick={() => handleCancelOrder(order._id)}
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
