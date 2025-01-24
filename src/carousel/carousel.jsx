import "./carousel.css"
import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    { image: "/assets/n2.png", text: "Picture 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolore reiciendis recusandae a incidunt hic, libero possimus, laborum expedita necessitatibus magni nesciunt ex debitis, nihil amet? Nemo, minus velit? Molestias!" },
    { image: "/assets/n3.png", text: "Picture 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolore reiciendis recusandae a incidunt hic, libero possimus, laborum expedita necessitatibus magni nesciunt ex debitis, nihil amet? Nemo, minus velit? Molestias!" },
    { image: "/assets/n4.png", text: "Picture 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolore reiciendis recusandae a incidunt hic, libero possimus, laborum expedita necessitatibus magni nesciunt ex debitis, nihil amet? Nemo, minus velit? Molestias!" },
    { image: "/assets/n1.png", text: "Picture 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolore reiciendis recusandae a incidunt hic, libero possimus, laborum expedita necessitatibus magni nesciunt ex debitis, nihil amet? Nemo, minus velit? Molestias!" },
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
