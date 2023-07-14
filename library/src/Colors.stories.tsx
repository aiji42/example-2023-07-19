import { Meta, StoryObj } from "@storybook/react";
import { Colors } from "./Colors";

const meta: Meta = {
  title: "Colors",
  component: Colors,
};

export default meta;

export const Default: StoryObj<typeof Colors> = {
  args: {
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
  },
};
