import { Phase } from ".";

export default {
  title: "Components/Phase",
  component: Phase,
  argTypes: {
    property1: {
      options: ["personnalis", "clicked", "traditionnel", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "personnalis",
    className: {},
    overlapGroupClassName: {},
    rectangleClassName: {},
    imgFoodClassName: {},
    imgFood: "/img/img-food-4.png",
  },
};
