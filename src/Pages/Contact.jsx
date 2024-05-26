import React from "react";
import home from '../images/home.png';
import dropDown from '../images/dropdown.jpg';
import Footer from "../Components/Footer";

export default function Contact() {
  return (
    <div className="bg-gray-50 text-center mx-auto px-4 py-16 md:px-48">
      <h1 className="text-4xl font-bold text-gray-800 font-sans">Contact Us</h1>
      <p className="text-lg text-gray-500 mt-4">Complete this form and we will get back to you within 24 hours.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div>
          <label htmlFor="fullName" className="block text-gray-600 text-sm">Full Name</label>
          <input type="text" id="fullName" className="border-b-2 border-gray-300 shadow-sm w-full mt-1 focus:outline-none focus:border-blue-400" />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-600 text-sm">Email Address</label>
          <input type="email" id="email" className="border-b-2 border-gray-300 shadow-sm w-full mt-1 focus:outline-none focus:border-blue-400" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-600 text-sm">Contact Number</label>
          <input type="tel" id="phone" className="border-b-2 border-gray-300 shadow-sm w-full mt-1 focus:outline-none focus:border-blue-400" />
        </div>
      </div>

      
      <div className="mt-8 flex items-center justify-center">
        <span className="text-gray-600 mr-4">You are contacting us as a</span>
        <div className="relative inline-block">
          <select className="border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-blue-400 px-3 py-2 appearance-none">
            <option value="diagnosticCenter">Diagnostic Center</option>
            <option value="hospital">Radiologist</option>
            <option value="clinic">Hospital/chain of hospitals</option>
          </select>
          <img src={dropDown} className="absolute right-0 top-0 w-4 h-4 mt-2 pointer-events-none" alt="dropdown" />
        </div>
      </div>
      
      <div className="mt-8">
        <label htmlFor="message" className="block text-gray-600 text-sm">Message</label>
        <textarea id="message" rows="4" className="border-b-2 border-gray-300 shadow-sm w-full mt-1 focus:outline-none focus:border-blue-400"></textarea>
      </div>

      <button className="bg-blue-400 px-6 py-3 rounded-md font-bold text-white mt-12 hover:bg-blue-500 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400">SEND MESSAGE</button>
    
      <Footer />
    </div>
  );
}
