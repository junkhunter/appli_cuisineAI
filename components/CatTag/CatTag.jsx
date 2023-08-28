/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const CatTag = ({ stateProp, className, text = "Tag" }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp,
  });

  return (
    <div
      className={`cat-tag state-${state.state} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="text">{text}</div>
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

CatTag.propTypes = {
  stateProp: PropTypes.bool,
  text: PropTypes.string,
};
