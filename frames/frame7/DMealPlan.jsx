import React from "react";
import { ButtonNext } from "../../components/ButtonNext";
import { Skip } from "../../components/Skip";
import "./style.css";

export const DMealPlan = ({onNext}) => {
  return (
    <div className="d-meal-plan">
      <p className="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit
        amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a,
        semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum
        diam nisl sit amet erat.
      </p>
      <ButtonNext className="button-next-instance" onClick={onNext}/>
      <img className="img" alt="Img" src="/img/imgp-2.svg" />
      <div className="group">
        <div className="overlap-group">
          <div className="text-wrapper-2">Name</div>
          <img className="logo" alt="Logo" src="/img/logo-1.png" />
        </div>
      </div>
      <Skip className="skip-instance" />
      <div className="group-2">
        <img className="rectangle" alt="Rectangle" src="/img/rectangle-1.svg" />
        <div className="rectangle-2" />
        <div className="rectangle-3" />
        <div className="rectangle-4" />
        <div className="rectangle-5" />
        <div className="rectangle-6" />
      </div>
    </div>
  );
};
