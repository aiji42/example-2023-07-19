import { Meta, StoryObj } from "@storybook/react";
import { Review } from "./Review";

const meta: Meta = {
  title: "Review",
  component: Review,
};

export default meta;

export const Default: StoryObj<typeof Review> = {
  args: {
    reviews: {
      average: 3.5,
      totalCount: 200,
    },
  },
};
