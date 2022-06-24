import Button from "./Button"
import {Icon} from "@iconify/react"
import HeroPicture from "./HeroPicture";

const Intro = () => {
  return <div className="hero-container">
    <div>
      <div className="hero-card">
        <span className="hero-name">Javier.</span>
        <span className="hero">Web Developer.</span>
      </div>

      <div className="name-buttons">
        <Button className="hero-button">See my Work</Button>
        <Button className="hero-button" outline="outline">Get in touch</Button>
      </div>

      <div className="icon-container">
        <Icon className="icons" icon="mdi:github"></Icon>
        <Icon className="icons" icon="mdi:linkedin"></Icon>
        <Icon className="icons" icon="mdi:instagram"></Icon>
      </div>
    </div>

    <HeroPicture></HeroPicture>

  </div>;
};

export default Intro;
