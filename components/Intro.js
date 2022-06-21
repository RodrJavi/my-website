import React from "react";
import Button from "./Button"

const Intro = () => {
  return <div>
    <div className="hero-card">
      <span className="hero-name">Javier.</span>
      <span className="hero">Web Developer.</span>
    </div>

    <div className="name-buttons">
      <Button text="See my Work"></Button>
      <Button text="Get in touch" outline="outline"></Button>
    </div>

  </div>;
};

export default Intro;
