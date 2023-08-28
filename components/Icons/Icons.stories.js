import { Icons } from ".";

export default {
  title: "Components/Icons",
  component: Icons,
  argTypes: {
    property1: {
      options: ["group", "food-list", "home", "meal-plan", "profil"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "group",
    homeAlt: "/img/home-alt-1-2.svg",
    calendar: "/img/calendar-1.svg",
    clipboardChecklist: "/img/clipboard-checklist-1.svg",
    addUser: "/img/add-user-6-1.svg",
    userSquare: "/img/user-square-1.svg",
  },
};
