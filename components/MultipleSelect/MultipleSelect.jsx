/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { OptionSelect } from "../OptionSelect";
import "./style.css";

export const MultipleSelect = ({
  option8 = true,
  option7 = true,
  option10 = true,
  option6 = true,
  option4 = true,
  option3 = true,
  option9 = true,
  option5 = true,
  option2 = true,
  option1 = true,
  className,
  optionSelectStateNoClassName,
  optionSelectTextClassName,
  optionSelectStateNoClassNameOverride,
  optionSelectTextClassNameOverride,
  optionSelectStateYesClassName,
  optionSelectDivClassName,
  optionSelectStateYesClassNameOverride,
  optionSelectDivClassNameOverride,
  optionSelectTextWrapperClassName,
  optionSelectTextClassName1,
}) => {
  return (
    <div className={`multiple-select ${className}`}>
      {option1 && (
        <OptionSelect
          className={optionSelectStateNoClassName}
          stateProp={false}
          text="Option 1"
          textClassName={optionSelectTextClassName}
        />
      )}

      {option2 && (
        <OptionSelect
          className={optionSelectStateNoClassNameOverride}
          stateProp={false}
          text="Option 2"
          textClassName={optionSelectTextClassNameOverride}
        />
      )}

      {option3 && (
        <OptionSelect
          className={optionSelectStateYesClassName}
          stateProp={false}
          text="Option 3"
          textClassName={optionSelectDivClassName}
        />
      )}

      {option4 && (
        <OptionSelect
          className={optionSelectStateYesClassNameOverride}
          stateProp={false}
          text="Option 4"
          textClassName={optionSelectDivClassNameOverride}
        />
      )}

      {option5 && (
        <OptionSelect
          className={optionSelectTextWrapperClassName}
          stateProp={false}
          text="Option 5"
          textClassName={optionSelectTextClassName1}
        />
      )}

      {option6 && (
        <OptionSelect
          className="option-select-instance"
          stateProp={false}
          text="Option 6"
          textClassName="design-component-instance-node"
        />
      )}

      {option7 && (
        <OptionSelect
          className="option-select-instance"
          stateProp={false}
          text="Option 7"
          textClassName="design-component-instance-node"
        />
      )}

      {option8 && (
        <OptionSelect
          className="option-select-instance"
          stateProp={false}
          text="Option 8"
          textClassName="design-component-instance-node"
        />
      )}

      {option9 && (
        <OptionSelect
          className="option-select-instance"
          stateProp={false}
          text="Option 9"
          textClassName="design-component-instance-node"
        />
      )}

      {option10 && (
        <OptionSelect
          className="option-select-instance"
          stateProp={false}
          text="Option 10"
          textClassName="design-component-instance-node"
        />
      )}
    </div>
  );
};

MultipleSelect.propTypes = {
  option8: PropTypes.bool,
  option7: PropTypes.bool,
  option10: PropTypes.bool,
  option6: PropTypes.bool,
  option4: PropTypes.bool,
  option3: PropTypes.bool,
  option9: PropTypes.bool,
  option5: PropTypes.bool,
  option2: PropTypes.bool,
  option1: PropTypes.bool,
};
