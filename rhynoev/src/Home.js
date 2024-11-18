import React, { useState, useEffect } from 'react';
import './Home.css';

// List of USP points
const uspPoints = [
  {
    title: 'LFP Battery',
    description: `Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries,
    renowned for their safety features—eliminating the risk of fire associated with other
    Lithium batteries. These batteries boast a broader temperature range, ideal for the
    diverse Indian climate. Our technology enhances Rhyno's longevity, complemented
    by an Active Balancing Smart Battery Management System (BMS) for extended life
    and reduced maintenance. Each battery undergoes rigorous waterproofing tests
    according to IP76 standards. But it doesn't stop there—our technology goes the extra
    mile in ensuring the battery's lasting durability. Connect with us to discover the
    thoughtful engineering behind our batteries!`
  },
  {
    title: 'Wider tyres',
    description: `Now, say goodbye to skidding and embrace the leaning turns!
    Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous
    beast that ensures stability on different terrains such as wet roads, mud, and sand.`
  },
  {
    title: 'Range prediction',
    description: `Many budget-friendly electric scooters overlook this crucial
    feature, causing riders to experience range anxiety. With Rhyno, you can ride with
    peace of mind, thanks to the scooter providing precise information about the
    remaining battery.`
  },
  {
    title: 'Extraordinary Experience',
    description: `Rhyno is more than just a mode of transportation. It is
    an experience of sheer comfort and style! A seamless fusion of minimalism,
    sophistication, and a touch of masculinity!`
  },
  {
    title: 'Rugged and simple Design',
    description: `We’ve had enough of the EVs looking and feeling like
    fragile plastic toys. Often fading out and shamelessly breaking in minor accidents,
    ending up spending weeks and months at service stations for complex repairs. We
    took a bold step of making something raw, rugged, and practical. We kept it so
    simple that even your trusted local mechanic can understand and repair most of it. If
    you have reached this far, why not take a test ride? Click here to locate your
    nearest dealership or book a test ride at your home!`
  }
];

const Home = () => {
  const [currentWord, setCurrentWord] = useState('Elegance');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => {
        const words = ['Elegance', 'Minimalism', 'Comfort'];
        const currentIndex = words.indexOf(prev);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(wordInterval); // Cleanup on component unmount
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % uspPoints.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + uspPoints.length) % uspPoints.length);
  };

  return (
    <div className="home">
      <section className="hero-box">
        <video className="background-video" autoPlay loop muted>
          <source src={require('./video3.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h2>
            Let's Elevate Your Ride Experience With Rhyno – Where Superiority Meets
            <span id="changing-word"> {currentWord}</span>
          </h2>
        </div>
      </section>
      
      {/* New image section */}
      <section className="moto-image">
        <img src={require('./Image1.jpg')} alt="Moto" />
      </section>

      <section className="usp">
        <div className="usp-container">
          <h3>{uspPoints[currentIndex].title}</h3>
          <p>{uspPoints[currentIndex].description}</p>
        </div>
        <div className="usp-nav">
          <button onClick={handlePrev} className="usp-button">Previous</button>
          <button onClick={handleNext} className="usp-button">Next</button>
        </div>
      </section>
      
      <section className="our-products">
        <h3>Our Products</h3>
        <div className="product-images">
          <img src={require('./image3.jpg')} alt="Product 1" />
          <img src={require('./image2.jpg')} alt="Product 2" />
          <img src={require('./image11.jpg')} alt="Product 3" />
        </div>
      </section>
    </div>
  );
};

export default Home;
