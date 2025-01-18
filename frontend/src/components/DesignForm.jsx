import React, { useContext, useState, useRef } from "react";
import { OrderStore } from "../store/OrderStore";

const DesignForm = () => {
  const { handleAddProduct } = useContext(OrderStore);
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const uploadedFile = event.dataTransfer.files[0];
    setFile(uploadedFile);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 rounded-lg m-3">
      <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Add Design</h2>
      <form onSubmit={handleAddProduct}>

        <div
          className={`mb-8 p-8 border-4 ${
            isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-gray-100"
          } border-dashed rounded-xl text-center cursor-pointer`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={handleClick}
        >
          <div className="text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto mb-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16l4 4m0 0l4-4m-4 4V4m7 6h3m4 0h-3m-4 0h4m-4-4h2m0 0h2m-2 4h2m0-4h2m-4 4h4"
              />
            </svg>
            {file ? (
              <p className="text-lg font-semibold text-gray-700">File: {file.name}</p>
            ) : (
              <>
                <p className="text-lg font-semibold">
                  Drag and drop an image file here, or <span className="text-blue-500 underline">click to select</span>.
                </p>
                <p className="text-sm text-gray-500">Supports JPG, PNG, and GIF files</p>
              </>
            )}
          </div>
          <input
            type="file"
            id="image"
            name="image"
            required
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DesignForm;
