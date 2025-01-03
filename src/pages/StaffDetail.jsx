// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { trainer } from '../assets/assets';

// const StaffDetail = () => {
//   const [data, setData] = useState(null); // Initialize as null instead of an empty array
//   const { id } = useParams(); // Get the id from the URL parameters

//   const fetchData = () => {
//     // Use find() instead of map() to retrieve a single matching item
//     const trainerData = trainer.find((item) => item._id === id);
//     if (trainerData) {
//       setData(trainerData);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [id]);

//   if (!data) {
//     return <div>Loading...</div>; // Show loading until data is fetched
//   }

//   return (
//     <div className="px-[2vw] sm:px-[4vw] md:px-[6vw] lg:px-[8vw] xl:px-[10vw] flex lg:flex-row flex-col  gap-10 py-10">
//       {/* Render image only if data is available */}
//       <div className='flex  justify-center items-center'>


//       {data.image && (
//         <img
//           src={data.image}
//           className="min-w-[500px] h-[500px] object-cover object-center rounded-lg mb-6"
//           alt={data.name}
//         />
//       )}
//       </div>

//       <div className='text-white'>
//         <h1 className="text-2xl font-semibold mb-4">{data.name}</h1>
//         <p className="text-lg mb-4">{data.description}</p>

//         {/* Render abilities list */}
//         <div className="mb-4">
//           <h2 className="text-xl font-semibold">Abilities:</h2>
//           <ul className="list-disc pl-5 text-white">
//             {data.abilities && data.abilities.map((item, index) => (
//               <li key={index} className="text-white">{item}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Render shifts list */}
//         <div>
//           <h2 className="text-xl font-semibold">Shifts:</h2>
//           <ul className="list-disc pl-5">
//             {data.shifts && data.shifts.map((item, index) => (
//               <li key={index} className="text-white">{item}</li>
//             ))}
//           </ul>
//         </div>
//         <h1>Experince</h1>
//         <li>{data.experience}</li>
//         <div className='flex gap-4 py-4'>
//             <img src={data.yt} alt="" />
//             <img src={data.instagram} alt="" />
//             <img src={data.twitter} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StaffDetail;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { trainer } from '../assets/assets';

const StaffDetail = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  const fetchData = () => {
    const trainerData = trainer.find((item) => item._id === parseInt(id, 10));
    if (trainerData) {
      setData(trainerData);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
        <h1 className="text-xl font-semibold">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-12 xl:px-16 py-10  text-white">
      <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
        {/* Image Section */}
        <div className="flex-shrink-0">
          {data.image && (
            <img
              src={data.image}
              className="w-80 h-80 lg:w-[500px] lg:h-[500px] object-cover object-center rounded-lg shadow-lg"
              alt={data.name}
            />
          )}
        </div>

        {/* Details Section */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
          <p className="text-lg mb-6">{data.description}</p>

          {/* Abilities Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Abilities:</h2>
            <ul className="list-disc pl-5 space-y-2">
              {data.abilities?.map((item, index) => (
                <li key={index} className="text-lg">{item}</li>
              ))}
            </ul>
          </div>

          {/* Shifts Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Shifts:</h2>
            <ul className="list-disc pl-5 space-y-2">
              {data.shifts?.map((item, index) => (
                <li key={index} className="text-lg">{item}</li>
              ))}
            </ul>
          </div>

          {/* Experience Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Experience:</h2>
            <p className="text-lg">{data.experience}</p>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4 mt-4">
            {data.yt && <img src={data.yt} alt="YouTube" className="w-10 h-10" />}
            {data.instagram && <img src={data.instagram} alt="Instagram" className="w-10 h-10" />}
            {data.twitter && <img src={data.twitter} alt="Twitter" className="w-10 h-10" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDetail;




// name: "Victoria Shurpik",
//         yt: youtube,
//         instagram: insta,
//         twitter: twitter,
//         experience: "5 years",
//         description: "Expert in yoga and mindfulness training.",
//         abilities: ["Yoga", "Meditation", "Flexibility"],
//         shifts: ["Day", "Night"],