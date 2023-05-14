import React from "react";
import "./LoginForm.scss";
import { Link } from "react-router-dom";
import { Input } from "components/widgets/input/Input";
import Button from "components/widgets/Button/Button";

const LoginForm = () => {
  return (
    <form className="authform center col">
      <div className="authform-text">Welcome to lorem..!</div>
      <div className="auth-form-tab-container start">
        <Link to="/login" className="auth-form-tab link">Login</Link>
        <Link to="/register" className="auth-form-tab-two link">Register</Link>
      </div>
      <div className="auth-form-text auth-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>
      <Input title={"Email Adress"} placeholder={"Enter your Email address"} className="input-margin"/>
      <Input title={"Password"} placeholder={"Enter your Password"} className="input-margin-two" type="password"/>
      <div className="remember between">
        <div className="center">
          <input type="checkbox" className="authform-checbox"/>
            <div className="auth-text">Rememebr me</div>
        </div>
        <div className="auth-text">
            Forgot Password ?
        </div>
      </div>
      <Button text={"Login"}/>
    </form>
  );
};

export default LoginForm;
