import React from "react";
import moment from "moment";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EventSection from "./EventSection";
import MatchIcon from "../../../public/match.png";
import { eventDataSection } from "./EventData";

export default {
  title: "App/Event Section",
  component: EventSection,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof EventSection>;

const Template: ComponentStory<typeof EventSection> = (args) => (
  <EventSection {...args} />
);
export const Primary = Template.bind({});

Primary.args = {
  ...eventDataSection,
};
