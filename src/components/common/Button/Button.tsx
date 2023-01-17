import { useEffect, useState } from "react";
import "./Button.scss";

interface ButtonProps {
    children?:string|React.ReactNode;
    disabled?:boolean;
    fullWidth?:boolean;
    onClick?:()=>void;
    value?:string;
    variant?:string;
}

const Button:React.FC<ButtonProps> = ({
  children,
  disabled,
  fullWidth,
  onClick,
  value,
  variant = "primary",
  ...rest
}) => {
  const [classes, setClasses] = useState("");

  useEffect(() => {
    setClasses(variant);
  }, [variant]);

  return (
    <button
      className={`btn ${classes} ${fullWidth && 'full-width'}`}
      disabled={disabled}
      onClick={onClick}
      value={value}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
