import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { logo } from "assets/images";
import HamburgerMenu from "components/widgets/Hamburger/Hamburger";
import Container from "components/layout/Container/Container";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header between">
        <Link to="/" className="header-logo center link">
          <img src={logo} alt="logo" className="header-logo-image" />
          <div className="header-text">
            <span className="color-header">W3B</span>Demy
          </div>
        </Link>
        <div className="header-links center">
          <Link to={"/"} className="header-link">
            Home
          </Link>
          <Link to={"/"} className="header-link">
            Courses
          </Link>
          <Link to={"/"} className="header-link">
            Instructors
          </Link>
          <Link to={"/"} className="header-link">
            Blog
          </Link>
          <Link to={"/"} className="header-link">
            About Us
          </Link>
          <div className="wallet">Connect Wallet</div>
        </div>
        <div className="header-menu">
          <HamburgerMenu isOpen={isOpen} handleClick={handleClick} />
        </div>
    </div>
  );
};

export default Header;
