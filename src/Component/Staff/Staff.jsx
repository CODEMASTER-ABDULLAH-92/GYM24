import React from "react";
import Trainer from "../Trainer/Trainer";
import useTrainerData from "../../assets/assets"; // Ensure the correct path
import "./Staff.css";

const Staff = () => {
  const data = useTrainerData(); // Store the full return value
  console.log("useTrainerData return value:", data);

  if (!data) {
    console.error("❌ useTrainerData is undefined!");
    return <p>Error loading trainers</p>;
  }

  const { trainer } = data;
  console.log("Trainer Data:", trainer); // Check if trainer is correctly extracted

  return (
    <div className="staff" id="staff">
      <h2 className="Trainer-heading">Trainers Staff</h2>
      <div className="mini-staff">
        {trainer && trainer.length > 0 ? (
          trainer.map((item, index) => (
            <div className="main_Staff cursor-pointer" key={index}>
              <Trainer
                image={item.image}
                name={item.name}
                yt={item.yt}
                twitter={item.twitter}
                insta={item.instagram}
                id={item._id}
              />
            </div>
          ))
        ) : (
          <p className="text-white">Loading trainers...</p>
        )}
      </div>
    </div>
  );
};

export default Staff;

