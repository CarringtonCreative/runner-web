import React from "react";
import Image, { StaticImageData } from "next/image";
import RunnersIcon from "../../../public/runners.png";
import RunnerRateIcon from "../../../public/hourly-pay.png";
import "./Gigs.css";

export interface GigProps {
  runnerName: string;
  runnerRate: string;
  image: StaticImageData;
  imageWidth: number;
  imageHeight: number;
  label: string;
}

const getRunnerMetric = (
  label: string,
  imageWidth: number = 20,
  imageHeight: number = 20
) => {
  return (
    <div className="gig-metric-container">
      <Image
        alt="Runner"
        src={RunnersIcon}
        width={imageWidth}
        height={imageHeight}
      />
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

const Gig = (props: GigProps) => {
  return (
    <div className="gig-container">
      <h3 className="gig-metric-header">Operations</h3>
      {getRunnerMetric("Jamie Perez")}
      {getRunnerRateMetric("$62/hr")}
    </div>
  );
};

export default Gig;
