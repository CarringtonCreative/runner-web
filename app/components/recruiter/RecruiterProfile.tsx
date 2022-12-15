import React, { useState } from "react";
import "./Recruiter.css";

import MessageButton, {
  MessageButtonProps,
} from "../messageButton/MessageButton";
import Rating, { RatingProps } from "../rating/Rating";
import Metrics, { MetricsProps } from "../metric/Metrics";
import Tags, { TagsProps } from "../tag/Tags";
import MissionSection, { MissionSectionProps } from "../mission/MissionSection";
import Biography, { BiographyProps } from "../biography/Biography";
import EventSection, { EventCardsProps } from "../eventCard/EventSection";
import Socials, { SocialsProps } from "../socials/Socials";

export interface RecruiterProfileProps {
  primary?: boolean;
  title: string;
  rating: RatingProps;
  metrics: MetricsProps;
  messageButton: MessageButtonProps;
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
    rating,
    metrics,
    messageButton,
    missionSection,
    tags,
    events,
    socials,
  } = props;
  return (
    <div className="recruiter-profile-container">
      <div className="recruiter-profile-header">
        <div className="recruiter-details">
          <p className="recruiter-title">{title}</p>
          <Rating {...rating} />
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
