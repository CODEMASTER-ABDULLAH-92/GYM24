import React from 'react'
import "./MemCard.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'
const MemCard = ({image,text,t1,t2,t3,t4,t5,yelo}) => {
  const [first, setfirst] = useState(true)
  const toggle = ()=>{
    setfirst(!first)
  }
  return (
    <div className='memcard min-h-[420px]'>
      <h2 className='meme-Heading'>{text}</h2>
      <div className="para-mem1" onMouseEnter={()=>toggle()}> {first === true? <img src={image} alt=""  />: <img src={yelo} alt="" /> }<p>{t1}</p></div>
      <div className="para-mem1" onMouseEnter={()=>toggle()}> {first === true? <img src={image} alt=""  />: <img src={yelo} alt="" /> }<p>{t2}</p></div>
      <div className="para-mem1" onMouseEnter={()=>toggle()}> {first === true? <img src={image} alt=""  />: <img src={yelo} alt="" /> }<p>{t3}</p></div>
      <div className="para-mem1" onMouseEnter={()=>toggle()}> {first === true? <img src={image} alt=""  />: <img src={yelo} alt="" /> }<p>{t4}</p></div>
      <Link to="/buy:id" className='member-btn'>{t5}</Link>
    </div>
  )
}

export default MemCard;
