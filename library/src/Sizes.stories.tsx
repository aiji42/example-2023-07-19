import { Meta, StoryObj } from "@storybook/react";
import { Sizes } from "./Sizes";

const meta: Meta = {
  title: "Sizes",
  component: Sizes,
};

export default meta;

export const Default: StoryObj<typeof Sizes> = {
  args: {
    sizes: [
      { name: "XXS", inStock: false },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: true },
    ],
  },
};
