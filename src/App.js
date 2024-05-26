import './App.css';
import home from './images/home.png';
import about from './images/about.png';
import services from './images/services.png';
import career from './images/career.png';
import contact from './images/contact.png';
import logo from './images/logo.png';
import bgImage from './images/skeleton-bg.jpg'; // Import the background image
import Card from './Components/Card';
import telerad from './images/tele_rad_mp.webp';
import Doctors from './Components/Doctors';
  import About from './Pages/About';
 import Career from './Pages/Career';
 import Services from './Pages/Services';
 import Contact from './Pages/Contact';
 import ServiceCard from './Components/ServiceCard';
 import ServiceTile from './Components/ServiceTile';
 import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter instead of Router

import Footer from './Components/Footer';
import dr1 from './images/dr1.jpg'
import dr2 from './images/dr2.jpg'
import dr3 from './images/dr3.jpg'
import dr4 from './images/dr4.jpg'
import dr5 from './images/dr5.jpg'
import dr6 from './images/dr6.jpg'
import dr7 from './images/dr7.jpg'
import dr8 from './images/dr8.jpg'
import dr9 from './images/dr9.jpg'
import dr10 from './images/dr10.jpg'
import clock from './images/clock.png'
import calendar from './images/calendar.png'
import bell from './images/bell.png'
import star from './images/star.png'
import arrowStar from './images/arrowStar.png'
import person from './images/person.png'
import globe from './images/globe.jpg'
 


function App() {
  return (
    
    <div className=" relative h-screen "> {/* Add relative positioning to the parent container */}
      <div className="absolute inset-0" style={{ backgroundImage: `url(${bgImage})`, filter: 'brightness(25%)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div> Background image
      
    
      <div className='items-center px-80 py-40'>
        <div className='text-white opacity-90  text-5xl font-Roboto,sans mb-6 font-black text-center container mx-auto'>Bridging the gap between rural and urban health facilities</div>
      <div className='mt-8 text-center text-xl text-white opacity-90  font-sans mx-auto'>Lucent telerad provide remote radiology services using advanced telecommunication technologies. Our firm play a crucial role in the field of medical imaging by enabling the interpretation and diagnosis of medical images from anywhere in the world.</div>
      </div>

<div className='bg-gray-50 px-4 pb-2'>


<div className='flex justify-center gap-8 -mt-8'>
      <Card circleColor="blue" title={"Quality Assurance"} image={home} description="We adhere to strict quality control measures and follow international radiology reporting standards to ensure the highest level of accuracy and reliability in our reports.}"/>
      <Card circleColor="green" title={"Sub-Specialty Expertise"} image={clock} description="Our radiologists possess sub-specialty expertise in areas such as neuroradiology, musculoskeletal radiology, and pediatric radiology, enabling us to cater to the unique needs of your patients.}"/>
      <Card circleColor="red" title={"24/7 Teleradiology Reporting Services"} image={arrowStar} description="Our team of expert radiologists is available around the clock to provide accurate and timely radiology reports, ensuring that patients receive the best possible care.}"/>
</div>
<div className='flex justify-center gap-8 mt-8'>
      <Card circleColor="yellow" title={"Cost-Effective Solutions"} image={calendar} description="Our competitive pricing and flexible service packages make it easy for healthcare providers of all sizes to access our world-class teleradiology services.}"/>
      <Card circleColor="purple" title={"Second Opinion"} image={star} description="A second opinion from our experts can provide a deeper understanding of the diagnosis and prognosis and enable the healthcare team to make informed decisions about the patient's medical care.}"/>
      <Card circleColor="teal" title={"Customized Workflow Solutions"} image={bell} description="Our advanced teleradiology platform can be seamlessly integrated with your existing systems, allowing for a smooth and efficient workflow tailored to your specific requirements.}"/>
</div>



<div className='flex justify-between gap-8'>
  <div className='w-1/2 p-8 m-28 ml-28 max-w-xl mx-auto'>
    <div className='rounded-full bg-white shadow-md mb-8 w-12 h-12 flex items-center justify-center'>
      <img src={globe} alt='globe' className='w-6 '/>
    </div>
    <div className='text-3xl text-blue-gray-800 mb-4 font-bold '>Introduction</div>
    <div className='text-gray-500 font-sans leading-relaxed'>
      At Lucent TeleRad, we are dedicated to revolutionizing the field of radiology worldwide by providing state-of-the-art teleradiology services. Our team of highly skilled and experienced radiologists, technologists, and support staff work tirelessly to deliver accurate and timely radiology reports to healthcare providers across the nation.
      <br/><br/>
      Our mission is to bridge the gap between rural and urban healthcare by making advanced radiology services accessible to all, regardless of location. We believe in harnessing the power of technology to improve patient outcomes and empower healthcare providers with the tools they need to make informed decisions.
    </div>
  </div>

  <div className='max-w-xl mx-auto  '>
    <div className='m-24 border border-white rounded-xl overflow-hidden shadow-lg'>
      <img src={telerad} alt='Telerad' className='w-full p-4'/>
      <div className='p-6'>
        <div className='text-xl font-bold text-blue-gray-800 mb-4'>Top Notch Services</div>
        <div className='text-gray-500 leading-relaxed'>
          Lucent Telerad is revolutionizing the field of radiology with its cutting-edge teleradiology services. As a premier provider in the industry, Lucent Telerad combines advanced technology, a highly skilled team of radiologists, and a commitment to delivering accurate and timely diagnoses.
        </div> 
      </div>
    </div>
  </div>
</div>


<div>

  <div className='items-center sm:mx-auto px-104'>
    <div className='text-5xl  mt-16 p-8 text-center text-gray-800'>Our Radiologists</div>
    <div className= ' max-w-3xl mx-auto font-20px text-center block antialiased font-sans text-xl font-normal leading-relaxed text-gray-500'>Our radiologists at Lucent Telerad are highly skilled, experienced, and committed to providing accurate and timely diagnoses through tele radiology services, ensuring the highest standard of care for patients worldwide.</div>


  </div>


<div className='p-8 grid grid-cols-1 '>

<div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  <Doctors name={"DR.SYED ZAFIR WAQUI"} degree={"MBBS, MD Radiodiagnosis, BCFRG Foetal Radiology."} image={dr1} />
  <Doctors name={"DR. ANIKET"} degree={"MBBS, MD RADIODIAGNOSIS,DNB"} image={dr2} />
  <Doctors name={"DR. KUNAL MAHADEO JIBHAKATE"} degree={"MBBS, MD RADIODIAGNOSIS"} image={dr3} />
  <Doctors name={"DR. MANISH RATHI"} degree={"MBBS, DMRE( Radiodiagnosis )."} image={dr4} />
</div>
<div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  <Doctors name={"DR. SYED TAHOORA"} degree={"MBBS, DMRE (RADIODIAGNOSIS) BCFRG FETAL RADIOLOGY"} image={dr5} />
  <Doctors name={"DR.ARSHIYA KHATOON"} degree={"MBBS, DMRE( Radiodiagnosis )."} image={dr6} />
  <Doctors name={"DR.SADIYA KHANAM"} degree={"MBBS, DMRE( Radiodiagnosis )."} image={dr7} />
  <Doctors name={"DR. AISHWARYA PAREKH"} degree={"MBBS, DMRE( Radiodiagnosis )."} image={dr8} />
</div>
<div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  <Doctors name={"Dr.PRANALI TOSHNIWAL"} degree={"DMRE( Radiodiagnosis )."} image={dr9} />
  <Doctors name={"Dr. YASIN AKBANI"} degree={"DMRE( Radiodiagnosis )."} image={dr10} />
</div>

<div className='bg-gray-100 flex flex-col items-center p-20'>
  <h1 className='font-bold text-4xl p-20 text-center text-gray-800'>Our Founders</h1>
  
  <div className="flex flex-col items-center">
    <div className='rounded-full overflow-hidden bg-white p-2'>
      <img src={person} className='w-6 h-6 object-cover rounded-full' alt="Sayed Aamer"/>
    </div>
    <div className='text-xl p-2 text-center font-bold text-gray-800'>Sayed Aamer</div>
    <div className='text-lg p-2 text-center max-w-5xl mx-auto text-gray-500'>Sayed Aamer is the founder and CEO of Lucent TeleRad. He is a young and dynamic leader with a passion for using technology to improve access to healthcare. He is also a civil engineer by training, which gives him a unique perspective on the challenges and opportunities of the teleradiology industry.</div>
  </div>

  <div className="flex flex-col items-center">
    <div className='rounded-full overflow-hidden bg-white p-2'>
      <img src={person} className='w-6 h-6 object-cover rounded-full' alt="Dr. Sayed Abrar"/>
    </div>
    <div className='text-xl p-2 text-center font-bold text-gray-800'>Dr. Sayed Abrar</div>
    <div className='text-lg p-2 text-center max-w-5xl mx-auto text-gray-500'>Dr. Sayed Abrar is one of the co-founders of Lucent TeleRad. He reckons that tele-radiology has the potential to revolutionize healthcare by making it more accessible and affordable for patients in rural and underserved areas.</div>
  </div>
</div>




  <div className='text-center font-bold text-3xl p-16 font-sans text-gray-800'>Why Choose us</div>

  <div className='flex justify-center  text-gray-800'>
  <ServiceTile image={clock} title={"Cutting-Edge Technology"} description={"We utilize the latest advancements in teleradiology, including AI-powered tools and secure cloud-based systems, to deliver efficient and accurate services."}/>
  <ServiceTile image={star} title={"Exceptional Client Service"} description={"We pride ourselves on our commitment to client satisfaction, offering personalized support and prompt responses to all inquiries."}/>
  <ServiceTile image={calendar} title={"Data Security and Privacy"} description={"We adhere to strict data security protocols and comply with all relevant regulations to safeguard patients sensitive information."}/>

  </div>

 
</div>

</div>




</div>
 
 
 <Footer/>
          </div>
         
  );
}

export default App;
