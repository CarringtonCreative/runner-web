import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
import SettingsIcon from "../../../public/settings.png";
import LogoutButton from "../logout/LogoutButton";
import LogoutIcon from "../../../public/logout.png";
import Avatar from "../../../public/arlan.png";

import "./MainMenu.css";
import Content from "../content/Content";

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

const MainMenu = (props: any) => {
  const [open, setOpen] = useState(true);
  const { collapseSidebar } = useProSidebar();
  const menuToggleSymbol = open ? "←" : "→";
  const menuToggleClass = open ? "menu-close-button" : "menu-open-button";
  const toggleSidebar = () => {
    setOpen(!open);
    collapseSidebar();
  };

  return (
    <div style={{ display: "flex", height: "100vh", minHeight: "100vh" }}>
      <main
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Sidebar
          width={"20vw"}
          rootStyles={{
            [`.${sidebarClasses.container}`]: SidebarClasses,
          }}
        >
          <div className="menu-header-container">
            <Logo label="Runner" />
          </div>
          <Menu
            rootStyles={{
              [`.${menuClasses.menuItemRoot}`]: MenuClasses,
            }}
          >
            <MenuItem
              rootStyles={{
                ["." + menuClasses.button]: MenuItemClasses,
              }}
              routerLink={<Link href="/" />}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Image
                  src={DashboardIcon}
                  alt="Dashboard"
                  width={25}
                  height={25}
                />
                <h3
                  style={{
                    fontFamily: "Gotham Black",
                    fontSize: "1.25rem",
                    margin: "0rem 1rem",
                  }}
                >
                  Dashboard
                </h3>
              </div>
            </MenuItem>
            <MenuItem
              rootStyles={{
                ["." + menuClasses.button]: MenuItemClasses,
              }}
              routerLink={<Link href="/" />}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Image
                  src={RecruitersIcon}
                  alt="Dashboard"
                  width={25}
                  height={25}
                />
                <h3
                  style={{
                    fontFamily: "Gotham Black",
                    fontSize: "1.25rem",
                    margin: "0rem 1rem",
                  }}
                >
                  Recruiters
                </h3>
              </div>
            </MenuItem>
            <MenuItem
              rootStyles={{
                ["." + menuClasses.button]: MenuItemClasses,
              }}
              routerLink={<Link href="/" />}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Image
                  src={RunnersIcon}
                  alt="Dashboard"
                  width={25}
                  height={25}
                />
                <h3
                  style={{
                    fontFamily: "Gotham Black",
                    fontSize: "1.25rem",
                    margin: "0rem 1rem",
                  }}
                >
                  Runners
                </h3>
              </div>
            </MenuItem>
            <MenuItem
              rootStyles={{
                ["." + menuClasses.button]: MenuItemClasses,
              }}
              routerLink={<Link href="/" />}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Image
                  src={SettingsIcon}
                  alt="Dashboard"
                  width={25}
                  height={25}
                />
                <h3
                  style={{
                    fontFamily: "Gotham Black",
                    fontSize: "1.25rem",
                    margin: "0rem 1rem",
                  }}
                >
                  Settings
                </h3>
              </div>
            </MenuItem>
          </Menu>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "10rem",
            }}
          >
            {" "}
            <Image
              style={{ borderRadius: "6rem" }}
              src={Avatar}
              alt="Dashboard"
              width={100}
              height={100}
            />
            <h3
              style={{
                color: "#351572",
                fontFamily: "Gotham Black",
                fontSize: "1.25rem",
                margin: "0rem 1rem",
              }}
            >
              Arlan Hamilton
            </h3>
            <p
              style={{
                color: "#351572",
                fontFamily: "Gotham Book",
                fontSize: "1rem",
                margin: "0rem auto",
              }}
            >
              Founder, Investor, Author
            </p>
            <p
              style={{
                fontSize: "1.25rem",
                margin: "0rem auto",
              }}
            >
              🦄
            </p>
            <LogoutButton
              label="Logout"
              image={LogoutIcon}
              imageHeight={25}
              imageWidth={25}
            />
          </div>
        </Sidebar>
        {/* <button className="menu-toggle-button" onClick={toggleSidebar}>
          <span>{menuToggleSymbol}</span>
        </button> */}
        <Content />
      </main>
    </div>
  );
};

export default MainMenu;
