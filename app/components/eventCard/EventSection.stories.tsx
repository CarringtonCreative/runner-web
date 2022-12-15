import React from "react";
import moment from "moment";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EventSection from "./EventSection";
import MatchIcon from "../../../public/match.png";

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
  title: "History",
};
