import { MenuAl } from ".";
import { adduser62, calendar2, clipboardchecklist1, homealt13, usersquare2 } from "../../frames/images_import";


export default {
  title: "Components/MenuAl",
  component: MenuAl,
  argTypes: {
    activeItems: {
      options: ["group", "none", "FL", "inactive", "profile", "home", "MP"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    activeItems: "group",
    className: {},
    iconsHomeAlt: {homealt13},
    divClassName: {},
    iconsCalendar: {calendar2},
    iconsClipboardChecklist: {clipboardchecklist1},
    iconsAddUser: {adduser62},
    iconsUserSquare: {usersquare2},
  },
};
