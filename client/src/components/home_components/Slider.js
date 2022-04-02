import { Carousel } from "bootstrap";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Slider = ({ SliderData }) => {
  // states
  const [currentSlide, setCurrentSlide] = useState(0);
  // event handlers
  const nextSlide = () => {
    if (currentSlide >= SliderData.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide <= 0) {
      setCurrentSlide(SliderData.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="slider">
      <FontAwesomeIcon onClick={prevSlide} size="1x" icon={faAngleLeft} />
      <FontAwesomeIcon onClick={nextSlide} size="1" icon={faAngleRight} />
      {SliderData.map((slide, index) => {
        return (
          <>
            {currentSlide === index && (
              <div
                className={currentSlide === index ? "slide current" : "slide"}
              >
                <img src={slide.image} alt="slide" />
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Slider;
