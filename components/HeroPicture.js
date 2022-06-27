import Image from "next/image";

const HeroPicture = () => {
  return (
    <div className="picture-container">
      <span className="dot tr"></span>
      <span className="dot tl"></span>
      <img src="/about_me.jpg" alt="Cover picture" className="picture" />
      <span className="dot br"></span>
    </div>
  );
};

export default HeroPicture;
