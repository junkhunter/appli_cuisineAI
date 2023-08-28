import React from "react";
import "./style.css";
import { background6, logo } from "../images_import";


export const Questionnaire4 = ({ onClick }) => {
  
  return (
    <div className="questionnaire4" onClick={onClick}>
      <div className="overlap">
        <div className="group">
          <div className="overlap-group">
            <div className="text-wrapper">Name</div>
            <img className="logo" alt="Logo" src={ logo } />
          </div>
        </div>
        <img className="background" alt="Background" src={ background6 } />
        <div className="passons-xxxxxxxx">
          Passons à <br />
          xxxxxxxx
        </div>
        <div className="ellipse" />
        <div className="div" />
        <div className="ellipse-2" />
        <div className="ellipse-3" />
      </div>
    </div>
  );
};
