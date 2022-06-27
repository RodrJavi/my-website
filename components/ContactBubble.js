import { Icon } from "@iconify/react";
import Image from "next/image";

const ContactBubble = () => {
  return (
    <div className="contact-bubble">
      <div className="image-parent">
        <Image
          className="contact-pic"
          src="/contact.jpg"
          alt=""
          width="120px"
          height="120px"
        />
      </div>
      <div className="contact-body">
        <h2>Javier Rodriguez</h2>
        <span>Web Developer</span>

        <div className="icon-container">
          <a className="icons" href="https://github.com/RodrJavi">
            <Icon className="icons" icon="mdi:github"></Icon>
          </a>
          <a href="https://www.linkedin.com/in/rodriguezjavi/" class="icons">
            <Icon className="icons" icon="mdi:linkedin"></Icon>
          </a>
          <a href="https://www.instagram.com/the.yung.javi/" class="icons">
            <Icon className="icons" icon="mdi:instagram"></Icon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactBubble;
