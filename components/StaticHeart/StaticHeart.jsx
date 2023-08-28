/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const StaticHeart = ({ state, className }) => {
return (
<img
className={`static-heart ${state} ${className}`}
alt="State default"
src={state === "expended" ? "./img/state-expended.svg" : state === "final" ? "./img/state-final.svg" : "./img/state-default.svg"}
/>
);
};
StaticHeart.propTypes = {
state: PropTypes.oneOf(["expended", "final", "default"]),
};
