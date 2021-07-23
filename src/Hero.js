import React from "react";
import bannerImg from "./images/banner-image.png";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Secure IT Solutions Services</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="getStarted-btn-1">Get Started</button>
        </article>
        <article className="hero-images">
          <img src={bannerImg} className="banner-img" alt="banner image" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
