import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Gig from "./Gig";
import "./GigsData";

export default {
  title: "App/Gig",
  component: Gig,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Gig>;

const Template: ComponentStory<typeof Gig> = (args) => <Gig {...args} />;

export const Primary = Template.bind({});
