/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const ButtonNext = ({ onClick, className }) => {
  return (
    <div className={`button-next ${className}`} onClick={ onClick }>
      <div className="text-wrapper-next">Next</div>
    </div>
  );
};
