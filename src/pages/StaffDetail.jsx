import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { trainer } from '../assets/assets';

const StaffDetail = () => {
  const [data, setData] = useState(null); // Initialize as null instead of an empty array
  const { id } = useParams(); // Get the id from the URL parameters

  const fetchData = () => {
    // Use find() instead of map() to retrieve a single matching item
    const trainerData = trainer.find((item) => item._id === id);
    if (trainerData) {
      setData(trainerData);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>; // Show loading until data is fetched
  }

  return (
    <div className="px-[2vw] sm:px-[4vw] md:px-[6vw] lg:px-[8vw] xl:px-[10vw] flex lg:flex-row flex-col  gap-10 py-10">
      {/* Render image only if data is available */}
      <div className='flex  justify-center items-center'>


      {data.image && (
        <img
          src={data.image}
          className="min-w-[500px] h-[500px] object-cover object-center rounded-lg mb-6"
          alt={data.name}
        />
      )}
      </div>

      <div className='text-white'>
        <h1 className="text-2xl font-semibold mb-4">{data.name}</h1>
        <p className="text-lg mb-4">{data.description}</p>

        {/* Render abilities list */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Abilities:</h2>
          <ul className="list-disc pl-5 text-white">
            {data.abilities && data.abilities.map((item, index) => (
              <li key={index} className="text-white">{item}</li>
            ))}
          </ul>
        </div>

        {/* Render shifts list */}
        <div>
          <h2 className="text-xl font-semibold">Shifts:</h2>
          <ul className="list-disc pl-5">
            {data.shifts && data.shifts.map((item, index) => (
              <li key={index} className="text-white">{item}</li>
            ))}
          </ul>
        </div>
        <h1>Experince</h1>
        <li>{data.experience}</li>
        <div className='flex gap-4 py-4'>
            <img src={data.yt} alt="" />
            <img src={data.instagram} alt="" />
            <img src={data.twitter} alt="" />
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