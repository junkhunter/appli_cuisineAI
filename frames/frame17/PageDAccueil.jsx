import React from "react";
import { CatTag } from "../../components/CatTag";
import { MenuAl } from "../../components/MenuAl";
import { Phase } from "../../components/Phase";
import { SearchField } from "../../components/SearchField";
import { StaticHeart } from "../../components/StaticHeart";
import { Property1No } from "../../icons/Property1No";
import "./style.css";

import { logo, background6, adduser68, calendar8, homealt18, usersquare8, imgfood, clipboardchecklist8, search2} from "../images_import";

export const PageDAccueil = () => {
  return (
    <div className="page-d-accueil">
      <div className="overlap-3">
        <div className="group-3">
          <div className="overlap-group-3">
            <div className="text-wrapper-9">Name</div>
            <img className="logo" alt="Logo" src={logo} />
          </div>
        </div>
        <img className="background" alt="Background" src={background6} />
        <MenuAl
          activeItems="home"
          className="menu-AL-instance"
          divClassName="design-component-instance-node"
          iconsAddUser={adduser68}
          iconsCalendar={calendar8}
          iconsClipboardChecklist={clipboardchecklist8}
          iconsHomeAlt={homealt18}
          iconsUserSquare={usersquare8}
        />
        <SearchField
          bigLabelClassName="search-field-2"
          className="search-field-instance"
          label="Search"
          search={search2}
          searchClassName="search-field-3"
          stateProp="default"
        />
        <div className="cat">
          <CatTag className="cat-tag-instance" stateProp={false} text="All" />
          <CatTag className="cat-tag-instance" stateProp text="Meal" />
          <CatTag className="cat-tag-instance" stateProp={false} text="Dessert" />
          <CatTag className="cat-tag-instance" stateProp={false} text="Side" />
        </div>
        <div className="PA-food-scroll">
          <Phase
            className="phase-1-2"
            imgFood={imgfood}
            imgFoodClassName="phase-2"
            overlapGroupClassName="phase-instance"
            property1="default"
            rectangleClassName="phase-1-2-instance"
          />
          <Phase
            className="phase-1-2"
            imgFood={imgfood}
            imgFoodClassName="phase-2"
            overlapGroupClassName="phase-instance"
            property1="default"
            rectangleClassName="phase-1-2-instance"
          />
          <Phase
            className="phase-1-2"
            imgFood={imgfood}
            imgFoodClassName="phase-2"
            overlapGroupClassName="phase-instance"
            property1="default"
            rectangleClassName="phase-1-2-instance"
          />
          <Phase
            className="phase-1-2"
            imgFood={imgfood}
            imgFoodClassName="phase-2"
            overlapGroupClassName="phase-instance"
            property1="default"
            rectangleClassName="phase-1-2-instance"
          />
        </div>
        <Property1No className="filtre" />
        <StaticHeart className="static-heart-1" state="default" stateDefault="/img/static-heart-1.svg"/>
      </div>
    </div>
  );
};
