import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MissionTags from "./MissionTags";

export default {
  title: "App/Mission Tags",
  component: MissionTags,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof MissionTags>;

const Template: ComponentStory<typeof MissionTags> = (args) => (
  <MissionTags {...args} />
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
  tags: tags,
};
