const Button = ({ children, outline, className = "", link }) => {
  return (
    <a href={link}>
      <div className={`${outline ? "button-outline" : "button"} ${className}`}>
        {children}
      </div>
    </a>
  );
};

export default Button;
