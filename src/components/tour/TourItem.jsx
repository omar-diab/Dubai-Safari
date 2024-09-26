import { Link } from "react-router-dom";
import Rating from "./Rating";

const TourItem = ({ item }) => {
  return (
    <div className="tour-item">
      <img src={item.image} alt={item.title} className="tour-img" />
      <div className="tour-body">
        <h2 className="tour-title">{item.title}</h2>
        <div className="tour-duration">
          <span>{item.duration}</span>
          <i className="bi bi-dot"></i>
          Pickup available
        </div>
        <Rating rating={item.rating} reviews={item.reviews} />
        <div className="tour-price">
          From <strong>${item.priceFrom}</strong> per person
          <Link to={`/tour/${item.id}`} className="tour-link">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourItem;
