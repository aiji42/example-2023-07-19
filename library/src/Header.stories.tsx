import { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta: Meta = {
  title: "Header",
  component: Header,
};

export default meta;

export const Default: StoryObj<typeof Header> = {
  args: {
    country: {
      code: "CAD",
      flag: "https://tailwindui.com/img/flags/flag-canada.svg",
    },
    cartCount: 0,
  },
};
