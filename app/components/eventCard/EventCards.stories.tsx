import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EventCards from "./EventCards";
import { eventsData } from "./EventData";

export default {
  title: "App/Event Cards",
  component: EventCards,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof EventCards>;

const Template: ComponentStory<typeof EventCards> = (args) => (
  <EventCards {...args} />
);
export const Primary = Template.bind({});

Primary.args = {
  events: eventsData,
};
