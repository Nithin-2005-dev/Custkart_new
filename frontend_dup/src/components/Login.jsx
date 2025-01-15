import React from 'react'

const Login = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4 text-center">
              {isSignupMode ? "Sign Up" : "Login"}
            </h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              {isSignupMode && (
                <>
                  <div>
                    <label className="block font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={credentials.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-md"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={credentials.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-md"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </>
              )}
              <div>
                <label className="block font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button
                type="submit"
                onClick={isSignupMode ? handleSignup : handleLogin}
                className="w-full px-4 py-2 mt-4 rounded-md text-white"
                style={{ backgroundColor: "#169C82" }}
              >
                {isSignupMode ? "Sign Up" : "Login"}
              </button>
            </form>
            <p className="text-center text-gray-600 mt-4">
              {isSignupMode ? (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={() => setIsSignupMode(false)}
                    className="text-blue-500 underline"
                  >
                    Log In
                  </button>
                </>
              ) : (
                <>
                  Don't have an account?{" "}
                  <button
                    onClick={() => setIsSignupMode(true)}
                    className="text-blue-500 underline"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </p>
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        </div>
  )
}

export default Login
