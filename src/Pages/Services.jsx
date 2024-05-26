import React from "react";
import ServiceCard from "../Components/ServiceCard";
import ServiceTile from "../Components/ServiceTile";
import home from "../images/home.png";
import Footer from "../Components/Footer";
import star from '../images/star.png'
import loop from '../images/loop.png'
import globe from '../images/globe.jpg'
import clock from '../images/clock.png'
import arrowStar from '../images/arrowStar.png'
import calendar from '../images/calendar.png'
import person from '../images/person.png'
import stack from '../images/stack.png'
import updown from '../images/updown.jpeg'



export default function Services() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-bold text-4xl text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard image={star} title={"Immediate reporting for emergency"} color={'bg-red-300'}/>
        <ServiceCard image={arrowStar} title={"24/7 Teleradiology Reporting Services"} />
        <ServiceCard image={calendar} title={"Turnaround Time: Very Minimal"}/>
        <ServiceCard image={clock} title={"Locum services"}/>
        <ServiceCard image={home} title={"Night services"}/>
        <ServiceCard image={globe} title={"Complete responsibility of reporting"}/>
        <ServiceCard image={star} title={"Weekend services"}/>
        <ServiceCard image={loop} title={"Large volume reporting"}/>
        <ServiceCard image={star} title={"Second opinion"}/>
      </div>

      <h1 className="font-bold text-4xl text-center my-8 pt-16">Our Technologies</h1>
       <div className="text-center text-gray-500 pt-4 pb-8">
        <p>
        Harnessing the Power of Advanced Technology in Teleradiology.
        </p> 
        <p>At Lucent
        TeleRad, We believe in leveraging the latest technological advancements
        to deliver exceptional teleradiology services.</p>
        <p>Our state-of-the-art
        infrastructure includes:</p>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceTile image={calendar} title={"AI-Powered Image Analysis"} description={"Our cutting-edge AI tools assist our radiologists in detecting and diagnosing medical conditions with greater accuracy and speed, ensuring the best possible patient outcomes."}/>
        <ServiceTile image={star} title={"Cloud-Based PACS"} description={"Our secure, cloud-based Picture Archiving and Communication System (PACS) allows for seamless storage, retrieval, and sharing of medical images, enabling efficient collaboration between healthcare providers."}/>
        <ServiceTile image={stack} title={"High-Speed Data Transmission"} description={"We utilize high-speed data transmission technology to ensure that medical images are transferred quickly and securely, minimizing delays in diagnosis and treatment."}/>
        <ServiceTile image={person} title={"Advanced Workstations"} description={"Our radiologists work on advanced workstations equipped with high-resolution monitors and specialized software, allowing them to analyze medical images with precision and accuracy."}/>
        <ServiceTile image={updown} title={"Robust Data Security"} description={"We prioritize data security and privacy, employing robust encryption and access control measures to protect your patients' sensitive information."}/>
         
      </div>
      <Footer/>
    </div>
  
  );
}
