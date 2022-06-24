import Button from "./Button.js";

const Card = () => {
  return (
    <div className="card">
      <img
        className="card-image"
        src="https://via.placeholder.com/300x150"
        alt=""
      />
      <div className="card-body">
        <div>
          <h3>Project 1</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, at
            nemo exercitationem accusamus eos corrupti consequatur officia cum
            architecto dolorum, est rem aut facilis modi.
          </p>
        </div>
        <Button outline>View Source</Button>
        <Button>Visit Site</Button>
      </div>
    </div>
  );
};

export default Card;
