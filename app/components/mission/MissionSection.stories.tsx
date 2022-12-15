import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MissionSection from "./MissionSection";

export default {
  title: "App/Mission Section",
  component: MissionSection,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof MissionSection>;

const Template: ComponentStory<typeof MissionSection> = (args) => (
  <MissionSection {...args} />
);
export const Primary = Template.bind({});

const tags = [
  {
    primary: true,
    label: "Disability Rights",
    color: "#351572",
    backgroundColor: "#C9ABE3",
  },
  {
    primary: true,
    label: "Doing Good In The World",
    color: "#351572",
    backgroundColor: "#C9ABE3",
  },
  {
    primary: true,
    label: "Inclusivity",
    color: "#351572",
    backgroundColor: "#C9ABE3",
  },
  {
    primary: true,
    label: "Animal Welfare",
    color: "#351572",
    backgroundColor: "#C9ABE3",
  },
  {
    primary: true,
    label: "First Generation",
    color: "#351572",
    backgroundColor: "#C9ABE3",
  },
  {
    primary: true,
    label: "Environment & Climate Change",
    color: "#351572",
    backgroundColor: "#C9ABE3",
  },
];

Primary.args = {
  title: "Mission + Culture Fit",
  tags: tags,
};
