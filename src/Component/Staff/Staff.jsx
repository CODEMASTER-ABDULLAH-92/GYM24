import { trainer } from "../../assets/assets";
import Trainer from "../Trainer/Trainer";
import "./Staff.css"
const Staff = () => {
  return (
    <div className="staff" id="staff">
      <h2 className="Trainer-heading">Trainers Staff</h2>
      <div className="mini-staff">
      {trainer.map((item, index) => {
        return (
          <div className="main_Staff cursor-pointer" key={index}>
            <Trainer
              image={item.image}
              name={item.name}
              yt={item.yt}
              twitter={item.twitter}
              insta={item.instagram}
            />
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Staff;
