// "use client";

// import { IoPersonOutline, IoCarSportOutline } from "react-icons/io5";

// const VehicleCard = ({ vehicle }) => {
//   return (
//     <div className="group bg-white rounded-md shadow-md overflow-hidden hover:shadow-xl transition duration-300">
//       {/* Image */}
//       <div className="relative">
//         <img
//           src={vehicle.image}
//           alt={vehicle.name}
//           className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
//         />

//         {/* Badge */}
//         <span className="absolute top-3 left-3 bg-[#4d7c9c] text-white text-xs font-semibold px-3 py-1 rounded-full">
//           With Driver
//         </span>
//       </div>

//       {/* Content */}
//       <div className="p-5 space-y-3">
//         <h3 className="text-xl font-bold text-gray-900">{vehicle.name}</h3>

//         <p className="text-gray-600 text-sm leading-relaxed">
//           {vehicle.description}
//         </p>

//         {/* Icons info */}
//         <div className="flex items-center gap-4 text-sm text-gray-500 pt-2">
//           <div className="flex items-center gap-1">
//             <IoCarSportOutline className="text-[#4d7c9c]" />
//             <span>AC Vehicle</span>
//           </div>
//           <div className="flex items-center gap-1">
//             <IoPersonOutline className="text-[#4d7c9c]" />
//             <span>Professional Driver</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VehicleCard;

"use client";

import { IoPersonOutline, IoCarSportOutline } from "react-icons/io5";

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="group bg-white rounded-md shadow-md overflow-hidden hover:shadow-xl transition duration-300 h-full flex flex-col">
      {/* Image */}
      <div className="relative">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Badge */}
        <span className="absolute top-3 left-3 bg-[#4d7c9c] text-white text-xs font-semibold px-3 py-1 rounded-full">
          With Driver
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{vehicle.name}</h3>

          <p className="text-gray-600 text-sm leading-relaxed mt-2">
            {vehicle.description}
          </p>
        </div>

        {/* Icons info */}
        <div className="flex items-center gap-4 text-sm text-gray-500 pt-4">
          <div className="flex items-center gap-1">
            <IoCarSportOutline className="text-[#4d7c9c]" />
            <span>AC Vehicle</span>
          </div>
          <div className="flex items-center gap-1">
            <IoPersonOutline className="text-[#4d7c9c]" />
            <span>Professional Driver</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
