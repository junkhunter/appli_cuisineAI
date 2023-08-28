import React from "react";
import { ButtonNext } from "../../components/ButtonNext";
import { Skip } from "../../components/Skip";
import "./style.css";
import { logo } from "../images_import";

export const DQuestionnaire = ({ onNext, onSkip }) => {
  return (
    <div className="d-questionnaire">
      <div className="overlap">
        <p className="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim
          sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a,
          semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non
          fermentum diam nisl sit amet erat.
        </p>
        <img className="img" alt="Img" src="/img/imgp-1.svg" />
        <div className="group">
          <img className="rectangle" alt="Rectangle" src="/img/rectangle-1.svg" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="rectangle-4" />
          <div className="rectangle-5" />
          <div className="rectangle-6" />
        </div>
        <ButtonNext className="button-next-instance" onClick={onNext}/>
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <div className="text-wrapper-2">Name</div>
            <img className="logo" alt="Logo" src= { logo } />
          </div>
        </div>
        <Skip className="skip-instance" onClick={onSkip}/>
      </div>
    </div>
  );
};
