import React, { useState } from "react";
import RunnerProfile from "../runner/RunnerProfile";
import RunnerThumbnail from "../runner/RunnerThumbnail";
import { tagSection } from "../tag/TagData";
import { metricsData } from "../metric/MetricData";
import { messageButtonData } from "../messageButton/MessageButtonData";
import { biography } from "../biography/BiographyData";
import { eventDataSection, eventsData } from "../eventCard/EventData";
import { missionTagSection } from "../mission/MissionData";
import { rating } from "../rating/RatingData";
import { socials } from "../socials/SocialsData";

import "./Content.css";

const getRunnerThumbnail = () => {
  return (
    <RunnerThumbnail
      title={"Lavender Smith"}
      tags={tagSection}
      metrics={metricsData}
      messageButton={messageButtonData}
      rating={rating}
      socials={socials}
    />
  );
};

const getRunnerProfile = () => {
  return (
    <RunnerProfile
      title={"Lavender Smith"}
      tags={tagSection}
      metrics={metricsData}
      events={eventDataSection}
      biography={biography}
      messageButton={messageButtonData}
      missionSection={missionTagSection}
      rating={rating}
      socials={socials}
    />
  );
};

const Content = (props: any) => {
  return (
    <aside className="content-conatiner">
      <div className="">
        <div className="content-header-conatiner"></div>
        <div className="content-inner-conatiner">
          <div className="content-left-aside-container">
            {getRunnerThumbnail()}
            {getRunnerThumbnail()}
            {getRunnerThumbnail()}
            {getRunnerThumbnail()}
          </div>
          <div className="content-right-aside-container">
            {getRunnerProfile()}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Content;
