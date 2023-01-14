import React, { useEffect, useState } from "react";
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

import { DashboardMetricProps } from "../dashboard/DashboardMetric";

import "./Content.css";
import Dashboard from "../dashboard/Dashboard";
import { TAB } from "../../constants/constant";
import { dashboardData } from "../dashboard/DashboardData";

const renderDashboard = () => {
  return <Dashboard data={dashboardData} />;
};
const renderGigs = () => {
  return (
    <div className="content-inner-conatiner">
      <div className="content-left-aside-container"></div>
      <div className="content-right-aside-container"></div>
    </div>
  );
};
const renderMatches = () => {
  return (
    <div className="content-inner-conatiner">
      <div className="content-left-aside-container"></div>
      <div className="content-right-aside-container"></div>
    </div>
  );
};
const renderRecruiter = () => {
  return (
    <div className="content-inner-conatiner">
      <div className="content-left-aside-container"></div>
      <div className="content-right-aside-container"></div>
    </div>
  );
};
const renderRunners = () => {
  return (
    <div className="content-inner-conatiner">
      <div className="content-left-aside-container">
        {getRunnerThumbnail()}
        {getRunnerThumbnail()}
        {getRunnerThumbnail()}
        {getRunnerThumbnail()}
      </div>
      <div className="content-right-aside-container">{getRunnerProfile()}</div>
    </div>
  );
};

const renderSettings = () => {
  return (
    <div className="content-inner-conatiner">
      <div className="content-left-aside-container"></div>
      <div className="content-right-aside-container"></div>
    </div>
  );
};

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

const renderRunnerContent = () => {
  return (
    <div className="content-inner-conatiner">
      <div className="content-left-aside-container">
        {getRunnerThumbnail()}
        {getRunnerThumbnail()}
        {getRunnerThumbnail()}
        {getRunnerThumbnail()}
      </div>
      <div className="content-right-aside-container">{getRunnerProfile()}</div>
    </div>
  );
};

export interface ContentProps {
  primary?: boolean;
  activeTab: string;
}

const Content = (props: ContentProps) => {
  const [activeTab, setActiveTab] = useState(props.activeTab || TAB.DASHBOARD);

  useEffect(() => {
    if (props.activeTab !== activeTab) {
      setActiveTab(props.activeTab);
    }
  }, [props.activeTab, activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case TAB.DASHBOARD:
        return renderDashboard();
      case TAB.RECRUITERS:
        return renderRecruiter();
      case TAB.RUNNERS:
        return renderRunners();
      case TAB.GIGS:
        return renderGigs();
      case TAB.MATCHES:
        return renderMatches();
      case TAB.SETTINGS:
        return renderSettings();
      default:
        return renderDashboard();
    }
  };

  return (
    <aside className="content-conatiner">
      <div className="">
        <div className="content-header-conatiner"></div>
        {renderContent()}
      </div>
    </aside>
  );
};

export default Content;
