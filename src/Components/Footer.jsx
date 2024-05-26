
import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Footer(){
    return<>
<div className="bg-gray-100  mx-auto ">
<div className="flex  p-4 mt-4    ">
  <div className="w-1/2 flex flex-none  mt-24 ml-24 text-2xl font-bold text-gray-800  ">Lucent Telerad</div>
  <div className=" ">
    <h1 className="  flex flex-none pt-8 text-md mt-16 ml-16 mb-4 ">USEFUL LINKS</h1>

        <div className="text-gray-500 flex flex-col justify-center   ml-16 mb-0" >
        <Link to="About"> About Us</Link>
           <Link to="Services"> Services</Link>
           <Link to="Contact">Contact Us</Link>
        </div>
    
  </div>
</div>
<div className="border-b-2 border-gray-300 shadow-sm w-full"></div>

<div className="text-xsm text-gray-500 text-center mt-8 p-4">Copyright © 2024 Lucent Diagnostics Pvt. Ltd.</div>
</div>

<Outlet/>
    </>
} 