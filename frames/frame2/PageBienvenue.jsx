import React from "react";
import { ButtonNext } from "../../components/ButtonNext";
import "./style.css";
import { imgp1 } from "../images_import";

export const PageBienvenue = ({onNext}) => {
  return (
    <div className="page-bienvenue">
      <div className="group">
        <div className="overlap-group">
          <div className="text-wrapper">Name</div>
          <img className="logo" alt="Logo" src="/img/logo-1.png" />
        </div>
      </div>
      <div className="div-5">Welcome to Name</div>
      <p className="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit
        amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.
      </p>
      <ButtonNext className="button-next-instance" divClassName="design-component-instance-node" text="Start" onClick={onNext}/>
      <img className="img" alt="Img" src= { imgp1 } />
    </div>
  );
};
