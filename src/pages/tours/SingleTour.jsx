import { useParams } from "react-router-dom";

import { toursList } from "../../data";
import { Rating } from "../../components";

import "./SingleTour.css";

import BookNow from "./BookNow";

const SingleTour = () => {
  const { id } = useParams();

  const tour = toursList.find((t) => t.id === parseInt(id));

  return (
    <section className="tour">
      <div className="tour-step">
        United Arab Emirates <i className="bi bi-chevron-right"></i>
        Things to do in Dubai <i className="bi bi-chevron-right"></i> <span>Safari</span>
      </div>
      <div className="tour-category">Advanture</div>
      <h1 className="tour-title">Dubai: {tour.title}</h1>
      <div className="tour-info">
        <Rating rating={tour.rating} reviews={tour.reviews} />
        <div className="tour-provider">
          Activity Provider : <span>OMAR DIAB</span>
        </div>
      </div>
      <div className="tour-img-wrapper">
        <img src={tour.image} alt={tour.title} className="tour-img" />
        <BookNow priceFrom={tour.priceFrom} />
      </div>
      <p className="tour-description">
        Discover a different side of Dubai an a fun-filled safari across the
        desert. Try sandboarding, dune bashing and a camel ride, with the option
        to add an electifying quad bike ride or immersive Al Khayma Camp dinner
        experience to your adventure.
      </p>
      <div className="tour-more-information">
        <h2 className="tour-info-title">About this activity</h2>
        <div className="tour-info-item">
          <div className="tour-info-item-title">
            <i className="bi bi-calendar3"></i>
            <span>Free Cancellation</span>
          </div>
          <p className="tour-info-item-desc">
            Cancel up to 24 hours in advance to recieve a full refund
          </p>
        </div>
        <div className="tour-info-item">
          <div className="tour-info-item-title">
            <i className="bi bi-calendar-plus-fill"></i>
            <span>Reserve now & pay later</span>
          </div>
          <p className="tour-info-item-desc">
            Keep your travel plan flexible -- book your spot and pay nothing today.
          </p>
        </div>
        <div className="tour-info-item">
          <div className="tour-info-item-title">
            <i className="bi bi-virus"></i>
            <span>Covid -19 precautions</span>
          </div>
          <p className="tour-info-item-desc">
            Special health and safety measures are in the place. Check your activity voucher once you book for full details
          </p>
        </div>
        <div className="tour-info-item">
          <div className="tour-info-item-title">
            <i className="bi bi-clock-history"></i>
              <span>Duration 4 - 7 hours</span>
          </div>
          <p className="tour-info-item-desc">
            Check availability to see staring times.
          </p>
        </div>
        <div className="tour-info-item">
          <div className="tour-info-item-title">
            <i className="bi bi-person-check"></i>
              <span>Live tour guide</span>
          </div>
          <p className="tour-info-item-desc">
            English
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleTour;
