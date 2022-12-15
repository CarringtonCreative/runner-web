import React, { useState } from "react";
import "./Runner.css";

import MessageButton, {
  MessageButtonProps,
} from "../messageButton/MessageButton";
import Rating, { RatingProps } from "../rating/Rating";
import Metrics, { MetricsProps } from "../metric/Metrics";
import Tags, { TagsProps } from "../tag/Tags";
import MissionSection, { MissionSectionProps } from "../mission/MissionSection";
import Biography, { BiographyProps } from "../biography/Biography";
import EventSection, { EventCardsProps } from "../eventCard/EventSection";

export interface RunnerProfileProps {
  primary?: boolean;
  title: string;
  rating: RatingProps;
  metrics: MetricsProps;
  messageButton: MessageButtonProps;
  tags: TagsProps;
  missionSection: MissionSectionProps;
  biography: BiographyProps;
  events: EventCardsProps;
}

const RunnerProfile = (props: RunnerProfileProps) => {
  const {
    biography,
    title,
    rating,
    metrics,
    messageButton,
    missionSection,
    tags,
    events,
  } = props;
  return (
    <div className="runner-profile-container">
      <div className="runner-profile-header">
        <div className="runner-details">
          <p className="runner-title">{title}</p>
          <Rating {...rating} />
        </div>
        <MessageButton {...messageButton} />
      </div>
      <Metrics {...metrics} />
      <Biography {...biography} />
      <Tags {...tags} />
      <MissionSection {...missionSection} />
      <EventSection {...events} />
    </div>
  );
};

export default RunnerProfile;
