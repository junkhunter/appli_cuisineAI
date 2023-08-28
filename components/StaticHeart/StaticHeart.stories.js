// import { StaticHeart } from ".";

// export default {
//   title: "Components/StaticHeart",
//   component: StaticHeart,
//   argTypes: {
//     state: {
//       options: ["final"],
//       control: { type: "select" },
//     },
//   },
// };

// export const Default = {
//   args: {
//     state: "final",
//     className: {},
//     stateFinal: "/img/state-final-1.svg",
//   },
// };

import { StaticHeart } from ".";

export default {
  title: "Components/StaticHeart",
  component: StaticHeart,
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
  },
};
