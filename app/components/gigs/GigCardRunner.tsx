import React from "react";
import Image, { StaticImageData } from "next/image";
import RunnerRateIcon from "../../../public/hourly-pay.png";
import "./Gigs.css";
import Metric, { MetricProps } from "../metric/Metric";
import Tags, { TagsProps } from "../tag/Tags";
import ApplyButton, { ApplyButtonProps } from "../applyButton/ApplyButton";
import PointOfContact, { PointOfContactProps } from "./PointOfContact";
import GigCompany, { GigCompanyProps } from "./GigCompany";
import Socials, { SocialsProps } from "../socials/Socials";

export interface GigCardRunnerProps {
  runnerName: string;
  runnerRate: string;
  description: string;
  metrics: MetricProps[];
  tags: TagsProps;
  label: string;
  apply: ApplyButtonProps;
  pointOfContact: PointOfContactProps;
  gigCompany: GigCompanyProps;
  socials: SocialsProps;
}

const getMetric = (
  label: string,
  icon: StaticImageData,
  iconWidth: number = 20,
  iconHeight: number = 20
) => {
  return (
    <div className="gig-metric-container">
      <Image alt={label} src={icon} width={iconWidth} height={iconHeight} />
      <h3 className="gig-metric-title">{label}</h3>
    </div>
  );
};

const getRunnerRateMetric = (
  label: string,
  imageWidth: number = 20,
  imageHeight: number = 20
) => {
  return (
    <div className="gig-metric-container">
      <Image
        alt="Runner Rate"
        src={RunnerRateIcon}
        width={imageWidth}
        height={imageHeight}
      />
      <h3 className="gig-metric-title">{label}</h3>
    </div>
  );
};

const getMetrics = (metrics: MetricProps[]) => {
  return (
    <ul className="gig-card-metrics">
      {metrics.map((metric, index) => {
        return <li key={index}>{<Metric {...metric} />}</li>;
      })}
    </ul>
  );
};

const getDescription = (description: string) => {
  return (
    <div className="gig-card-description-container">
      <h3 className="gig-card-header">Description</h3>
      <p className="gig-card-description">{description}</p>
    </div>
  );
};

const GigCardRunner = (props: GigCardRunnerProps) => {
  const {
    metrics,
    tags,
    apply,
    pointOfContact,
    gigCompany,
    description,
    socials,
  } = props;
  return (
    <div className="gig-card-container">
      <h3 className="gig-card-title">Technical Product Manager</h3>
      <div className="gig-card-subtitle-container">
        <PointOfContact {...pointOfContact} />
        <GigCompany {...gigCompany} />
        <Socials {...socials} />
      </div>
      {getDescription(description)}
      <div className="gig-card-details">
        <h3 className="gig-card-header">Details</h3>
        {getMetrics(metrics)}
      </div>
      <Tags {...tags} />
      <div style={{ alignSelf: "flex-end" }}>
        <ApplyButton {...apply} />
      </div>
    </div>
  );
};

export default GigCardRunner;
