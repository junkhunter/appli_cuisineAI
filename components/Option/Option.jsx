/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Option = ({ stateProp, className, text = "Option text - you can replace this" }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp,
  });

  return (
    <div
      className={`option ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="checkbox-container">
        <div className="checkbox-frame">
          <div className={`rectangle state-${state.state}`} />
        </div>
      </div>
      <p className={`text state-0-${state.state}`}>{text}</p>
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

Option.propTypes = {
  stateProp: PropTypes.bool,
  text: PropTypes.string,
};
