import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tags from "./Tags";
import { tagSection } from "./TagData";

export default {
  title: "App/Tags",
  component: Tags,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Tags>;

const Template: ComponentStory<typeof Tags> = (args) => <Tags {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  ...tagSection,
};
