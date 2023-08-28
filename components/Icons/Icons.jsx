/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Icons = ({
  property1,
  homeAlt = "/img/home-alt-1-2.svg",
  calendar = "/img/calendar-1.svg",
  clipboardChecklist = "/img/clipboard-checklist-1.svg",
  addUser = "/img/add-user-6-1.svg",
  userSquare = "/img/user-square-1.svg",
}) => {
  return (
    <div className="icons">
      <img
        className="home-alt"
        alt="Home alt"
        src={
          property1 === "meal-plan"
            ? calendar
            : property1 === "food-list"
            ? clipboardChecklist
            : property1 === "group"
            ? addUser
            : property1 === "profil"
            ? userSquare
            : homeAlt
        }
      />
    </div>
  );
};

Icons.propTypes = {
  property1: PropTypes.oneOf(["group", "food-list", "home", "meal-plan", "profil"]),
  homeAlt: PropTypes.string,
  calendar: PropTypes.string,
  clipboardChecklist: PropTypes.string,
  addUser: PropTypes.string,
  userSquare: PropTypes.string,
};
