import { Icon } from "@iconify/react";
import Image from "next/image";

const ContactBubble = () => {
  return (
    <div className="contact-bubble">
      <div className="image-parent">
        <Image
          className="contact-pic"
          src="/pictures/contact.jpg"
          alt=""
          width="120px"
          height="120px"
        />
      </div>
      <div className="contact-body">
        <h2>Javier Rodriguez</h2>
        <span>Web Developer</span>

        <div className="icon-container">
          <a
            className="icons"
            target="_blank"
            href="https://github.com/RodrJavi"
            rel="noreferrer"
          >
            <Icon className="icons" icon="mdi:github" />
          </a>
          <a
            href="https://www.linkedin.com/in/rodriguezjavi/"
            className="icons"
          >
            <Icon className="icons" target="_blank" icon="mdi:linkedin" />
          </a>
          <a
            rel="noreferrer"
            href="https://www.instagram.com/the.yung.javi/"
            className="icons"
          >
            <Icon className="icons" target="_blank" icon="mdi:instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactBubble;
