import React, { useState, useEffect } from "react";
import Slider from "../components/home_components/Slider";
const Home = ({ SliderData }) => {
  return (
    <div className="home">
      <div className="hero-content">
        <div className="slider-area">
          <Slider SliderData={SliderData} />
        </div>
        <div className="landing-store">
          <h2>Uniques Pieces</h2>
          <h1>Unbeatable Prices</h1>
          <button>Shop Now</button>
        </div>
      </div>
      <section className="category-section">
        <h1>Category</h1>
        <div style={{ backgroundImage: "url('')" }} className="Neckless">
          Neckless
        </div>
        <div className="all">All</div>
        <div className="Ear-rings">Ear rings</div>
      </section>
    </div>
  );
};
export default Home;
