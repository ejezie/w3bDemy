import React from "react";
import "./Input.scss";
import { password } from "assets/images";

export const Input = ({
  title,
  error,
  placeholder,
  className = " ",
  type = "text",
  ...props
}) => {
  return (
    <div className="custom-input-container start col">
      <div className="custom-input-text auth-text">{title}</div>
      <div className="custom-input-wrap">
        <input className={`custom-input ${className}`} placeholder={placeholder} {...props} />
        {type === "password" && (
          <img src={password} alt="see password" className="password-icon" />
        )}
      </div>
      <div className="custom-input-error">{error && error}</div>
    </div>
  );
};
