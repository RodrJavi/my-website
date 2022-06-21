import React from "react";
import Button from "./Button"

const Intro = () => {
  return <div className="intro">
    <div>
      <h1>Javier.</h1>
      <br />
      <p>Web Developer.</p>
    </div>

    <div className="name-buttons">
      <Button text="See my Work"></Button>
      <Button text="Get in touch"></Button>
    </div>

  </div>;
};

export default Intro;
