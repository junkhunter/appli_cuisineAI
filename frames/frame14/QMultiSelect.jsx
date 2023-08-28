import React from "react";
import { ButtonNext } from "../../components/ButtonNext";
import { MultipleSelect } from "../../components/MultipleSelect";
import "./style.css";

export const QMultiSelect = ({onNext}) => {
  return (
    <div className="questionnaireMS">
      <div className="overlap">
        <div className="group">
          <div className="overlap-group">
            <div className="div-2">Name</div>
            <img className="logo" alt="Logo" src="/img/logo-1.png" />
          </div>
        </div>
        <img
          className="background"
          alt="Background"
          src="/img/background-6.png"
        />
        <div className="rectangle-3" />
        <img
          className="progression-q"
          alt="Progression q"
          src="/img/progression-q.png"
        />
        <ButtonNext
          className="button-next-instance"
          divClassName="button-next-2"
          onClick={onNext}
        />
        <div className="text-wrapper-2">Question 2</div>
        <div className="text-wrapper-2">Question 2</div>
        <div className="text-wrapper-2">Question 2</div>
        <div className="text-wrapper-3">Selectionne max 3 options</div>
        <MultipleSelect
          option10={false}
          option6={false}
          option7={false}
          option8={false}
          option9={false}
          className="multiple-select-choice"
          optionSelectDivClassName="multiple-select-choice-instance"
          optionSelectDivClassNameOverride="multiple-select-choice-instance"
          optionSelectStateNoClassName="multiple-select-instance"
          optionSelectStateNoClassNameOverride="multiple-select-instance"
          optionSelectStateYesClassName="multiple-select-instance"
          optionSelectStateYesClassNameOverride="multiple-select-instance"
          optionSelectTextClassName="multiple-select-choice-instance"
          optionSelectTextClassName1="multiple-select-choice-instance"
          optionSelectTextClassNameOverride="multiple-select-choice-instance"
          optionSelectTextWrapperClassName="multiple-select-instance"
        />
      </div>
    </div>
  );
};
