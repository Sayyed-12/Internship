import React from "react";
import Footer from "../Components/Footer";

export default function About() {
  return (
    <div>
    <div className="py-16 pr-16 border border-gray-300 shadow-sm rounded-3xl -mt-4 mx-24">
    <div className="container mx-auto  text-gray-500 pr-16">
      <h1 className="text-4xl font-bold  text-gray-800 text-center">About Us</h1>
      <div className="border-b-2 border-gray-300 shadow-sm pb-8  ml-4"></div>
      <div className="p-8  ">
        <p className="text-gray-700">
          In recent years, the field of tele radiology has changed rapidly. Large volume reporting and increasing dependence on radiology for diagnosis, therapeutics, monitoring, and prognosis have placed an immense burden on the radiology profession. While the number of diagnostic centres and hospitals providing radiology services is increasing, there is a shortage of radiology experts. We at Lucent TeleRad connect the Collaborators the radio diagnosis. The Doctor, Radiologist, patient, Technologist & Hospital, Diagnostic centre and provide Health Facilities with ease.
        </p>

        <h2 className="font-bold text-lg mt-8">What do we do?</h2>
        <p className="text-gray-700">
          We collaborate with imaging centres, hospitals, individuals, radiologists, diagnostic centres, other medical groups and provide an accurate and timely diagnosis across several modalities like x-ray, CT scan, MRI, mammography and fulfil the patient-to-radiologist deficit ratio faced by our country.
        </p>

        <h2 className="font-bold text-lg mt-8">How do we flow?</h2>
        <p className="text-gray-700">
          Lucent TeleRad services are dedicated to improving patient care through precise and timely reporting. We will strive to achieve this with the lowest TAT (turnaround time) and the highest level of accuracy.
        </p>

        <ol className="list-decimal mt-8 ml-8">
          <li>Step 1: Data is sent from the patient to Lucent TeleRad</li><br/>
          <li>Step 2: Data is analyzed and studied by expert and experienced radiologists</li><br/>
          <li>Step 3: Radiologist reviews and finalizes the report</li><br/>
          <li>Step 4: The finalized report is sent back to the parent health Centre</li>
        </ol>
      </div>
    </div>
   
    </div>
     <Footer/>
   </div>
  );
}
