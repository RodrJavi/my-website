import Image from "next/image";

const AboutMePicture = () => {
  return (
    <div className="about-me-pic-container">
      <Image
        className="about-me-pic"
        src="/pictures/about_me_new.jpg"
        alt=""
        width="400px"
        height="450px"
      />
      <span className="dot top-dot"></span>
      <span className="dot bottom-dot"></span>
    </div>
  );
};

export default AboutMePicture;
