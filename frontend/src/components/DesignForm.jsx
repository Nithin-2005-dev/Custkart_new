import React, { useContext, useState, useRef } from "react";
import { OrderStore } from "../store/OrderStore";
import { ClipLoader } from "react-spinners";
import { Bounce, toast, ToastContainer } from "react-toastify";

const DesignForm = () => {
  const { handleAddProduct } = useContext(OrderStore);
  const [loader, setLoader] = useState(false);
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);

    const uploadedFile = event.dataTransfer.files[0];
    if (uploadedFile) {
      validateFile(uploadedFile);
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(uploadedFile);
      fileInputRef.current.files = dataTransfer.files;
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  };

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      validateFile(uploadedFile);
    }
  };

  const validateFile = (uploadedFile) => {
    const validTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!validTypes.includes(uploadedFile.type)) {
      toast.warn("Invalid file type. Please upload a JPG, PNG, or GIF file.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }
    setFile(uploadedFile);
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleClearFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      toast.warn("Please upload a file before submitting.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }

    setLoader(true);
    await handleAddProduct(e);
    setLoader(false);
    setFile(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 rounded-lg m-3">
      <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Add Design</h2>
      <form onSubmit={handleSubmit}>
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
              <>
                <p className="text-lg font-semibold text-gray-700">File: {file.name}</p>
                <button
                  type="button"
                  className="mt-2 text-sm text-red-500 underline"
                  onClick={handleClearFile}
                >
                  Remove file
                </button>
              </>
            ) : (
              <>
                <p className="text-lg font-semibold">
                  Drag and drop an image file here, or{" "}
                  <span className="text-blue-500 underline">click to select</span>.
                </p>
                <p className="text-sm text-gray-500">Supports JPG, PNG, and GIF files</p>
              </>
            )}
          </div>
          <input
            type="file"
            id="image"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {loader ? (
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-green-600 rounded-md hover:bg-green-700"
            disabled
          >
            <ClipLoader color="#f9f8f8" size={20} />
          </button>
        ) : (
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-green-600 rounded-md hover:bg-green-700"
          >
            Add Design
          </button>
        )}
      </form>
    </div>
  );
};

export default DesignForm;
