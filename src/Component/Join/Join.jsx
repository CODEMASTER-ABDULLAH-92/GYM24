import React from 'react'
import './Join.css'
import { reasonToJoin } from '../../assets/assets'
const Join = () => {
  return (
    <div className='join' id='join'>
        <h2 className='join-h2'>Reasons To Join</h2>
<div className="join-list">
        {
            reasonToJoin.map((item,index)=>{
                return (
                    <div className='join-flex' key={index}>
                        <div className="mini-join">
                            <img src={item.image} className='join-width' alt="" />
                        </div>
                        <div className="mini-join-text">
                            <h2>{item.heading}</h2>
                            <p>{item.text}</p>
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
