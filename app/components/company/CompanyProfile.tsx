import React, { useState } from "react";
import "./Company.css";

import MessageButton, {
  MessageButtonProps,
} from "../messageButton/MessageButton";
import Metrics, { MetricsProps } from "../metric/Metrics";
import Tags, { TagsProps } from "../tag/Tags";
import MissionSection, { MissionSectionProps } from "../mission/MissionSection";
import Biography, { BiographyProps } from "../biography/Biography";
import EventSection, { EventCardsProps } from "../eventCard/EventSection";
import Socials, { SocialsProps } from "../socials/Socials";
import CompanyRecruiter, { CompanyRecruiterProps } from "./CompanyRecruiter";

export interface CompanyProfileProps {
  primary?: boolean;
  companyName: string;
  companyUrl: string;
  metrics: MetricsProps;
  messageButton: MessageButtonProps;
  tags: TagsProps;
  missionSection: MissionSectionProps;
  biography: BiographyProps;
  events: EventCardsProps;
  socials: SocialsProps;
  recruiters: CompanyRecruiterProps;
}

const CompanyProfile = (props: CompanyProfileProps) => {
  const {
    biography,
    companyName,
    metrics,
    messageButton,
    missionSection,
    tags,
    events,
    socials,
    recruiters,
  } = props;
  return (
    <div className="company-profile-container">
      <div className="company-profile-header">
        <div className="company-details">
          <p className="company-title">{companyName}</p>
          <Socials {...socials} />
        </div>
        <MessageButton {...messageButton} />
      </div>
      <CompanyRecruiter {...recruiters} />
      <Biography {...biography} />
      <Metrics {...metrics} />
      <Tags {...tags} />
      <MissionSection {...missionSection} />
      <EventSection {...events} />
    </div>
  );
};

export default CompanyProfile;
