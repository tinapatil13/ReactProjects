const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          Buy sports shoes, slippers, clogs, sneakers, formal shoes from Nike{" "}
        </p>
    
      <div className="hero-btn">
        <button>Shop Now</button>
        <button className="secondary-btn">Catergory</button>
      </div>
      <div className="shopping">
        <p>Also Available On</p>

        <div className="brand-icons">
            <img src="/img/amazon.png" alt="amazon-logo" />
            <img src="/img/flipkart.png" alt="flipkart-logo" />
        </div>
      </div>
      </div>
      <div className="hero-img">
        <img src="/img/shoe.jpg" alt="hero-img" />
      </div>
    </main>
  );
};
export default HeroSection;
