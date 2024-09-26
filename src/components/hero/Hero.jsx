import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="overlay">
        <div className="search-box">
          <div className="input-wrapper">
            <i className="bi bi-search icon"></i>
            <input
              className="search-box-input"
              type="search"
              placeholder="Search for fast look!"
            />
          </div>
          <button className="search-box-btn">Search</button>
        </div>
        <div className="hero-text">
          <div className="hero-title">
            <h2>Dubai</h2>
            <h1>Desert Safaris</h1>
          </div>
          <p className="hero-desc">
            Experience the thrill of the desert with our guided safaris.
            Discover stunning landscapes, enjoy camel rides, and immerse
            yourself in the rich culture of Dubai.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
