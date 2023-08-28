import React from "react";
import { LikeDesign } from "../../components/LikeDesign";
import { MenuAl } from "../../components/MenuAl";
import { StaticHeart } from "../../components/StaticHeart";
import "./style.css";
import { logo, background6, homealt16, adduser68, calendar8, clipboardchecklist8, usersquare8, imgfood, imgfood6} from "../images_import";

export const Like = () => {
  return (
    <div className="like">
      <div className="overlap-3">
        <div className="div-wrapper">
          <div className="overlap-group-2">
            <div className="text-wrapper-4">Name</div>
            <img className="logo" alt="Logo" src={logo} />
          </div>
        </div>
        <img className="background" alt="Background" src={background6} />
        <MenuAl
          activeItems="home"
          className="menu-AL-instance"
          divClassName="design-component-instance-node"
          iconsHomeAlt = {homealt16}
          iconsAddUser={adduser68}
          iconsCalendar={calendar8}
          iconsClipboardChecklist={clipboardchecklist8}
          iconsUserSquare={usersquare8}
        />
        <div className="like-page">
          <div className="frame">
            <LikeDesign
              className="like-design-instance"
              imgFood={imgfood}
              imgFoodClassName="like-design-4"
              overlapGroupClassName="like-design-2"
              property1="default"
              rectangleClassName="like-design-3"
            />
            <LikeDesign
              className="like-design-instance"
              imgFood={imgfood6}
              imgFoodClassName="like-design-4"
              overlapGroupClassName="like-design-2"
              property1="default"
              rectangleClassName="like-design-3"
            />
          </div>
          <div className="frame">
            <LikeDesign
              className="like-design-instance"
              imgFood={imgfood}
              imgFoodClassName="like-design-4"
              overlapGroupClassName="like-design-2"
              property1="default"
              rectangleClassName="like-design-3"
            />
            <LikeDesign
              className="like-design-instance"
              imgFood={imgfood}
              imgFoodClassName="like-design-4"
              overlapGroupClassName="like-design-2"
              property1="default"
              rectangleClassName="like-design-3"
            />
          </div>
          <div className="frame">
            <LikeDesign
              className="like-design-instance"
              imgFood={imgfood}
              imgFoodClassName="like-design-4"
              overlapGroupClassName="like-design-2"
              property1="default"
              rectangleClassName="like-design-3"
            />
            <LikeDesign
              className="like-design-instance"
              imgFood={imgfood}
              imgFoodClassName="like-design-4"
              overlapGroupClassName="like-design-2"
              property1="default"
              rectangleClassName="like-design-3"
            />
          </div>
          <div className="frame">
            <LikeDesign
              className="like-design-instance"
              imgFood={imgfood}
              imgFoodClassName="like-design-4"
              overlapGroupClassName="like-design-2"
              property1="default"
              rectangleClassName="like-design-3"
            />
            <LikeDesign
              className="like-design-instance"
              imgFood={imgfood}
              imgFoodClassName="like-design-4"
              overlapGroupClassName="like-design-2"
              property1="default"
              rectangleClassName="like-design-3"
            />
          </div>
        </div>
        <StaticHeart className="static-heart-2" state="final" />
      </div>
    </div>
  );
};
