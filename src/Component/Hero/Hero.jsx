import React from 'react';
import { Link } from 'react-router-dom';
import { asset } from '../../assets/assets';
import "./Hero.css"
const Hero = () => {
  return (
    <div className=" hero">
      <img src={asset.b2} alt="" />
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
