import React, { useContext, useEffect } from "react";
import { OrderStore } from "../store/OrderStore";
import { AuthStore } from "../store/AuthStore";
import { useNavigate } from "react-router";
import { Bounce, ToastContainer } from "react-toastify";

const PreviousProducts = () => {
  const { products, getProducts, setPlaceOrder } = useContext(OrderStore);
  const { currentUser } = useContext(AuthStore);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      getProducts();
    }
  }, [currentUser]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
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
      <h2 className="text-4xl font-extrabold text-gray-800 text-center p-6">
        Your Designs
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div
              key={product._id}
              className="w-full sm:w-80 md:w-96 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <div className="relative w-full h-64">
                <img
                  src={product.url}
                  alt="Product"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">
                  <strong>Product Id:</strong> {product._id}
                </p>
                <div className="flex justify-between mt-4">
                  <button
                    className="w-full py-2 px-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 focus:ring-2 focus:ring-green-300 transition duration-300"
                    onClick={() => {
                      setPlaceOrder(product);
                      navigate("/placeOrder");
                    }}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-lg font-medium text-center mt-8">
            No products designed yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default PreviousProducts;
