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

export interface GigThumbnailProps {
  runnerName: string;
  runnerRate: string;
  metrics: MetricProps[];
  tags: TagsProps;
  label: string;
  apply: ApplyButtonProps;
  description: string;
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
    <ul className="gig-thumbnail-metrics">
      {metrics.map((metric, index) => {
        return <li key={index}>{<Metric {...metric} />}</li>;
      })}
    </ul>
  );
};

const getDescription = (description: string) => {
  const descriptionText =
    description.length > 100
      ? description.substring(0, 100) + "..."
      : description;
  return (
    <div className="gig-card-description-container">
      <p className="gig-card-description">{descriptionText}</p>
    </div>
  );
};

const Gig = (props: GigThumbnailProps) => {
  const { metrics, tags, apply, pointOfContact, gigCompany, description } =
    props;
  return (
    <div className="gig-thumbnail-container">
      <h3 className="gig-thumbnail-title">Technical Product Manager</h3>
      <div className="gig-thumbnail-subtitle-container">
        <PointOfContact {...pointOfContact} />
        <GigCompany {...gigCompany} />
      </div>
      {getDescription(description)}
      <div className="gig-card-details">{getMetrics(metrics)}</div>
      <Tags {...tags} />
    </div>
  );
};

export default Gig;
