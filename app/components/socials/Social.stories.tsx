import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Social from "./Social";
import LinkedInIcon from "../../../public/linkedIn.png";
import GithubIcon from "../../../public/github.png";
import TwitterIcon from "../../../public/twitter.png";
import EmailIcon from "../../../public/email.png";

export default {
  title: "App/Social",
  component: Social,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Social>;

const Template: ComponentStory<typeof Social> = (args) => <Social {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  imagePath: LinkedInIcon,
  name: "LinkedIn",
  alt: "LinkedIn Profile",
  imageWidth: 25,
  imageHeight: 25,
  url: "https://linkedin.com",
};
