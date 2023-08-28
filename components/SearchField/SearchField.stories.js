import { SearchField } from ".";

export default {
  title: "Components/SearchField",
  component: SearchField,
  argTypes: {
    stateProp: {
      options: ["active", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    label: "Search",
    stateProp: "active",
    className: {},
    bigLabelClassName: {},
    searchClassName: {},
  },
};
