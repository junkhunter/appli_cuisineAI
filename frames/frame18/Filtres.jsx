import React from "react";
import { ButtonNext } from "../../components/ButtonNext";
import { CatTag } from "../../components/CatTag";
import { MenuAl } from "../../components/MenuAl";
import { SearchField } from "../../components/SearchField";
import { Property1Yes } from "../../icons/Property1Yes";
import "./style.css";
import { adduser6, calendar, clipboardchecklist, homealt11, usersquare } from "../images_import";

export const Filtres = () => {
  return (
    <div className="filtres">
      <div className="overlap">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <div className="text-wrapper-2">Name</div>
            <img className="logo" alt="Logo" src="/img/logo-1.png" />
          </div>
        </div>
        <img className="background" alt="Background" src="/img/background-6.png" />
        <SearchField
          bigLabelClassName="design-component-instance-node"
          className="search-field-instance"
          label="Search"
          searchClassName="search-field-2"
          stateProp="default"
        />
        <div className="cat">
          <CatTag className="cat-tag-instance" stateProp={false} text="All" />
          <CatTag className="cat-tag-instance" stateProp text="Meal" />
          <CatTag className="cat-tag-instance" stateProp={false} text="Dessert" />
          <CatTag className="cat-tag-instance" stateProp={false} text="Side" />
        </div>
        <ButtonNext className="button-next-instance" divClassName="button-next-2" text="Apply" />
        <Property1Yes className="filtre-static" />
        <MenuAl
          activeItems="home"
          className="menu-AL-instance"
          divClassName="menu-AL-2"
          iconsAddUser={adduser6}
          iconsCalendar={calendar}
          iconsClipboardChecklist={clipboardchecklist}
          iconsHomeAlt={homealt11}
          iconsUserSquare={usersquare}
        />
      </div>
    </div>
  );
};
