import { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "./Breadcrumb";

const meta: Meta = {
  title: "Breadcrumb",
  component: Breadcrumb,
};

export default meta;

export const Default: StoryObj<typeof Breadcrumb> = {
  args: {
    breadcrumbs: [
      { id: 1, name: "Men", href: "#" },
      { id: 2, name: "Clothing", href: "#" },
      { id: 3, name: 'Basic Tee 6-Pack', href: '#' }
    ],
  },
};
