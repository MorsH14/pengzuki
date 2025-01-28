import "./carousel.css"
import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    { image: "/assets/n2.png", text: "Pengzuki is a unique collection of NFTs that combines stunning artwork with a compelling narrative. Each Pengzuki is a one-of-a-kind digital collectible, carefully crafted to provide a unique experience for its owner." },
    { image: "/assets/n3.png", text: "Pengzuki is a unique collection of NFTs that combines stunning artwork with a compelling narrative. Each Pengzuki is a one-of-a-kind digital collectible, carefully crafted to provide a unique experience for its owner." },
    { image: "/assets/n4.png", text: "Pengzuki is a unique collection of NFTs that combines stunning artwork with a compelling narrative. Each Pengzuki is a one-of-a-kind digital collectible, carefully crafted to provide a unique experience for its owner." },
    { image: "/assets/n1.png", text: "Pengzuki is a unique collection of NFTs that combines stunning artwork with a compelling narrative. Each Pengzuki is a one-of-a-kind digital collectible, carefully crafted to provide a unique experience for its owner." },
  ];

  // Automatically cycle through the list every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [data.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <h2>THE PENGZUKIS CLUB</h2>
      <div className="content">
        <img
          src={data[currentIndex].image}
          alt={`Slide ${currentIndex}`}
          className="image"
        />
        <p className="text">{data[currentIndex].text}</p>
      </div>
      <div className="controls">
        <button onClick={prevSlide} className="arrow">
          &#8592;
        </button>
        <button onClick={nextSlide} className="arrow">
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
