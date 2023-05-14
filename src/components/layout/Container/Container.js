import React from "react";
import "./Container.scss";

const Container = ({ children, className= "" }) => {
  return (
    <div className="container">
      <div className={`container-child ${className}`}>{children}</div>
    </div>
  );
};

export default Container;
