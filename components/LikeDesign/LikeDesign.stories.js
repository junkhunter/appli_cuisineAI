import { LikeDesign } from ".";

export default {
  title: "Components/LikeDesign",
  component: LikeDesign,
  argTypes: {
    property1: {
      options: ["clicked", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "clicked",
    className: {},
    overlapGroupClassName: {},
    rectangleClassName: {},
    imgFoodClassName: {},
    imgFood: "/img/img-food-8.png",
  },
};
