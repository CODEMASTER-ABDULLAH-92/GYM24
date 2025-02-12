import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useTrainerData, { asset } from '../assets/assets';

const StaffDetail = () => {
  const [data, setData] = useState(null); // Initialize as null instead of an empty array
  const { id } = useParams(); // Get the id from the URL parameters
  const { trainer } = useTrainerData();

  const fetchData = () => {
    const trainerData = trainer.find((item) => item._id === id);
    if (trainerData) {
      setData(trainerData);
    } else {
      setData(null); // If no matching trainer, set data to null
    }
  };

  useEffect(() => {
    fetchData();
  }, [id, trainer]); // Added `trainer` to the dependencies to reload if trainer data changes

  if (!data) {
    return <div className='text-white'>Loading...</div>; // Show loading until data is fetched
  }

  return (
    <div className="px-[2vw] sm:px-[4vw] md:px-[6vw] lg:px-[8vw] xl:px-[10vw] flex lg:flex-row flex-col gap-10 py-10">
      {/* Render image only if data is available */}
      <div className='flex justify-center items-center'>
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
          <ul className="list-disc pl-5">
            {data.abilities && data.abilities.map((item, index) => (
              <li key={index} className="text-white">{item}</li>
            ))}
          </ul>
        </div>

        {/* Render shifts list */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Shifts:</h2>
          <ul className="list-disc pl-5">
            {data.shifts && data.shifts.map((item, index) => (
              <li key={index} className="text-white">{item}</li>
            ))}
          </ul>
        </div>

        {/* Render experience */}
        {data.experience && (
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Experience:</h2>
            <p className="text-white">{data.experience}</p>
          </div>
        )}

        {/* Social Media Links */}
        <div className='flex gap-4 py-4'>
          {
data.yt && <a href={data.yt} className='cursor-pointer'><img src={asset.youtube} alt="YouTube" /> </a>
          }
          {data.instagram && <a href={data.instagram} className='cursor-pointer'><img src={asset.insta} alt="YouTube" /> </a>}
          {data.twitter && <a href={data.twitter} className='cursor-pointer'><img src={asset.twitter} alt="YouTube" /> </a>}
        </div>
      </div>
    </div>
  );
};

export default StaffDetail;
