import React from "react";
import "./Company.css";

import MessageButton, {
  MessageButtonProps,
} from "../messageButton/MessageButton";

import Metrics, { MetricsProps } from "../metric/Metrics";
import Tags, { TagsProps } from "../tag/Tags";
import Socials, { SocialsProps } from "../socials/Socials";
import CompanyRecruiter, { CompanyRecruiterProps } from "./CompanyRecruiter";

export interface CompanyTumbnailProps {
  primary?: boolean;
  title: string;
  companyName: string;
  companyUrl: string;
  metrics: MetricsProps;
  messageButton: MessageButtonProps;
  tags: TagsProps;
  socials: SocialsProps;
  recruiters: CompanyRecruiterProps;
}

const CompanyThumbnail = (props: CompanyTumbnailProps) => {
  const { companyName, metrics, messageButton, tags, socials, recruiters } =
    props;
  return (
    <div className="company-thumbnail-card">
      <div className="company-thumbnail-header">
        <div className="company-details">
          <p className="company-title">{companyName}</p>
          <Socials {...socials} />
        </div>
        <div className="company-details">
          <MessageButton {...messageButton} />
        </div>
      </div>
      <CompanyRecruiter {...recruiters} />
      <Metrics {...metrics} />
      <Tags {...tags} />
    </div>
  );
};

export default CompanyThumbnail;
