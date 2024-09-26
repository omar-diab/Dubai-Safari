import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="service-item">
        <div className="service-text">
          <i className="bi bi-card-image icon"></i>
          <span>Adventures</span>
        </div>
      </div>
      <div className="service-item">
        <div className="service-text">
          <i className="bi bi-people-fill icon"></i>
          <span>Family tours</span>
        </div>
      </div>
      <div className="service-item">
        <div className="service-text">
          <i className="bi bi-building icon"></i>
          <span>City cards</span>
        </div>
      </div>
      <div className="service-item">
        <div className="service-text">
          <i className="bi bi-globe icon"></i>
          <span>Multi-day trips</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
