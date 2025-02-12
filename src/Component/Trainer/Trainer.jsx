import React from 'react';
import { NavLink } from 'react-router-dom';
import './Trainer.css';

const Trainer = ({ name, image, insta, twitter, yt, id }) => {
  return (
    <NavLink to={`/staff/${id}`} target="_blank" className="card">
      {image ? (
        <img src={image} alt={`${name}'s profile`} className="trainer-image" />
      ) : (
        <p className="text-red-500">Image not available</p>
      )}
      <h2 className="trainer-name">{name || "Name not provided"}</h2>
      <div className="images-card">
        {yt && (
          <a
            href={`https://www.youtube.com/${yt}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="cursor-pointer" src={yt} alt="YouTube" />
          </a>
        )}
        {insta && (
          <a
            href={`https://www.instagram.com/${insta}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="cursor-pointer" src={insta} alt="Instagram" />
          </a>
        )}
        {twitter && (
          <a
            href={`https://twitter.com/${twitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="cursor-pointer" src={twitter} alt="Twitter" />
          </a>
        )}
      </div>
    </NavLink>
  );
};

export default Trainer;





// This is a full-stack gym management application built using the MERN stack (MongoDB, Express, React, Node.js). The app allows users to register, log in, and manage their fitness routines. It includes features such as workout tracking, progress monitoring, and a user-friendly interface for managing gym memberships and schedules. 

// Key Features:
// - User authentication (Sign up / Log in)
// - Workout tracking and progress visualization
// - Membership management
// - Responsive design for both desktop and mobile devices