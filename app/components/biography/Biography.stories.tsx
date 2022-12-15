import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Biography from "./Biography";

export default {
  title: "App/Biography",
  component: Biography,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Biography>;

const Template: ComponentStory<typeof Biography> = (args) => (
  <Biography {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  title: "Biography",
  description:
    "Hi there! I'm a business analyst with over five years of experience working with top tech companies. Currently, I'm excited to be working temporarily at a big tech company, where I'm able to utilize my skills and expertise to help drive business growth and success. In my free time, I love to rock climb and hike in the beautiful Pacific Northwest. I'm also an avid reader, and you can usually find me with my nose buried in a good book. I'm excited to be working with such a talented team and can't wait to see what the future holds!",
};
