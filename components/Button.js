const Button = ({ children, outline, className = "" }) => {
  return (
    <div className={`${outline ? "button-outline" : "button"} ${className}`}>
      {children}
    </div>
  );
};

export default Button;
