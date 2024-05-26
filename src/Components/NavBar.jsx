import React from "react";
import { Link, Outlet } from "react-router-dom";
import home from '../images/home.png';
import about from '../images/about.png';
import services from '../images/services.png';
import contact from '../images/contact.png';
import career from '../images/career.png';
import bgImage from '../images/skeleton-bg.jpg'; // Import the background image
import logo from '../images/logo.png';
export default function NavBar() {
  return (
    <div className="navbar">
      <nav className="relative z-10">
        <div className='flex justify-between px-24 py-8 mx-auto items-center' style={{ background: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100px' }}>
          <div>
            <div className='w-48'><img src={logo} alt='' /></div> 
            <div></div>
          </div>

          <div>
            <ul className='flex justify-center gap-8 text-white'> 
              <li className='flex gap-3 mx-auto items-center'> <span><img src={home} alt='' className=' w-4 '/></span> <Link to={'/'}>Home</Link> </li>
              <li className='flex gap-3 mx-auto items-center'> <span><img src={about} alt='' className='w-4'/></span> <Link to={'/About'}>AboutUs</Link></li>
              <li className='flex gap-3 mx-auto items-center'> <span><img src={services} alt='' className='w-4'/></span> <Link to={'/Services'}>Services</Link></li>
              <li className='flex gap-3 mx-auto items-center'> <span><img src={career} alt='' className='w-4'/></span><Link to={'/Career'}>Career</Link> </li>
              <li className='flex gap-3 mx-auto items-center'> <span><img src={contact} alt='' className='w-4'/></span> <Link to={'/Contact'}>ContactUs</Link></li>
            </ul>
          </div>

          <div>
            <button className='bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 font-bold py-2 px-4 text-white hover:cursor-pointer hover:sh rounded-md transition duration-300 ease-in-out m-3'>SIGN IN</button>
          </div>
        </div>
      </nav>
      <Outlet/>  
    </div>
  );
}
