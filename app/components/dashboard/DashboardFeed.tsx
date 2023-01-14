import React from "react";
import EventCards, { EventCardsProps } from "../eventCard/EventCards";
import "./Dashboard.css";

export interface DashboardFeedProps {
  primary?: boolean;
  data: EventCardsProps;
}

const DashboardFeed = (props: DashboardFeedProps) => {
  const { data } = props;
  return <></>;
  //return <EventCards events={data} />;
};

export default DashboardFeed;
