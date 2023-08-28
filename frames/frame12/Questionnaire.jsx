import React from "react";
import "./style.css";

export const Questionnaire = ({onClick}) => {

  return (
    <div className="questionnaire" onClick={onClick}>
      <div className="overlap">
        <div className="group">
          <div className="overlap-group">
            <div className="text-wrapper">Name</div>
            <img className="logo" alt="Logo" src="/img/logo-1.png" />
          </div>
        </div>
        <img className="background" alt="Background" src="/img/background-6.png" />
        <div className="commencons-par">
          Commencons par
          <br /> xxxxxxxxx
        </div>
        <div className="ellipse" />
        <div className="div" />
        <div className="ellipse-2" />
        <div className="ellipse-3" />
      </div>
    </div>
  );
};
