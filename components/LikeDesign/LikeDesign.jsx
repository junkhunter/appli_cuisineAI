/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Property1Default } from "../../icons/Property1Default";
import { Heart } from "../Heart";
import "./style.css";
import { imgfood8, rightarrow, heart} from "../../frames/images_import";

export const LikeDesign = ({
  property1,
  className,
  overlapGroupClassName,
  rectangleClassName,
  imgFoodClassName,
  imgFood = { imgfood8 },
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`like-design ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className={`phase ${state.property1}`}>
        {state.property1 === "default" && (
          <div className="overlap">
            <div className="overlap-group-wrapper">
              <div className={`overlap-group ${overlapGroupClassName}`}>
                <div className={`rectangle ${rectangleClassName}`} />
                <img className={`img-food ${imgFoodClassName}`} alt="Img food" src={imgFood} />
              </div>
            </div>
            <div className="text-wrapper-2">xx/10</div>
          </div>
        )}

        {state.property1 === "clicked" && (
          <>
            <div className="overlap-wrapper">
              <div className="overlap">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <img className="img-food" alt="Img food" src={imgfood8} />
                  </div>
                </div>
                <div className="text-wrapper-2">xx/10</div>
              </div>
            </div>
            <div className="phase-img-PA">
              <div className="overlap-2">
                <div className="text-wrapper-3">Nom du plat</div>
                <p className="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
                  dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                </p>
                <Heart className="heart-instance" state="final" stateFinal={heart} />
                <Property1Default className="calendar" />
                <img className="right-arrow" alt="Right arrow" src={rightarrow} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "click":
        return {
          property1: "clicked",
        };
    }
  }

  if (state.property1 === "clicked") {
    switch (action) {
      case "click":
        return {
          property1: "default",
        };
    }
  }

  return state;
}

LikeDesign.propTypes = {
  property1: PropTypes.oneOf(["clicked", "default"]),
  imgFood: PropTypes.string,
};
