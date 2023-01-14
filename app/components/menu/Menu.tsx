import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Router, { useRouter } from "next/router";

import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  sidebarClasses,
  menuClasses,
} from "react-pro-sidebar";

import { Logo } from "../logo/Logo";
import DashboardIcon from "../../../public/dashboard.png";
import RecruitersIcon from "../../../public/recruiters.png";
import RunnersIcon from "../../../public/runners.png";
import GigsIcon from "../../../public/gigs.png";
import MatchesIcon from "../../../public/match.png";
import SettingsIcon from "../../../public/settings.png";
import Avatar from "../../../public/arlan.png";

import "./Menu.css";
import Content from "../content/Content";
import MenuFooter from "./MenuFooter";
import { TAB } from "../../constants/constant";

const SidebarClasses = {
  padding: "1rem",
  backgroundColor: "#f5e0ff",
  height: "100vh",
};

const MenuClasses = {
  color: "#351572",
  fontFamily: "Gotham Black",
  fontSize: "1.25rem",
  "&:hover": {
    backgroundColor: "#abc",
  },
};

const MenuItemClasses = {
  color: "#351572",
  fontFamily: "Gotham Black",
  fontSize: "1.25rem",
  "&:hover": {
    backgroundColor: "#eecef9",
  },
};

const selected = {
  backgroundColor: "#eaabff",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#eecef9",
  },
};

const MainMenu = (props: any) => {
  const router = useRouter();

  const [selectedMenuItem, setSelectedMenuItem] = useState<string>(
    TAB.DASHBOARD
  );
  const [open, setOpen] = useState(true);
  const { collapseSidebar } = useProSidebar();
  const menuToggleSymbol = open ? "←" : "→";
  const menuToggleClass = open ? "menu-close-button" : "menu-open-button";
  const toggleSidebar = () => {
    setOpen(!open);
    collapseSidebar();
  };

  const handleMenuItemClick = (name: string) => {
    setSelectedMenuItem(name);
  };

  const renderContent = () => {
    switch (selectedMenuItem) {
      case TAB.DASHBOARD:
        return <Content activeTab={TAB.DASHBOARD} />;
      case TAB.RECRUITERS:
        return <Content activeTab={TAB.RECRUITERS} />;
      case TAB.RUNNERS:
        return <Content activeTab={TAB.RUNNERS} />;
      case TAB.GIGS:
        return <Content activeTab={TAB.GIGS} />;
      case TAB.MATCHES:
        return <Content activeTab={TAB.MATCHES} />;
      case TAB.SETTINGS:
        return <Content activeTab={TAB.SETTINGS} />;
      default:
        return <Content activeTab={TAB.DASHBOARD} />;
    }
  };

  const getMenuItemIcon = (name: string) => {
    switch (name) {
      case TAB.DASHBOARD:
        return (
          <Image
            src={DashboardIcon}
            alt="Dashboard Tab"
            width={25}
            height={25}
          />
        );
      case TAB.RECRUITERS:
        return (
          <Image
            src={RecruitersIcon}
            alt="Recruiter Tab"
            width={25}
            height={25}
          />
        );
      case TAB.RUNNERS:
        return (
          <Image src={RunnersIcon} alt="Runners Tab" width={25} height={25} />
        );
      case TAB.GIGS:
        return <Image src={GigsIcon} alt="Gigs Tab" width={25} height={25} />;
      case TAB.MATCHES:
        return (
          <Image src={MatchesIcon} alt="Matches Tab" width={25} height={25} />
        );
      case TAB.SETTINGS:
        return (
          <Image src={SettingsIcon} alt="Settings Tab" width={25} height={25} />
        );
    }
  };

  const getMenuItem = (label: string, name: string) => {
    return (
      <MenuItem
        rootStyles={{
          ["." + menuClasses.button]:
            selectedMenuItem == name ? selected : MenuItemClasses,
        }}
        routerLink={<Link href="/" />}
        onClick={() => {
          handleMenuItemClick(name);
        }}
      >
        <div className="menu-item-content-container">
          {getMenuItemIcon(name)}
          <h3 className="menu-item-text">{label}</h3>
        </div>
      </MenuItem>
    );
  };

  const getMenuHeader = () => {
    return (
      <div className="menu-header-container">
        <Logo label="Runner" />
      </div>
    );
  };

  const getMenuItems = () => {
    return (
      <Menu
        rootStyles={{
          [`.${menuClasses.menuItemRoot}`]: MenuClasses,
        }}
      >
        {getMenuItem("Dashboard", TAB.DASHBOARD)}
        {getMenuItem("Recruiters", TAB.RECRUITERS)}
        {getMenuItem("Talent", TAB.RUNNERS)}
        {getMenuItem("Gigs", TAB.GIGS)}
        {getMenuItem("Matches", TAB.MATCHES)}
        {getMenuItem("Settings", TAB.SETTINGS)}
      </Menu>
    );
  };

  return (
    <div style={{ display: "flex", height: "100vh", minHeight: "100vh" }}>
      <main className="main-menu-content-container">
        <Sidebar
          width={"20vw"}
          rootStyles={{
            [`.${sidebarClasses.container}`]: SidebarClasses,
          }}
        >
          {getMenuHeader()}
          {getMenuItems()}
          <MenuFooter />
        </Sidebar>
        {renderContent()}
      </main>
    </div>
  );
};

export default MainMenu;
