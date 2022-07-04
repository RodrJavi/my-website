import Image from "next/image";

const AboutMePicture = () => {
  return (
    <div className="about-me-pic-container">
      <div className="about-me-parent">
        <Image
          className="about-me-pic"
          src="/pictures/about_me_new.jpg"
          alt=""
          width="400px"
          height="450px"
        />
      </div>
      <span className="dot top-dot"></span>
      <span className="dot bottom-dot"></span>
    </div>
  );
};

export default AboutMePicture;
