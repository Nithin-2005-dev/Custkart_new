import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    feedback: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for your feedback!');
    setFormData({
      name: '',
      email: '',
      contact: '',
      feedback: '',
    });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundColor: '#C7E7D8' }}
    >
      <div
        className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md animate-pop-in"
        style={{
          animation: 'pop-in 0.8s ease-out forwards',
        }}
      >
        <h1 className="text-2xl font-bold text-center mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#169C82]"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#169C82]"
              required
            />
          </div>

          {/* Contact Number Input */}
          <div>
            <label htmlFor="contact" className="block text-gray-700 font-medium">
              Contact Number
            </label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter your contact number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#169C82]"
              required
            />
          </div>

          {/* Feedback Input */}
          <div>
            <label htmlFor="feedback" className="block text-gray-700 font-medium">
              Feedback
            </label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              placeholder="Enter your feedback"
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#169C82]"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 rounded-md font-medium hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-[#169C82]"
              style={{
                backgroundColor: '#169C82',
                color: '#000',
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Keyframes for the pop-in animation */}
      <style>
        {`
          @keyframes pop-in {
            0% {
              opacity: 0;
              transform: scale(0.8);
            }
            50% {
              opacity: 0.5;
              transform: scale(1.1);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          .animate-pop-in {
            animation: pop-in 0.8s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}

export default Contact;
