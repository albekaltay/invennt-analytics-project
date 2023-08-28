import React from "react";

const Button = ({
  label,
  icon = null,
  width = "auto",
  textSize = "xs",
  buttonColor = "white",
  textPosition = "center",
  className,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`flex flex-row items-center justify-${textPosition} py-2 px-3 font-semibold rounded-md btn-${buttonColor} text-white w-${width} text-${textSize} cursor-pointer ${className}`}
      {...props}
    >
      {icon && label ? (
        <span className="mr-1.5"> {icon} </span>
      ) : (
        <span> {icon} </span>
      )}
      <span> {label}</span>
    </button>
  );
};
export default Button;
