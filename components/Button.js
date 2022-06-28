const Button = ({ children, outline, className = "", link }) => {
  return (
    <a
      className={`${outline ? "button-outline" : "button"} ${className}`}
      href={link}
      target="blank"
    >
      {children}
    </a>
  );
};

export default Button;
