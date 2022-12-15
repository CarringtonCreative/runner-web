import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tags from "./Tags";

export default {
  title: "App/Tags",
  component: Tags,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Tags>;

const Template: ComponentStory<typeof Tags> = (args) => <Tags {...args} />;
export const Primary = Template.bind({});

const tags = [
  {
    primary: true,
    label: "Operations",
    color: "#fff",
    backgroundColor: "#D64933",
  },
  {
    primary: true,
    label: "Product Manager",
    color: "#fff",
    backgroundColor: "#FF7777",
  },
  {
    primary: true,
    label: "Project Manager",
    color: "#fff",
    backgroundColor: "#FF7777",
  },
  {
    primary: true,
    label: "Tech Savy",
    color: "#fff",
    backgroundColor: "#FF7777",
  },
  {
    primary: true,
    label: "Risk Management Focused",
    color: "#fff",
    backgroundColor: "#FF7777",
  },
  {
    primary: true,
    label: "Marketing",
    color: "#fff",
    backgroundColor: "#FF7777",
  },
];

Primary.args = {
  tags,
  title: "Roles + Skills",
};
