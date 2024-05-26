import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Pages/About';
import Career from './Pages/Career'
import Services from './Pages/Services';
import Contact from './Pages/Contact'
import NavBar from './Components/NavBar'
import home from './images/home.png'
import Footer from './Components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));

const router=createBrowserRouter([
  {
path: '/',
element:<NavBar/>, 
children:[
  {
    path:"/",
    element:<App/>
  },
  {
    path:"About",
    element:<About/>
  },
  {
    path:"Services",
    element:<Services/>
  },
  {
    path:"Contact",
    element:<Contact/>,
    // children:[{
    //   path:"Contact/About",
    //   element:<About/>
    // }]
  
  },
  {
    path:"Career",
    element:<Career/>
  }
],

 



 

errorElement:<div><span><img src={home}/></span>PAGE NOT FOUND</div>


  }
]);

root.render(
  <React.StrictMode>
     <RouterProvider router={router} />

  </React.StrictMode>
);
 
reportWebVitals();
