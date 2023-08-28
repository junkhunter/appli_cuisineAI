import React from "react";
import { ButtonNext } from "../../components/ButtonNext";
import "./style.css";

export const SignIn = ({onNext, onSwitch}) => {
  return (
    <div className="sign-in">
      <div className="overlap">
        <div className="group">
          <div className="overlap-group">
            <div className="text-wrapper">Name</div>
            <img className="logo" alt="Logo" src="/img/logo-1.png" />
          </div>
        </div>
        <img className="background" alt="Background" src="/img/background-6.png" />
        <div className="rectangle" />
        <img className="bottom" alt="Bottom" src="/img/bottom-3.svg" />
        <img className="img" alt="Bottom" src="/img/bottom-2.svg" />
        <ButtonNext className="button-next-instance" divClassName="design-component-instance-node" text="Sign in" onClick={onNext}/>
        <div className="Sign-up-text" onClick={onSwitch}>Sign up</div>
        <div className="overlap-wrapper">
          <div className="overlap-2">
            <div className="Sign-in-text">Sign in</div>
            <div className="rectangle-2" />
          </div>
        </div>
        <div className="form-field">
          <div className="big-label">Email adress</div>
          <div className="top-part">
            <div className="small-label">
              <div className="small-label-2">Email adress</div>
            </div>
          </div>
          <img className="bottom-2" alt="Bottom" src="/img/bottom-6.svg" />
        </div>
        <div className="form-field-2">
          <div className="big-label">Password</div>
          <div className="top-part">
            <div className="small-label">
              <div className="small-label-3">Password</div>
            </div>
          </div>
          <img className="bottom-2" alt="Bottom" src="/img/bottom-6.svg" />
        </div>
        <div className="text-wrapper-3">Forgot password ?</div>
        <div className="text-wrapper-4">or</div>
        <img className="unlock" alt="Unlock" src="/img/unlock-1.svg" />
        <img className="email" alt="Email" src="/img/email.svg" />
        <img className="google" alt="Google" src="/img/google.svg" />
        <img className="facebook" alt="Facebook" src="/img/facebook.svg" />
      </div>
    </div>
  );
};
