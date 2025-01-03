import React from "react";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { asset } from "../assets/assets";

const Login = () => {
  const dynamicMarkdown = `
## Sign Up for an Account  
Fill out the form below to create a new account and access exclusive features.
  `;

  return (
    <div className="relative min-h-screen text-white bg-gray-800 ">
      {/* SEO Metadata */}
      <Helmet>
        <title>Sign Up - FoodTrove</title>
        <meta name="description" content="Create an account to access exclusive features on our platform. Sign up easily and securely." />
        <meta name="keywords" content="sign up, create account, register, user registration" />
      </Helmet> 


      <header className="h-16 bg-[#F53E32] flex items-center justify-between px-[9vw] text-white">
        <h1 className="text-lg font-semibold">Sign Up</h1>
        <p className="text-sm">Home &gt; Sign Up</p>
      </header>

      {/* Form Container */}
      <main className="mt-10 mb-20 text-white bg-gray-800">
        <div className="w-[90%] max-w-[700px] mx-auto text-white bg-gray-800  shadow-md rounded-lg p-6">
          {/* Logo */}
          <div className="text-center mb-6">
            <img src={asset.logo} alt="Logo" className="w-24 mx-auto" />
          </div>

          {/* Markdown Content */}
          <div className="mb-8 text-center">
            <ReactMarkdown>{dynamicMarkdown}</ReactMarkdown>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Name Fields */}
            <div className="flex flex-col sm:flex-row sm:gap-6">
             
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row sm:gap-6">
              <div className="flex-1">
                <label className="block text-white mb-2 text-sm font-medium">Phone Number*</label>
                <input
                  type="password"
                  placeholder="Enter Your Number"
                  className="w-full px-4 py-2 border text-gray-700 text-[18px] rounded-md focus:ring-2 focus:ring-[#F53E32] -tracking-tighter focus:outline-none"
                />
              </div>
              
              <div className="flex-1 mt-4 sm:mt-0">
                <label className="block text-white mb-2 text-sm font-medium">Email Address*</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-2 border text-gray-700 text-[18px] rounded-md focus:ring-2 focus:ring-[#F53E32] -tracking-tighter focus:outline-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-between items-center mt-8">
              <button
                type="submit"
                className="bg-[#F53E32] text-white px-6 py-2 rounded-md hover:bg-[#d42c24] transition"
              >
                Sign Up
              </button>
              <Link to="/login" className="text-gray-600 text-sm">
                Already have an account? <span className="text-[#F53E32] underline">Log in</span>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;