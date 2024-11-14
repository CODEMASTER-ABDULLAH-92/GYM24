import React from 'react'
import './Join.css'
import { reasonToJoin } from '../../assets/assets'
const Join = () => {
  return (
    <div className='join text-white my-[100px]  max-w-[1400px]' id='join'>
        <h2 className='join-h2 text-[2.44rem] text-center'>Reasons To Join</h2>
<div className="join-list grid gap-2 sm:grid-cols-2 grid-cols-1">
        {
            reasonToJoin.map((item,index)=>{
                return (
                    <div className='join-flex flex gap-2 my-10' key={index}>
                        <div className="mini-join">
                            <img src={item.image} className='join-width' alt="" />
                        </div>
                        <div className="mini-join-text">
                            <h2 className='text-xl font-semibold text-red-400'>{item.heading}</h2>
                            <p className='text-balance min-w-full'>{item.text}</p>
                        </div>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Join;
