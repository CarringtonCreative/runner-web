import React from "react";
import moment from "moment";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EventCard from "./EventCard";
import MatchIcon from "../../../public/match.png";

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
  primary: true,
  label: "Match",
  alt: "Match",
  subject: "Lavender Smith",
  event: "matched with Fairly via David Van Bruwaene",
  timestamp: moment().startOf("day").fromNow(),
  imageSrc: MatchIcon,
  imageWidth: 25,
  imageHeight: 25,
};
