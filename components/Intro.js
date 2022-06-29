import Button from "./Button";
import { Icon } from "@iconify/react";
import HeroPicture from "./HeroPicture";

const Intro = () => {
  return (
    <div className="hero-container">
      <div>
        <div className="hero-card">
          <span className="hero-name">Javier.</span>
          <span className="hero">Web Developer.</span>
        </div>

        <div className="name-buttons">
          <Button link="#projects" className="hero-button" self>
            See my Work
          </Button>
          <Button link="#contact" className="hero-button" outline="outline" self>
            Get in touch
          </Button>
        </div>

        <div className="icon-container">
          <a
            className="icons"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/RodrJavi"
          >
            <Icon className="icons" icon="mdi:github"></Icon>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/rodriguezjavi/"
            className="icons"
          >
            <Icon className="icons" icon="mdi:linkedin"></Icon>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/the.yung.javi/"
            className="icons"
          >
            <Icon className="icons" icon="mdi:instagram"></Icon>
          </a>
        </div>
      </div>

      <HeroPicture></HeroPicture>
    </div>
  );
};

export default Intro;
