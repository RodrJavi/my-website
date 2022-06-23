import React from "react";
import Button from "./Button"
import {Icon} from "@iconify/react"

const Intro = () => {
  return <div className="hero-container">
    <div className="hero-card">
      <span className="hero-name">Javier.</span>
      <span className="hero">Web Developer.</span>
    </div>

    <div className="name-buttons">
      <Button text="See my Work"></Button>
      <Button text="Get in touch" outline="outline"></Button>
    </div>

    <div>
    <Icon className="icons" icon="mdi:github"></Icon>
    <Icon className="icons" icon="mdi:linkedin"></Icon>
    <Icon className="icons" icon="mdi:instagram"></Icon>
    </div>

  </div>;
};

export default Intro;
