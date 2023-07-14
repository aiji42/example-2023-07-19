import { Meta, StoryObj } from "@storybook/react";
import { CartIcon } from "./CartIcon";

const meta: Meta = {
  title: "CartIcon",
  component: CartIcon,
};

export default meta;

export const Default: StoryObj<typeof CartIcon> = {
  args: {
    cartCount: 100,
  },
};
