/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const OptionSelect = ({ stateProp, className, textClassName, text = "Option text - you can replace this" }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp,
  });

  return (
    <div
      className={`option-select state-${state.state} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <p className={`text ${textClassName}`}>{text}</p>
    </div>
  );
};

function reducer(state, action) {
  if (state.state === false) {
    switch (action) {
      case "click":
        return {
          state: true,
        };
    }
  }

  if (state.state === true) {
    switch (action) {
      case "click":
        return {
          state: false,
        };
    }
  }

  return state;
}

OptionSelect.propTypes = {
  stateProp: PropTypes.bool,
  text: PropTypes.string,
};
