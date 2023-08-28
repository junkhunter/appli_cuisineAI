import React from "react";
import { ButtonNext } from "../../components/ButtonNext";
import "./style.css";

export const SignUp = ({onNext, onSwitch}) => {
  return (
    <div className="sign-up">
      <div className="overlap">
        <div className="group">
          <div className="overlap-group">
            <div className="text-wrapper">Name</div>
            <img className="logo" alt="Logo" src="/img/logo-1.png" />
          </div>
        </div>
        <img className="background" alt="Background" src="/img/background-6.png" />
        <div className="rectangle" />
        <ButtonNext className="button-next-instance" divClassName="design-component-instance-node" text="Sign up"  onClick={onNext}/>
        <div className="Sign-in-text" onClick={onSwitch}>Sign in</div>
        <div className="sign-in">
          <div className="overlap-2">
            <div className="Sign-up-text">Sign up</div>
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
          <img className="bottom" alt="Bottom" src="/img/bottom.svg" />
        </div>
        <div className="form-field-2">
          <div className="big-label">Password</div>
          <div className="top-part">
            <div className="small-label">
              <div className="small-label-3">Password</div>
            </div>
          </div>
          <img className="bottom" alt="Bottom" src="/img/bottom.svg" />
        </div>
        <div className="form-field-3">
          <div className="big-label-2">Confirm password</div>
          <div className="top-part">
            <div className="small-label">
              <div className="small-label-4">Confirm password</div>
            </div>
          </div>
          <img className="bottom" alt="Bottom" src="/img/bottom.svg" />
        </div>
        <img className="unlock" alt="Unlock" src="/img/unlock-1-1.svg" />
        <img className="img" alt="Unlock" src="/img/unlock-1.svg" />
        <img className="email" alt="Email" src="/img/email.svg" />
        <img className="bottom-2" alt="Bottom" src="/img/bottom-4.svg" />
        <img className="bottom-3" alt="Bottom" src="/img/bottom-3.svg" />
        <div className="text-wrapper-3">or</div>
        <img className="google" alt="Google" src="/img/google.svg" />
        <img className="facebook" alt="Facebook" src="/img/facebook.svg" />
      </div>
    </div>
  );
};
