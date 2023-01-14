import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CompanyRecruiter from "./CompanyRecruiter";
import { companyRecruiters } from "./CompanyData";

export default {
  title: "App/Company Recruiter",
  component: CompanyRecruiter,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CompanyRecruiter>;

const Template: ComponentStory<typeof CompanyRecruiter> = (args) => (
  <CompanyRecruiter {...args} />
);

export const Primary = Template.bind({});

Primary.args = { ...companyRecruiters };
