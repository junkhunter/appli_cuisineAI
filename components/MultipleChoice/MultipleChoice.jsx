/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Option } from "../Option";
import "./style.css";

export const MultipleChoice = ({
  option10 = true,
  option9 = true,
  option6 = true,
  option4 = true,
  option3 = true,
  option8 = true,
  option2 = true,
  option5 = true,
  option7 = true,
  option1 = true,
  className,
}) => {
  return (
    <div className={`multiple-choice ${className}`}>
      {option1 && (
        <Option className="option-instance" stateProp={false} text="Option 1" />
      )}

      {option2 && (
        <Option className="option-instance" stateProp={false} text="Option 2" />
      )}

      {option3 && (
        <Option className="option-instance" stateProp={false} text="Option 3" />
      )}

      {option4 && (
        <Option className="option-instance" stateProp={false} text="Option 4" />
      )}

      {option5 && (
        <Option className="option-instance" stateProp={false} text="Option 5" />
      )}

      {option6 && (
        <Option className="option-instance" stateProp={false} text="Option 6" />
      )}

      {option7 && (
        <Option className="option-instance" stateProp={false} text="Option 7" />
      )}

      {option8 && (
        <Option className="option-instance" stateProp={false} text="Option 8" />
      )}

      {option9 && (
        <Option className="option-instance" stateProp={false} text="Option 9" />
      )}

      {option10 && (
        <Option
          className="option-instance"
          stateProp={false}
          text="Option 10"
        />
      )}
    </div>
  );
};

MultipleChoice.propTypes = {
  option10: PropTypes.bool,
  option9: PropTypes.bool,
  option6: PropTypes.bool,
  option4: PropTypes.bool,
  option3: PropTypes.bool,
  option8: PropTypes.bool,
  option2: PropTypes.bool,
  option5: PropTypes.bool,
  option7: PropTypes.bool,
  option1: PropTypes.bool,
};
