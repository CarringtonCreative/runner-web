import React from "react";
import "./Runner.css";

import MessageButton, {
  MessageButtonProps,
} from "../messageButton/MessageButton";
import Rating, { RatingProps } from "../rating/Rating";
import Metrics, { MetricsProps } from "../metric/Metrics";
import Tags, { TagsProps } from "../tag/Tags";

export interface RunnerTumbnailProps {
  primary?: boolean;
  title: string;
  rating: RatingProps;
  metrics: MetricsProps;
  messageButton: MessageButtonProps;
  tags: TagsProps;
}

const RunnerThumbnail = (props: RunnerTumbnailProps) => {
  const { title, rating, metrics, messageButton, tags } = props;
  return (
    <div className="runner-thumbnail-card">
      <div className="runner-thumbnail-header">
        <div className="runner-details">
          <p className="runner-title">{title}</p>
          <Rating {...rating} />
        </div>
        <MessageButton {...messageButton} />
      </div>
      <Metrics {...metrics} />
      <Tags {...tags} />
    </div>
  );
};

export default RunnerThumbnail;
