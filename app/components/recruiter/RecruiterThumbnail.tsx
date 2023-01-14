import React from "react";
import "./Recruiter.css";

import MessageButton, {
  MessageButtonProps,
} from "../messageButton/MessageButton";

import Metrics, { MetricsProps } from "../metric/Metrics";
import Tags, { TagsProps } from "../tag/Tags";
import Socials, { SocialsProps } from "../socials/Socials";
import ExternalLink, { ExternalLinkProps } from "../externalLink/ExternalLink";

export interface RecruiterTumbnailProps {
  primary?: boolean;
  title: string;
  companyName: string;
  companyUrl: string;
  externalLink: ExternalLinkProps;
  metrics: MetricsProps;
  messageButton: MessageButtonProps;
  tags: TagsProps;
  socials: SocialsProps;
}

const RecruiterThumbnail = (props: RecruiterTumbnailProps) => {
  const { title, metrics, externalLink, messageButton, tags, socials } = props;
  return (
    <div className="recruiter-thumbnail-card">
      <div className="recruiter-thumbnail-header">
        <div className="recruiter-details">
          <p className="recruiter-title">{title}</p>
          <ExternalLink {...externalLink} />
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
