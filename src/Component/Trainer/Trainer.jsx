import './Trainer.css'
const Trainer = ({name,image,insta,twitter,yt}) => {
  return (
    <div className="card">
      <img src={image} alt="" className='trainer-image' />
      <h2 className='trainer-name'>{name}</h2>
      <div className="images-card">
        <a href="/"><img className='cursor-pointer' src={yt} alt="" /></a>
        <a href="/"><img className='cursor-pointer' src={insta} alt="" /></a>
        <a href="/"><img className='cursor-pointer' src={twitter} alt="" /></a>
      </div>
    </div>
  )
}

export default Trainer




// This is a full-stack gym management application built using the MERN stack (MongoDB, Express, React, Node.js). The app allows users to register, log in, and manage their fitness routines. It includes features such as workout tracking, progress monitoring, and a user-friendly interface for managing gym memberships and schedules. 

// Key Features:
// - User authentication (Sign up / Log in)
// - Workout tracking and progress visualization
// - Membership management
// - Responsive design for both desktop and mobile devices