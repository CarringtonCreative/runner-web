import React from "react";
import Image from "next/image";

import LinkedinIcon from "../../../public/linkedin.png";
import GitHubIcon from "../../../public/github.png";
import TwitterIcon from "../../../public/twitter.png";
import EmailIcon from "../../../public/email.png";
import WebsiteIcon from "../../../public/website.png";

import DashboardIcon from "../../../public/dashboard.png";
import RecruitersIcon from "../../../public/recruiters.png";
import RunnersIcon from "../../../public/runners.png";
import GigsIcon from "../../../public/gigs.png";
import MatchesIcon from "../../../public/match.png";
import SettingsIcon from "../../../public/settings.png";
import LogoutIcon from "../../../public/logout.png";
import DefaultAvatar from "../../../public/arlan.png";

const defaultHeight = 20;
const defaultWidth = 20;

export const GetLinkedinIcon = (
  width: number = defaultWidth,
  height: number = defaultHeight
) => {
  return (
    <Image alt="LinkedIn" src={LinkedinIcon} width={width} height={height} />
  );
};
export const GetGitHubIcon = (
  width: number = defaultWidth,
  height: number = defaultHeight
) => {
  return <Image alt="GitHub" src={GitHubIcon} width={width} height={height} />;
};
export const GetTwitterIcon = (
  width: number = defaultWidth,
  height: number = defaultHeight
) => {
  return (
    <Image alt="Twitter" src={TwitterIcon} width={width} height={height} />
  );
};
export const GetEmailIcon = (
  width: number = defaultWidth,
  height: number = defaultHeight
) => {
  return <Image alt="Email" src={EmailIcon} width={width} height={height} />;
};

export const GetWebsiteIcon = (
  width: number = defaultWidth,
  height: number = defaultHeight
) => {
  return (
    <Image alt="Website" src={WebsiteIcon} width={width} height={height} />
  );
};
export const GetRunnerIcon = (
  width: number = defaultWidth,
  height: number = defaultHeight
) => {
  return <Image alt="Runner" src={RunnersIcon} width={width} height={height} />;
};
export const GetDashboardIcon = (
  width: number = defaultWidth,
  height: number = defaultHeight
) => {
  return (
    <Image alt="Dashboard" src={DashboardIcon} width={width} height={height} />
  );
};
export const GetRecruitersIcon = (
  width: number = defaultWidth,
  height: number = defaultHeight
) => {
  return (
    <Image
      alt="Recruiters"
      src={RecruitersIcon}
      width={width}
      height={height}
    />
  );
};
export const GetGigsIcon = (
  width: number = defaultWidth,
  height: number = defaultHeight
) => {
  return <Image alt="Gigs" src={GigsIcon} width={width} height={height} />;
};
export const GetMatchesIcon = (
  width: number = defaultWidth,
  height: number = defaultHeight
) => {
  return (
    <Image alt="Matches" src={MatchesIcon} width={width} height={height} />
  );
};
export const GetSettingsIcon = (
  width: number = defaultWidth,
  height: number = defaultHeight
) => {
  return (
    <Image alt="Settings" src={SettingsIcon} width={width} height={height} />
  );
};
export const GetLogoutIcon = (
  width: number = defaultWidth,
  height: number = defaultHeight
) => {
  return <Image alt="Logout" src={LogoutIcon} width={width} height={height} />;
};
export const GetDefaultAvatar = (
  width: number = defaultWidth,
  height: number = defaultHeight
) => {
  return (
    <Image alt="Avatar" src={DefaultAvatar} width={width} height={height} />
  );
};
