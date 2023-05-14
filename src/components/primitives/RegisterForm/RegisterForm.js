import React from "react";
import "./RegisterForm.scss";
import { Link } from "react-router-dom";
import { Input } from "components/widgets/input/Input";
import Button from "components/widgets/Button/Button";

const RegisterForm = () => {
  return (
    <form className="authform-register center col">
      <div className="authform-text-register">Welcome to lorem..!</div>
      <div className="auth-form-tab-container-register start">
        <Link to="/login" className="auth-form-tab-register link">Login</Link>
        <Link to="/register" className="auth-form-tab-two-register link">Register</Link>
      </div>
      <div className="auth-form-text-register auth-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>
      <Input title={"Email Adress"} placeholder={"Enter your Email address"} className="input-margin"/>
      <Input title={"Full Name"} placeholder={"Enter your Full Name"} className="input-margin"/>
      <Input title={"Password"} placeholder={"Enter your Password"} className="input-margin-two-register" type="password"/>
      <Button text={"Register"}/>
    </form>
  );
};

export default RegisterForm;
