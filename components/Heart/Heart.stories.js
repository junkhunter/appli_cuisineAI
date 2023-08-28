import { Heart } from ".";

export default {
  title: "Components/Heart",
  component: Heart,
  argTypes: {
    state: {
      options: ["expended", "final", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "expended",
    className: {},
    stateFinal: "/img/state-final-1.svg",
  },
};
