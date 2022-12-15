import React from "react";
import "./Recruiter.css";

import MessageButton, {
  MessageButtonProps,
} from "../messageButton/MessageButton";
import Rating, { RatingProps } from "../rating/Rating";
import Metrics, { MetricsProps } from "../metric/Metrics";
import Tags, { TagsProps } from "../tag/Tags";
import Socials, { SocialsProps } from "../socials/Socials";

export interface RecruiterTumbnailProps {
  primary?: boolean;
  title: string;
  rating: RatingProps;
  metrics: MetricsProps;
  messageButton: MessageButtonProps;
  tags: TagsProps;
  socials: SocialsProps;
}

const RecruiterThumbnail = (props: RecruiterTumbnailProps) => {
  const { title, rating, metrics, messageButton, tags, socials } = props;
  return (
    <div className="recruiter-thumbnail-card">
      <div className="recruiter-thumbnail-header">
        <div className="recruiter-details">
          <p className="recruiter-title">{title}</p>
          <Rating {...rating} />
        </div>
        <div className="recruiter-details">
          <MessageButton {...messageButton} />
          <Socials {...socials} />
        </div>
      </div>
      <Metrics {...metrics} />
      <Tags {...tags} />
    </div>
  );
};

export default RecruiterThumbnail;
