import "./NewsLetter.css";

import NewsLetterImage from "../../images/newsletterimage.jpg";

const NewsLetter = () => {
  return (
    <div className="news-letter">
      <div className="news-letter-container">
        <div className="news-letter-image-wrapper">
          <img
            src={NewsLetterImage}
            alt="news-letter"
            className="news-letter-image"
          />
        </div>
        <div className="news-letter-content">
          <h2 className="news-letter-title">Your Dubai itinerary is waiting</h2>
          <p className="news-letter-desc">
            Recieve a created 48-hours initnerary featuring the most iconic
            experience in Dubai, straight to your inbox.
          </p>
          <div className="news-letter-form">
            <input type="text" placeholder="Enter Email" className="news-letter-input"/>
            <button className="news-letter-btn">
                Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
