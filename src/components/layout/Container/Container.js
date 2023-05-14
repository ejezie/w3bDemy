import React from "react";
import "./Container.scss";

const Container = ({ children }) => {
  return (
    <div className="container">
      <div className="container-child">{children}</div>
    </div>
  );
};

export default Container;
