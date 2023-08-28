import React from "react";
import "./style.css";
import { logo } from "../images_import"

export const Dpart = ({ onClick }) => {
  const handleOnClick = () => {
    onClick(); // Appeler la fonction fournie par le composant parent pour passer à la frame suivante
  };

  return (
    <div className="dpart" onClick={handleOnClick}>
      <div className="overlap-group">
        <div className="text-wrapper-name">Name</div>
        <img className="logo" alt="Logo" src= { logo } />
      </div>
    </div>
  );
};
