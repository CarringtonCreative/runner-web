import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Content from "./Content";
import { TAB } from "../../constants/constant";

export default {
  title: "App/Content",
  component: Content,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Content>;

const Template: ComponentStory<typeof Content> = (args) => (
  <Content {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  activeTab: TAB.DASHBOARD,
};
