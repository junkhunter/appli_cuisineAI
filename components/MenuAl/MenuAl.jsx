/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icons } from "../Icons";
import "./style.css";
import { adduser62, calendar2, clipboardchecklist1, homealt16, usersquare2 } from "../../frames/images_import";

 
export const MenuAl = ({
  activeItems,
  className,
  iconsHomeAlt = {homealt16},
  divClassName,
  iconsCalendar = {calendar2},
  iconsClipboardChecklist = {clipboardchecklist1},
  iconsAddUser = {adduser62},
  iconsUserSquare = {usersquare2},
}) => {
  return (
    <div className={`menu-AL ${className}`}>
      <div className={`menu-items ${activeItems}`}>
        <Icons homeAlt={iconsHomeAlt} property1="home" />
        {["home", "none"].includes(activeItems) && <div className={`text-wrapper ${divClassName}`}>Home</div>}
      </div>
      <div className={`div active-items-${activeItems}`}>
        <Icons calendar={activeItems === "home" ? iconsCalendar : {calendar2}} property1="meal-plan" />
        {["MP", "none"].includes(activeItems) && <div className="text-wrapper">Meal plan</div>}
      </div>
      <div className={`menu-items-2 active-items-0-${activeItems}`}>
        <Icons
          clipboardChecklist={activeItems === "home" ? iconsClipboardChecklist : {clipboardchecklist1}}
          property1="food-list"
        />
        {["FL", "none"].includes(activeItems) && <div className="text-wrapper">Food list</div>}
      </div>
      <div className={`menu-items-3 active-items-1-${activeItems}`}>
        <Icons addUser={activeItems === "home" ? iconsAddUser : {adduser62}} property1="group" />
        {["group", "none"].includes(activeItems) && <div className="text-wrapper">Group</div>}
      </div>
      <div className={`menu-items-4 active-items-2-${activeItems}`}>
        <Icons property1="profil" userSquare={activeItems === "home" ? iconsUserSquare : {usersquare2}} />
        {["none", "profile"].includes(activeItems) && <div className="text-wrapper">Profile</div>}
      </div>
    </div>
  );
};

MenuAl.propTypes = {
  activeItems: PropTypes.oneOf(["group", "none", "FL", "inactive", "profile", "home", "MP"]),
  iconsHomeAlt: PropTypes.string,
  iconsCalendar: PropTypes.string,
  iconsClipboardChecklist: PropTypes.string,
  iconsAddUser: PropTypes.string,
  iconsUserSquare: PropTypes.string,
};
