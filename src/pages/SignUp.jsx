import React from "react";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { asset } from "../assets/assets";
import { useState } from "react";
import axios from 'axios'
const Login = () => {
  const dynamicMarkdown = `
## Sign Up for an Account  
Fill out the form below to create a new account and access exclusive features.
  `;


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUsername] = useState('');
  const [message, setMessage] = useState('');


  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/auth/register',{email,userName,password})
      console.log(response.data);
      const {token} = response.data;
      if (token) {
        localStorage.setItem("token",token)
        setMessage('Register successful!');
      }
      else{
        setMessage('No token received, please try again.');
      }
      setMessage("Register")
      setEmail('')
      setPassword('')
      setUsername('')
    } catch (error) {
      console.error(error);
      setMessage('Register failed. Please try again.');
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* SEO Metadata */}
      <Helmet>
        <title>Sign Up - GYM24</title>
        <meta
          name="description"
          content="Create an account to access exclusive features on our platform. Sign up easily and securely."
        />
        <meta
          name="keywords"
          content="sign up, create account, register, user registration"
        />
      </Helmet>

      <header className="h-16 bg-[#F53E32] flex items-center justify-between px-8 sm:px-16 shadow-md">
        <h1 className="text-xl font-bold tracking-wide">Sign Up</h1>
        <p className="text-sm">Home &gt; Sign Up</p>
      </header>

      {/* Form Container */}
      <main className="flex flex-col items-center mt-10 mb-20 px-4">
        <div className="w-full max-w-xl bg-gray-800 shadow-lg rounded-lg p-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src={asset.logo} alt="Logo" className="w-24" />
          </div>

          {/* Markdown Content */}
          <div className="mb-8 text-center">
            <ReactMarkdown>{dynamicMarkdown}</ReactMarkdown>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleRegister}>
            {/* Name Fields Placeholder (if needed, you can add first and last name inputs here) */}
            <div className="flex flex-col sm:flex-row sm:gap-6"></div>

            {/* Contact Info */}
            <div className="flex flex-col sm:gap-6">
            <div className="flex-1">
                <label className="block mb-2 text-sm font-medium">
                  Username*
                </label>
                <input
                  type="type"
                  value={userName}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter Your UserName"
                  className="w-full px-4 py-3 border rounded-md bg-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-[#F53E32] focus:border-transparent transition duration-200 ease-in-out"
                />
              </div>

              <div className="flex-1 mt-4 sm:mt-0">
                <label className="block mb-2 text-sm font-medium">
                  Email Address*
                </label>
                <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-3 border rounded-md bg-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-[#F53E32] focus:border-transparent transition duration-200 ease-in-out"
                />
              </div>
              <div className="flex-1 mt-4 sm:mt-0">
                <label className="block mb-2 text-sm font-medium">
Password*
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Your Password"
                  className="w-full px-4 py-3 border rounded-md bg-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-[#F53E32] focus:border-transparent transition duration-200 ease-in-out"
                />
              </div>
            </div>

            {/* Submit Button and Link */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-8">
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#F53E32] text-white px-6 py-3 rounded-md hover:bg-[#d42c24] transition duration-200"
              >
                Sign Up
              </button>
              <Link to="/login" className="mt-4 sm:mt-0 text-gray-300 hover:underline text-sm">
                Already have an account?{" "}
                <span className="text-[#F53E32] font-semibold">Sign In</span>
              </Link>
            </div>
          </form>
          {message && <p className="text-white">{message}</p>}
        </div>
      </main>
    </div>
  );
};

export default Login;
