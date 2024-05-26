// import React from "react";

// function ServiceCard ({title,image }){
 
//     return<>
    
// <div className="  p-8 rounded-xl border border-gray-300">
//     <div className="w-16 bg-red-500 p-8 rounded-full">
//         <img src={image} className=""/>
//     </div>

//     <div className="font-bold text-2xl">{title}</div>

    

// </div>
    
//     </>
// }

// export default ServiceCard;





// ServiceCard.js
import React from "react";

function ServiceCard({ title, image,color }) {
  return (
    <div className="p-8 rounded-xl border border-gray-300 items-center ">
      <div className={"border w-12 h-12 rounded-full flex justify-center mx-auto " + color}>
        <img  src={image} alt="Icon" className="h-10 w-10" />
      </div>

      <div className="text-center font-bold text-xl mx-auto text-gray-700">{title}</div>
    </div>
  );
}

export default ServiceCard;
