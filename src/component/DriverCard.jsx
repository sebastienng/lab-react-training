import './drivercard.css';
import { Rating } from './Rating';

export const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="driver-card-display">
      <div className="driver-picture">
        <img src={img} alt="profile" />
      </div>
      <div className="driver-info">
        <div className="driver-name">{name}</div>
        <div className="rating">
          <Rating>{rating}</Rating>
        </div>
        <div className="car-info">
          {car.model} - {car.licensePlate}
        </div>
      </div>
    </div>
  );
};
