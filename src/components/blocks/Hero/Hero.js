import React from "react";
import "./Hero.scss"

const Hero = () => {
  return (
    <div className="hero center col">
      <div className="hero-title"> <span className="color-hero-text">Studying</span> Online is now much easier</div>
      <div className="hero-text">
        W3BDemy is a platform that allows educators to create online classes
        whereby they can store the course materials online; manage assignments,
        quizzes and exams; monitor due dates; grade results and provide students
        with feedback all in one place.
      </div>
      <div className="hero-button">Join for free</div>
    </div>
  );
};

export default Hero;
