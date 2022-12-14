import React from "react";
import "./Runner.css";

import MessageButton, {
  MessageButtonProps,
} from "../messageButton/MessageButton";
import Rating, { RatingProps } from "../rating/Rating";
import Metrics, { MetricsProps } from "../metric/Metrics";
import Tags, { TagsProps } from "../tag/Tags";
import Socials, { SocialsProps } from "../socials/Socials";

export interface RunnerTumbnailProps {
  primary?: boolean;
  title: string;
  rating: RatingProps;
  metrics: MetricsProps;
  messageButton: MessageButtonProps;
  tags: TagsProps;
  socials: SocialsProps;
}

const RunnerThumbnail = (props: RunnerTumbnailProps) => {
  const { title, rating, metrics, messageButton, tags, socials } = props;
  return (
    <div className="runner-thumbnail-card">
      <div className="runner-thumbnail-header">
        <div className="runner-details">
          <p className="runner-title">{title}</p>
          <Rating {...rating} />
        </div>
        <div className="runner-details">
          <MessageButton {...messageButton} />
          <Socials {...socials} />
        </div>
      </div>
      <Metrics {...metrics} />
      <Tags {...tags} />
    </div>
  );
};

export default RunnerThumbnail;
