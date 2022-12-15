import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EventCard from "./EventCard";
import { eventData } from "./EventData";

export default {
  title: "App/Event Card",
  component: EventCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof EventCard>;

const Template: ComponentStory<typeof EventCard> = (args) => (
  <EventCard {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  ...eventData,
};
