import React from 'react';
import { Link } from 'react-router-dom';
import "./Hero.css"
const Hero = () => {
  return (
    <div className=" hero">
      <div className="hero-content">
        <h1>Free Trial Session With a Trainer</h1>
        <Link to="/detail" className="px-[40px] py-[12px] rounded-md text-[#747474] bg-yellow-300 text-[20px]">
          Detailed
        </Link>
      </div>
    </div>
  );
}

export default Hero;
