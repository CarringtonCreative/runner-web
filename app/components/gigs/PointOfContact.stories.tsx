import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PointOfContact from "./PointOfContact";
import { pointOfContact } from "./GigsData";

export default {
  title: "Runner/Gig POC",
  component: PointOfContact,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof PointOfContact>;

const Template: ComponentStory<typeof PointOfContact> = (args) => (
  <PointOfContact {...args} />
);

export const Primary = Template.bind({});

Primary.args = { ...pointOfContact };
