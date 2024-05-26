import React from "react";

function Doctors ({name,image,degree}){

return(
<div>
    <div className="pb-8 w-full "><img src={image}/></div>
    <div className="pt-8 font-bold mx-auto ">{name}</div>
    <div className="text-gray-700">{degree}</div>
</div>
    
  );
};

export default Doctors;