import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Login from "./Login";

export default {
  title: "Onboard/Login",
  component: Login,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
