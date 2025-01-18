import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthStore } from "../store/AuthStore";
import { OrderStore } from "../store/OrderStore";
import { ToastContainer, Bounce } from "react-toastify";
import { FaBars } from "react-icons/fa"; 

const Orders = () => {
  const { orders, getOrders, handleCancelOrder } = useContext(OrderStore);
  const { currentUser, getUser } = useContext(AuthStore);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const response = await getUser();
      if (!response) {
        navigate("/login");
      }
    };
    checkUser();
  }, []);

  const statuses = ["PLACED", "SHIPPED", "OUT OF DELIVERY", "DELIVERIED"];

  useEffect(() => {
    const bringOrders = async () => {
      await getOrders();
    };
    bringOrders();
  }, [currentUser]);

  const filteredOrders = orders?.filter((order) => {
    const index = statuses.indexOf(order.orderStatus);
    return index >= 0 && index <= 2;
  });

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

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

      <div className="relative inline-block text-left">
        <button
          onClick={toggleDropdown}
          className="flex items-center bg-purple-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
        >
          <FaBars className="mr-2 text-lg" /> Order Categories
        </button>
        {dropdownOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 border border-gray-200">
            <Link
              to={"/pastOrders"}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-purple-600"
            >
              Past Orders
            </Link>
            <Link
              to={"/cancelledOrders"}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-purple-600"
            >
              Cancelled Orders
            </Link>
            <Link
              to={"/pendingOrders"}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-purple-600"
            >
              Pending Orders
            </Link>
          </div>
        )}
      </div>

      <h2 className="text-4xl font-extrabold text-gray-800 text-center p-6">
        Active Orders
      </h2>

      <div className="flex flex-col items-center gap-8">
        {filteredOrders && filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <div
              key={order._id}
              className="flex flex-col lg:flex-row max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="w-full lg:w-1/3 bg-gray-100 flex justify-center items-center p-4">
                <img
                  src={order.products[0].productId.url}
                  alt="Product"
                  className="w-full max-h-48 object-contain rounded-lg"
                />
              </div>

              <div className="w-full lg:w-2/3 p-6 flex flex-col justify-between">
                <div className="mb-4">
                  <p className="text-sm text-gray-600">
                    <strong>Order ID:</strong> {order._id}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Email:</strong> {order.userId.email}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Name:</strong> {order.userId.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Product Image:</strong><a href={order.products[0].productId.url} target="_blank" className="underline text-blue-500"> click here</a>
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Phone:</strong> {order.userId.phone}
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
                    <strong>Status:</strong>{" "}
                    <span
                      className={`${
                        order.orderStatus === "DELIVERIED"
                          ? "text-green-500"
                          : "text-yellow-500"
                      } font-bold`}
                    >
                      {order.orderStatus}
                    </span>
                  </p>
                </div>

                <div>
                  {order.orderStatus === "CANCELLED" ||
                  order.orderStatus === "DELIVERIED" ? (
                    <button
                      className={`${
                        order.orderStatus === "CANCELLED"
                          ? "bg-gray-300 text-gray-700"
                          : "bg-green-500 text-white"
                      } px-4 py-2 rounded-lg font-bold cursor-not-allowed`}
                    >
                      {order.orderStatus}
                    </button>
                  ) : (
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-600 transition duration-300"
                      onClick={() => handleCancelOrder(order._id)}
                    >
                      Cancel Order
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-lg font-medium">
            You have no active orders yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Orders;
