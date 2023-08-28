import React from "react";
import { MenuAl } from "../../components/MenuAl";
import { PrParationList } from "../../components/PrParationList";
import "./style.css";

export const PageDeRecette = () => {
  return (
    <div className="page-de-recette">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="text-wrapper-2">Name</div>
              <img className="logo" alt="Logo" src="/img/logo-1.png" />
            </div>
          </div>
          <img className="backgroundd" alt="Backgroundd" src="/img/backgroundd-2.png" />
          <div className="text-wrapper-3">Nom du plat</div>
          <div className="design-page-recette">
            <div className="overlap-2">
              <div className="rectangle-2" />
              <div className="text-wrapper-4">Ingrédients</div>
              <div className="text-wrapper-5">Préparation</div>
              <div className="text-wrapper-6">Feedback</div>
            </div>
          </div>
          <MenuAl
            activeItems="inactive"
            className="menu-AL-instance"
            iconsAddUser="/img/add-user-6-8.svg"
            iconsCalendar="/img/calendar-8.svg"
            iconsClipboardChecklist="/img/clipboard-checklist-8.svg"
            iconsHomeAlt="/img/home-alt-1-8.svg"
            iconsUserSquare="/img/user-square-8.svg"
          />
          <div className="prparation-list-tape">
            <div className="prparation-list">
              <div className="checkbox-frame-wrapper">
                <div className="checkbox-frame-2" />
              </div>
              <p className="p">Option text - you can replace this</p>
            </div>
            <PrParationList className="pr-paration-list-instance" stateProp="gras" />
            <PrParationList className="pr-paration-list-instance" stateProp="gras" />
            <PrParationList className="pr-paration-list-instance" stateProp="gras" />
            <PrParationList className="pr-paration-list-instance" stateProp="gras" />
            <PrParationList className="pr-paration-list-instance" stateProp="gras" />
            <PrParationList className="pr-paration-list-instance" stateProp="gras" />
            <PrParationList className="pr-paration-list-instance" stateProp="gras" />
            <PrParationList className="pr-paration-list-instance" stateProp="gras" />
            <PrParationList className="pr-paration-list-instance" stateProp="gras" />
            <PrParationList className="pr-paration-list-instance" stateProp="gras" />
            <PrParationList className="pr-paration-list-instance" stateProp="gras" />
            <PrParationList className="pr-paration-list-instance" stateProp="gras" />
            <PrParationList className="pr-paration-list-instance" stateProp="gras" />
            <PrParationList className="pr-paration-list-instance" stateProp="gras" />
            <PrParationList className="pr-paration-list-instance" stateProp="gras" />
            <PrParationList className="pr-paration-list-instance" stateProp="gras" />
            <PrParationList className="pr-paration-list-instance" stateProp="gras" />
            <PrParationList className="pr-paration-list-instance" stateProp="gras" />
            <PrParationList className="pr-paration-list-instance" stateProp="gras" />
          </div>
        </div>
      </div>
    </div>
  );
};
