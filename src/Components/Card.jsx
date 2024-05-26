import React from "react";

function Card ({title, image, description, circleColor}) {
    const showAlert = (msg) => {
        alert(msg);
    }

    return (
        <div className="bg-white opacity-90 px-4 py-8 items-center max-w-sm flex flex-col gap-2 border border-gray-700 rounded-xl">
            <div className={`w-12 h-12 bg-${circleColor}-300 rounded-full flex items-center justify-center`}>
                <img src={image} alt={title} className="h-8 w-8" /> {/* Adjust height and width as needed */}
            </div>

            <div className="font-bold text-xl" onClick={() => showAlert(title)}>
                {title}
            </div>

            <div className="text-gray-500">
                {description}
            </div>
        </div>
    );
}

export default Card;
