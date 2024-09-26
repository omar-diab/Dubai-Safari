
const Rating = ({ rating, reviews }) => {
  return (
    <div>
      <div className="ratings">
        <div className="rating">
          {rating >= 1 ? (
            <i className="bi bi-star-fill"></i>
          ) : rating >= 0.5 ? (
            <i className="bi bi-star-half"></i>
          ) : (
            <i className="bi bi-star"></i>
          )}
        </div>
        <div className="rating">
          {rating >= 2 ? (
            <i className="bi bi-star-fill"></i>
          ) : rating >= 1.5 ? (
            <i className="bi bi-star-half"></i>
          ) : (
            <i className="bi bi-star"></i>
          )}
        </div>
        <div className="rating">
          {rating >= 3 ? (
            <i className="bi bi-star-fill"></i>
          ) : rating >= 2.5 ? (
            <i className="bi bi-star-half"></i>
          ) : (
            <i className="bi bi-star"></i>
          )}
        </div>
        <div className="rating">
          {rating >= 4 ? (
            <i className="bi bi-star-fill"></i>
          ) : rating >= 3.5 ? (
            <i className="bi bi-star-half"></i>
          ) : (
            <i className="bi bi-star"></i>
          )}
        </div>
        <div className="rating">
          {rating >= 5 ? (
            <i className="bi bi-star-fill"></i>
          ) : rating >= 4.5 ? (
            <i className="bi bi-star-half"></i>
          ) : (
            <i className="bi bi-star"></i>
          )}
        </div>
      </div>
      <div className="reviews">
        <p>{rating}</p>
        <p>({reviews} reviews)</p>
      </div>
    </div>
  );
};

export default Rating;
