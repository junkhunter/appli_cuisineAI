/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Calendar9 } from "../../icons/Calendar9";
import { Heart } from "../Heart";
import "./style.css";

export const Phase = ({
  property1,
  className,
  overlapGroupClassName,
  rectangleClassName,
  imgFoodClassName,
  imgFood = "/img/img-food-4.png",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`phase ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className={`div-2 property-1-${state.property1}`}>
        {state.property1 === "default" && (
          <div className="overlap">
            <div className="overlap-group-wrapper">
              <div className={`overlap-group ${overlapGroupClassName}`}>
                <div className={`rectangle ${rectangleClassName}`} />
                <img className={`img-food ${imgFoodClassName}`} alt="Img food" src={imgFood} />
              </div>
            </div>
            <div className="div-3">xx/10</div>
          </div>
        )}

        {["clicked", "personnalis", "traditionnel"].includes(state.property1) && (
          <>
            <div className="overlap-wrapper">
              <div className="overlap">
                <div className="div-wrapper">
                  <div className="overlap-group">
                    <div className="rectangle" />
                    <img className="img-food" alt="Img food" src="/img/img-food-4.png" />
                  </div>
                </div>
                <div className="div-3">
                  {["clicked", "traditionnel"].includes(state.property1) && <>xx/10</>}

                  {state.property1 === "personnalis" && <>xy/10</>}
                </div>
              </div>
            </div>
            <div className="phase-img-PA">
              <div className="overlap-2">
                {state.property1 === "clicked" && (
                  <>
                    <div className="text-wrapper-2">Nom du plat</div>
                    <p className="p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
                      dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                    </p>
                    <Heart className="heart-instance" state="default" stateDefault="/img/heart.svg" />
                    <Calendar9 className="calendar" />
                    <img className="right-arrow" alt="Right arrow" src="/img/right-arrow.svg" />
                  </>
                )}

                {["personnalis", "traditionnel"].includes(state.property1) && (
                  <>
                    <div className="phase-img-PA-2">
                      <div className="rectangle-2" />
                      <img className="right-arrow" alt="Right arrow" src="/img/right-arrow.svg" />
                    </div>
                    <div className="trad">
                      <div className="text-wrapper-3">Nom du plat</div>
                      <div className="overlap-group-2">
                        <div className="group-2">
                          <div className="text-wrapper-4">Traditionnel</div>
                          <div className="text-wrapper-5">Difficulté</div>
                          <div className="text-wrapper-6">Apport nutritionnel</div>
                          <div className="text-wrapper-7">Nombre de personne</div>
                          <div className="text-wrapper-8">Personnalisé</div>
                        </div>
                        <div className="xx">
                          {state.property1 === "traditionnel" && <>xx/10</>}

                          {state.property1 === "personnalis" && <>xy/10</>}
                        </div>
                        <div className="xx-2">
                          {state.property1 === "traditionnel" && <>xx</>}

                          {state.property1 === "personnalis" && <>xy</>}
                        </div>
                        <div className="xx-kcal">
                          {state.property1 === "traditionnel" && <>xx kcal</>}

                          {state.property1 === "personnalis" && <>xykcal</>}
                        </div>
                      </div>
                    </div>
                  </>
                )}
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

  if (state.property1 === "traditionnel") {
    switch (action) {
      case "click":
        return {
          property1: "clicked",
        };
    }
  }

  return state;
}

Phase.propTypes = {
  property1: PropTypes.oneOf(["personnalis", "clicked", "traditionnel", "default"]),
  imgFood: PropTypes.string,
};
