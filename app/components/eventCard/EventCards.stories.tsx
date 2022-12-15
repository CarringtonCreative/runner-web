import React from "react";
import moment from "moment";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EventCards from "./EventCards";
import MatchIcon from "../../../public/match.png";

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

const events = [
  {
    primary: true,
    label: "Match",
    alt: "Match",
    subject: "Lavender Smith",
    event: "matched with Fairly via David Van Bruwaene",
    timestamp: moment().startOf("day").fromNow(),
    imageSrc: MatchIcon,
    imageWidth: 25,
    imageHeight: 25,
  },
  {
    primary: true,
    label: "Match",
    alt: "Match",
    subject: "Lavender Smith",
    event: "matched with Fairly via David Van Bruwaene",
    timestamp: moment().startOf("day").fromNow(),
    imageSrc: MatchIcon,
    imageWidth: 25,
    imageHeight: 25,
  },
  {
    primary: true,
    label: "Match",
    alt: "Match",
    subject: "Lavender Smith",
    event: "matched with Fairly via David Van Bruwaene",
    timestamp: moment().startOf("day").fromNow(),
    imageSrc: MatchIcon,
    imageWidth: 25,
    imageHeight: 25,
  },
];

Primary.args = {
  events,
};
