import React from 'react';
import { Link } from 'react-router-dom';
import { asset } from '../../assets/assets';
import "./Hero.css"
const Hero = () => {
  return (
    <div className=" hero">
      <img src={asset.b2} alt="" />
      <div className="hero-content">
        <h1 className='text-balance max-w-[60vw]'>Free Trial Session <br /> With a Trainer</h1>
        <Link to="/detail" className="sm:px-[40px] self-start px-[20px] py-[4px] sm:py-[12px] rounded-md text-[#747474] bg-yellow-300 text-[20px]">
          Detailed
        </Link>
      </div>
    </div>
  );
}

export default Hero;
