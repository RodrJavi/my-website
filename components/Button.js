import React from "react";

const Button = ({ text, outline }) => {
  return (
    <div className={` ${outline ? "button-outline" : "button"}`}>{text}</div>
  );
};

export default Button;
