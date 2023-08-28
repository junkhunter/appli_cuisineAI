import React from "react";
import { ButtonNext } from "../../components/ButtonNext";
import "./style.css";

export const Questionnaire5 = ({onNext}) => {
  return (
    <div className="questionnaire5">
      <div className="overlap">
        <div className="group">
          <div className="overlap-group">
            <div className="div">Name</div>
            <img className="logo" alt="Logo" src="/img/logo-1.png" />
          </div>
        </div>
        <img className="background" alt="Background" src="/img/background-6.png" />
        <div className="rectangle" />
        <img className="progression-q" alt="Progression q" src="/img/progression-q.png" />
        <ButtonNext className="button-next-instance" divClassName="design-component-instance-node" onClick={onNext}/>
        <div className="text-wrapper-2">Question 3</div>
        <div className="text-wrapper-3">Selectionne max 3 options</div>
      </div>
    </div>
  );
};
