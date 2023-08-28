/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Heart = ({ state, className, stateFinal = "/img/state-final-1.svg" }) => {
  return (
    <img
      className={`heart state-${state} ${className}`}
      alt="State default"
      src={state === "expended" ? "/img/state-expended.svg" : state === "final" ? stateFinal : "/img/state-default.svg"}
    />
  );
};

Heart.propTypes = {
  state: PropTypes.oneOf(["expended", "final", "default"]),
  stateFinal: PropTypes.string,
};
