import React, { useContext, useState, useRef } from "react";
import { OrderStore } from "../store/OrderStore";
import { ClipLoader } from "react-spinners";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { ShinyButton } from "../components/components/ui/shiny-button";
import { FlipText } from "../components/components/ui/flip-text";
import { useInView } from "react-intersection-observer";
import { ShineBorder } from "../components/components/ui/shine-border";
const DesignForm = () => {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: false,
    threshold: 0.5, 
  });
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
    <div className="max-w-2xl mx-auto p-8 rounded-lg m-3 flex justify-center flex-col"  ref={headingRef}>
       {!headingInView?<div className="p-4"></div>: <FlipText   word="Add Your Design" className={`text-3xl font-bold text-center mb-8 text-white transition-transform duration-200
  `} />}
      <form onSubmit={handleSubmit}>
        <div
          className={`mb-8 p-8 border-4 ${
            isDragging ? "border-blue-500 bg-[#EEEEEE]" : "border-gray-300 bg-[#EEEEEE]"
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
        
<div className="flex justify-center">
        {loader ? (
          <button
  type="submit"
  className="btn-15 border-white text-white"
  disabled
>
  <ClipLoader color="#FFFFFF" size={20} />
</button>
        ) : (
          <ShinyButton className="bg-pink-500 text-white font-bold text-xl p-3 px-5" type="submit">Add Design</ShinyButton>
        )}
        </div>
        
      </form>
    </div>
  );
};

export default DesignForm;
