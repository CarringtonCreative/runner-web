import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Content.css";
import RunnerProfile from "../runner/RunnerProfile";

import { MessageButtonProps } from "../messageButton/MessageButton";
import { TagsProps } from "../tag/Tags";
import { MetricsProps } from "../metric/Metrics";

import HoursBookedIcon from "../../../public/sneakers.png";
import MoneyEarnedIcon from "../../../public/money-transfer.png";
import MatchIcon from "../../../public/match.png";
import GigsCompletedIcon from "../../../public/gig-completed.png";
import ReviewsIcon from "../../../public/reviews.png";
import { MissionSectionProps } from "../mission/MissionSection";
import { BiographyProps } from "../biography/Biography";
import { EventCardsProps } from "../eventCard/EventSection";
import moment from "moment";
import RunnerThumbnail from "../runner/RunnerThumbnail";

const rating = {
  active: false,
  rating: 4,
  ratings: 0,
  iconWidth: 20,
  iconHeight: 20,
  onClick: () => {
    console.log("Create rating");
  },
};

const tags = {
  title: "Roles + Skills",
  tags: [
    {
      primary: true,
      label: "Operations",
      color: "#fff",
      backgroundColor: "#D64933",
    },
    {
      primary: true,
      label: "Product Manager",
      color: "#fff",
      backgroundColor: "#FF7777",
    },
    {
      primary: true,
      label: "Project Manager",
      color: "#fff",
      backgroundColor: "#FF7777",
    },
    {
      primary: true,
      label: "Tech Savy",
      color: "#fff",
      backgroundColor: "#FF7777",
    },
    {
      primary: true,
      label: "Risk Management Focused",
      color: "#fff",
      backgroundColor: "#FF7777",
    },
    {
      primary: true,
      label: "Marketing",
      color: "#fff",
      backgroundColor: "#FF7777",
    },
  ],
} as TagsProps;

const metrics = {
  metrics: [
    {
      primary: true,
      imagePath: HoursBookedIcon,
      alt: "",
      title: "",
      metric: 648,
      label: "hrs booked",
      iconWidth: 25,
      iconHeight: 25,
    },
    {
      primary: true,
      imagePath: MoneyEarnedIcon,
      alt: "",
      title: "$",
      metric: 85098,
      label: "earned",
      iconWidth: 25,
      iconHeight: 25,
    },
    {
      primary: true,
      imagePath: GigsCompletedIcon,
      alt: "",
      title: "",
      metric: 32,
      label: "gigs completed",
      iconWidth: 25,
      iconHeight: 25,
    },
    {
      primary: true,
      imagePath: ReviewsIcon,
      alt: "",
      title: "",
      metric: 12,
      label: "reviews",
      iconWidth: 25,
      iconHeight: 25,
    },
  ],
} as MetricsProps;

const missionSection = {
  title: "Mission + Culture Fit",
  tags: [
    {
      primary: true,
      label: "Disability Rights",
      color: "#351572",
      backgroundColor: "#C9ABE3",
    },
    {
      primary: true,
      label: "Doing Good In The World",
      color: "#351572",
      backgroundColor: "#C9ABE3",
    },
    {
      primary: true,
      label: "Inclusivity",
      color: "#351572",
      backgroundColor: "#C9ABE3",
    },
    {
      primary: true,
      label: "Animal Welfare",
      color: "#351572",
      backgroundColor: "#C9ABE3",
    },
    {
      primary: true,
      label: "First Generation",
      color: "#351572",
      backgroundColor: "#C9ABE3",
    },
    {
      primary: true,
      label: "Environment & Climate Change",
      color: "#351572",
      backgroundColor: "#C9ABE3",
    },
  ],
} as MissionSectionProps;

const messageButton = {
  primary: true,
  alt: "",
  label: "Message",
  iconHeight: 20,
  iconWidth: 20,
  onClick: () => {
    console.log("Send a message");
  },
} as MessageButtonProps;

const biography = {
  primary: true,
  title: "Biography",
  description:
    "Hi there! I'm a business analyst with over five years of experience working with top tech companies. Currently, I'm excited to be working temporarily at a big tech company, where I'm able to utilize my skills and expertise to help drive business growth and success. In my free time, I love to rock climb and hike in the beautiful Pacific Northwest. I'm also an avid reader, and you can usually find me with my nose buried in a good book. I'm excited to be working with such a talented team and can't wait to see what the future holds!",
} as BiographyProps;

const events = {
  title: "History",
  events: [
    {
      primary: true,
      label: "Match",
      alt: "Match",
      subject: "Lavender Smith",
      event: "matched with Fairly via David Van Bruwaene",
      timestamp: moment().startOf("day").fromNow(),
      imageSrc: MatchIcon,
      imageWidth: 25,
      imageHeight: 25,
    },
    {
      primary: true,
      label: "Match",
      alt: "Match",
      subject: "Lavender Smith",
      event: "matched with Fairly via David Van Bruwaene",
      timestamp: moment().startOf("day").fromNow(),
      imageSrc: MatchIcon,
      imageWidth: 25,
      imageHeight: 25,
    },
    {
      primary: true,
      label: "Match",
      alt: "Match",
      subject: "Lavender Smith",
      event: "matched with Fairly via David Van Bruwaene",
      timestamp: moment().startOf("day").fromNow(),
      imageSrc: MatchIcon,
      imageWidth: 25,
      imageHeight: 25,
    },
  ],
} as EventCardsProps;

const getRunnerThumbnail = () => {
  return (
    <RunnerThumbnail
      title={"Lavender Smith"}
      tags={tags}
      metrics={metrics}
      messageButton={messageButton}
      rating={rating}
    />
  );
};

const getRunnerProfile = () => {
  return (
    <RunnerProfile
      title={"Lavender Smith"}
      tags={tags}
      metrics={metrics}
      events={events}
      biography={biography}
      messageButton={messageButton}
      missionSection={missionSection}
      rating={rating}
    />
  );
};

const Content = (props: any) => {
  return (
    <aside className="content-conatiner">
      <div className="">
        <div className="content-header-conatiner"></div>
        <div className="content-inner-conatiner">
          <div className="content-list-container">
            {getRunnerThumbnail()}
            {getRunnerThumbnail()}
          </div>
          <div className="content-aside-container">{getRunnerProfile()}</div>
        </div>
      </div>
    </aside>
  );
};

export default Content;
