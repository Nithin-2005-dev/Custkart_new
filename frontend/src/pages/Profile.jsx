import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners"; // Loader for async actions
import {} from "react"
import { AuthStore } from "../store/AuthStore";
const Profile = () => {
    const {currentUser}=useContext(AuthStore)
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state
  const [formData, setFormData] = useState({ address: "", phone: "" }); // Form data for update
  const [editMode, setEditMode] = useState(false); // To toggle edit mode
  const [successMessage, setSuccessMessage] = useState(""); // For success message after update

  // Fetch user data on component mount
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission for updating user data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("/api/user/profile", formData); // Replace with your actual API route
      setEditMode(false);
      setSuccessMessage("Profile updated successfully!");
      setUser((prevUser) => ({
        ...prevUser,
        address: formData.address,
        phone: formData.phone,
      }));
    } catch (err) {
      setError("Failed to update profile");
    }
  };

  // Handle deleting user account
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/user/profile/${user.id}`); // Replace with your actual API route
      // Redirect or notify user after deletion
      alert("Your account has been deleted.");
    } catch (err) {
      setError("Failed to delete account");
    }
  };

  // If the data is loading, show a spinner
  if (!currentUser) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#000000" size={40} />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      {error && <p className="text-red-500">{error}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}

      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>

        {/* Display user information */}
        <div className="profile-info">
          <p><strong>Name:</strong> {currentUser.name}</p>
          <p><strong>Email:</strong> {currentUser.email}</p>
          <p><strong>Phone:</strong> {currentUser.phone}</p>
          <p><strong>Address:</strong> {currentUser.address || "No address provided"}</p>
          <p><strong>Verified:</strong> {currentUser.isVerified ? "Yes" : "No"}</p>
        </div>

        {/* Toggle edit mode */}
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setEditMode(!editMode)}
        >
          {editMode ? "Cancel" : "Edit Profile"}
        </button>

        {/* Edit form */}
        {editMode && (
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="form-group mb-4">
              <label htmlFor="address" className="block text-sm">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="phone" className="block text-sm">Phone:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
              Save Changes
            </button>
          </form>
        )}

        {/* Delete button */}
        <button
          onClick={handleDelete}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Profile;
