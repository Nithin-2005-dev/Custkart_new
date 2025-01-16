import React, { useContext, useEffect } from "react";
import { OrderStore } from "../store/OrderStore";
import { AuthStore } from "../store/AuthStore";

const PreviousOrders = () => {
  const { orders, getOrders } = useContext(OrderStore);
  const { currentUser } = useContext(AuthStore);

  useEffect(() => {
    if (currentUser) {
      getOrders();
    }
  }, [currentUser]);

  return (
    <>
      <h2 className="text-4xl font-extrabold text-gray-800 text-center p-2 m-2">
        Your Orders
      </h2>
      <div className="flex flex-col items-center justify-evenly gap-8 m-3">
        {orders &&
          orders.map((order) => (
            <div
              key={order._id}
              className="flex max-w-7xl lg:max-w-6xl overflow-hidden bg-white rounded-lg shadow-lg"
            >
              <div className="w-full lg:w-1/3 flex justify-center p-2 " >
                <img
                  src={order.products[0].productId.url}
                  alt="Product"
                  className="w-full h-auto object-contain max-w-xs mx-auto"
                />
              </div>

              <div className="w-full lg:w-2/3 p-4">
                <p className="mt-2 text-sm text-gray-600">
                  <strong>Order Id:</strong> {order._id}
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  <strong>Address:</strong> {order.address}
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  <strong>Product type:</strong> {order.products[0].productId.productType}
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  <strong>Material type:</strong> {order.products[0].productId.materialType}
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  <strong>Quantity:</strong> {order.products[0].quantity}
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  <strong>Institute:</strong> {order.instituteName}
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  <strong>Club:</strong> {order.clubName}
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  <strong>Status:</strong> {order.orderStatus}
                </p>
                <button className="bg-red-500 my-1 px-2 text-white rounded-lg">
                  Cancel order
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default PreviousOrders;
