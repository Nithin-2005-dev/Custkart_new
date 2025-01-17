import React, { useContext, useState } from "react";
import { OrderStore } from "../store/OrderStore";

const DesignForm = () => {
    const {handleAddProduct}=useContext(OrderStore);
  return (
    <div className="max-w-md mx-auto p-6 rounded-lg m-3 ">
      <h2 className="text-4xl font-black mb-4 text-center">Add Design</h2>
      <form onSubmit={handleAddProduct}>
        <div className="mb-4">
          <label htmlFor="productType" className="block text-sm font-medium text-gray-700">
            Product Type
          </label>
          <select
            id="productType"
            name="productType"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Product Type</option>
            <option value="POLO">POLO</option>
            <option value="OVERSIZED">OVERSIZED</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="materialType" className="block text-sm font-medium text-gray-700">
            Material Type
          </label>
          <select
            id="materialType"
            name="materialType"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Material Type</option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DesignForm;
