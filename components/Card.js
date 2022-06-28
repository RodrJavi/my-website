import Button from "./Button.js";
import Image from "next/image.js";

const Card = ({ pic, title, body, source, site }) => {
  return (
    <div className="card">
      <Image
        width="300px"
        height="150px"
        className="card-image"
        src={pic}
        alt={title}
      />
      <div className="card-body">
        <div>
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
        <div>
          <Button link={source} outline>
            View Source
          </Button>
          <Button link={site}>Visit Site</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
