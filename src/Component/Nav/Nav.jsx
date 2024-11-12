      
      import React, { useState } from 'react'
      import { Link } from 'react-router-dom';
      import { asset } from '../../assets/assets'
      const Nav = () => {
        const [visible,setVisible] = useState(true);
        const [move,setMove] = useState("Advantages");
        return (
          <div className='relative'>
          <div className={`flex justify-between items-center text-white px-[1vw] sm:px-[4vw] md:px-[7vw] lg:px-[9vw] py-8 ${visible ? "": "bg-[radial-gradient(circle_at_24.1%_68.8%,_rgb(50,50,50)_0%,_rgb(0,0,0)_99.4%)]"} `}>
      <Link to="/"><img src={asset.logo} alt="" /> </Link> 
      <ul className='flex justify-center items-center gap-6 text-[20px]'>
                   <a className='sm:block hidden' href="#join">Advantages</a>
                   <a className='sm:block hidden' href='#meme'>MemberShip</a>
                   <a className='sm:block hidden' href='#about'>About</a>
                   <a className='sm:block hidden' href='#staff'>Trainers</a>
                   <li><img src={visible ? asset.burger:asset.cross} className='sm:hidden block w-8 h-8' alt="" onClick={()=>setVisible(!visible)} /></li>
      </ul>
    </div>
    <div className={`min-h-screen flex flex-col justify-start items-center  bg-[radial-gradient(circle_at_24.1%_68.8%,_rgb(50,50,50)_0%,_rgb(0,0,0)_99.4%)] ${visible ? 'hidden':'block absolute z-10 top-0 pt-20 min-w-full '}`}>
      <img src={asset.cross} className={`w-8 h-8 absolute right-7 top-8`} onClick={()=>setVisible(!visible)} alt="" />
      <ul>
                  <a className={`sm:hidden block text-white text-[28px] text-center ${move === "Advantages"?"text-blue-500":""}`} onClick={()=>setVisible(!visible)} href="#join" onMouseMove={()=>setMove("Advantages")} >Advantages</a>
                  <a className={`sm:hidden block text-white text-[28px] text-center ${move === "About"?"text-blue-500":""}`} onClick={()=>setVisible(!visible)} href='#about' onMouseMove={()=>setMove("About")}>About</a>
                  <a className={`sm:hidden block text-white text-[28px] text-center ${move === "MemberShip"?"text-blue-500":""}`} onClick={()=>setVisible(!visible)} href='#meme' onMouseMove={()=>setMove("MemberShip")}>MemberShip</a>
                  <a className={`sm:hidden block text-white text-[28px] text-center ${move === "Trainers"?"text-blue-500":""}`} onClick={()=>setVisible(!visible)} href='#staff' onMouseMove={()=>setMove("Trainers")}>Trainers</a>
      </ul>
    </div>
          </div>
  )
}

export default Nav
