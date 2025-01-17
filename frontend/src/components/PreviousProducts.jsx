import React, { useContext, useEffect } from "react";
import { OrderStore } from "../store/OrderStore";
import { AuthStore } from "../store/AuthStore";
import { useNavigate } from "react-router";
import { Bounce, ToastContainer } from "react-toastify";

const PreviousProducts = () => {
  const { products, getProducts, setPlaceOrder} = useContext(OrderStore);
  const { currentUser } = useContext(AuthStore);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      getProducts();
    }
  }, [currentUser]);

  return (
    <div className="">
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
      <h2 className="text-4xl font-extrabold text-gray-800 text-center p-2 m-2">
        Your Designs
      </h2>
      <div className="flex flex-col items-center justify-evenly gap-8 m-3">
        {(products && products.length>0)?
          products.map((product) => (
            <div
              key={product._id}
              className="flex flex-col md:flex-row max-w-7xl lg:max-w-6xl overflow-hidden bg-white rounded-lg shadow-lg"
            >
              <div className="w-full md:w-1/3 flex justify-center p-2">
                <img
                  src={product.url}
                  alt="Product"
                  className="w-full h-auto object-contain max-w-sm mx-auto rounded-md"
                />
              </div>
              <div className="w-full md:w-2/3 p-4 flex flex-col">
                <p className="mt-2 text-sm text-gray-600">
                  <strong>Product Id:</strong> {product._id}
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  <strong>Product type:</strong> {product.productType}
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  <strong>Material type:</strong> {product.materialType}
                </p>
                <div className="flex justify-between flex-col md:flex-row mt-4 gap-4">
                  <button
                    className="bg-green-500 px-4 py-2 text-white rounded-lg hover:bg-green-600 focus:ring focus:ring-green-300"
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
          )):<p>No products Designed</p>}
      </div>
    </div>
  );
};

export default PreviousProducts;
