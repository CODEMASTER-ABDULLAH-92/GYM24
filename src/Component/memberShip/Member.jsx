import { memberShip } from '../../assets/assets'
import MemCard from '../MemberCard/MemCard'
import './Member.css'
const Member = () => {
  return (
    <div id='meme'>
      <h2 className='me-heading'>Gym Membership</h2>
      <div className="membership-main">
        {
          memberShip.map((item,index)=>{
            return (
              <div className="membership-mini min-h-96" key={index}>
                <MemCard image={item.image} tick={item.tick} text={item.text} t1={item.t1} t2={item.t2} t3={item.t3} t4={item.t4} t5={item.t5}  yelo={item.yelo} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Member
