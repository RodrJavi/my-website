import Button from "./Button.js";

const Card = ({ pic, title, body, source, site }) => {
  return (
    <div className="card">
      <img className="card-image" src={pic} alt=""></img>
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
