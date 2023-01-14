import React from "react";
import "./Recruiter.css";

import MessageButton, {
  MessageButtonProps,
} from "../messageButton/MessageButton";
import Metrics, { MetricsProps } from "../metric/Metrics";
import Tags, { TagsProps } from "../tag/Tags";
import MissionSection, { MissionSectionProps } from "../mission/MissionSection";
import Biography, { BiographyProps } from "../biography/Biography";
import EventSection, { EventCardsProps } from "../eventCard/EventSection";
import Socials, { SocialsProps } from "../socials/Socials";
import ExternalLink, { ExternalLinkProps } from "../externalLink/ExternalLink";

export interface RecruiterProfileProps {
  primary?: boolean;
  title: string;
  companyName: string;
  companyUrl: string;
  metrics: MetricsProps;
  messageButton: MessageButtonProps;
  externalLink: ExternalLinkProps;
  tags: TagsProps;
  missionSection: MissionSectionProps;
  biography: BiographyProps;
  events: EventCardsProps;
  socials: SocialsProps;
}

const RecruiterProfile = (props: RecruiterProfileProps) => {
  const {
    biography,
    title,
    metrics,
    messageButton,
    missionSection,
    tags,
    events,
    socials,
    externalLink,
  } = props;
  return (
    <div className="recruiter-profile-container">
      <div className="recruiter-profile-header">
        <div className="recruiter-details">
          <p className="recruiter-title">{title}</p>
          <ExternalLink {...externalLink} />
        </div>
        <MessageButton {...messageButton} />
      </div>
      <Socials {...socials} />
      <Metrics {...metrics} />
      <Biography {...biography} />
      <Tags {...tags} />
      <MissionSection {...missionSection} />
      <EventSection {...events} />
    </div>
  );
};

export default RecruiterProfile;
