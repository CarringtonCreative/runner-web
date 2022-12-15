import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Socials from "./Socials";
import LinkedInIcon from "../../../public/linkedIn.png";
import GitHubIcon from "../../../public/github.png";
import TwitterIcon from "../../../public/twitter.png";
import EmailIcon from "../../../public/email.png";

export default {
  title: "App/Socials",
  component: Socials,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Socials>;

const Template: ComponentStory<typeof Socials> = (args) => (
  <Socials {...args} />
);

export const Primary = Template.bind({});

const socials = [
  {
    primary: true,
    imagePath: LinkedInIcon,
    name: "LinkedIn",
    alt: "LinkedIn Profile",
    imageWidth: 25,
    imageHeight: 25,
    url: "https://linkedin.com",
  },
  {
    primary: true,
    imagePath: GitHubIcon,
    name: "Github",
    alt: "Github Profile",
    imageWidth: 25,
    imageHeight: 25,
    url: "https://github.com",
  },
  {
    primary: true,
    imagePath: TwitterIcon,
    name: "Twitter",
    alt: "Twitter Profile",
    imageWidth: 25,
    imageHeight: 25,
    url: "https://twitter.com",
  },
  {
    primary: true,
    imagePath: EmailIcon,
    name: "Email",
    alt: "Email",
    imageWidth: 25,
    imageHeight: 25,
    url: "https://mailto:hey@hirerunner.co",
  },
];

Primary.args = {
  primary: true,
  socials,
};
