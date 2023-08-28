/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const SearchField = ({ label = "Search", stateProp, className, bigLabelClassName, searchClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });

  return (
    <div
      className={`search-field ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      {state.state === "default" && <div className={`big-label ${bigLabelClassName}`}>{label}</div>}

      <img
        className={`search ${state.state} ${
          state.state === "default" ? searchClassName : state.state === "active" ? bigLabelClassName : undefined
        }`}
        alt="Search"
        src={state.state === "active" ? "/img/cursor.png" : "/img/search-2.svg"}
      />
      {state.state === "active" && <img className={`img ${searchClassName}`} alt="Search" src="/img/search-1.svg" />}
    </div>
  );
};

function reducer(state, action) {
  if (state.state === "default") {
    switch (action) {
      case "click":
        return {
          state: "active",
        };
    }
  }

  if (state.state === "active") {
    switch (action) {
      case "click":
        return {
          state: "default",
        };
    }
  }

  return state;
}

SearchField.propTypes = {
  label: PropTypes.string,
  stateProp: PropTypes.oneOf(["active", "default"]),
};
