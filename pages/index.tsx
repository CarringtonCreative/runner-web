import React, { useState, useEffect, MouseEventHandler } from "react";
import data from "../app/utils/data";
import MainMenu from "../app/components/mainMenu/MainMenu";

Home.getInitialProps = async () => {
  const companies = Object.values(data.matches.companies);
  return { data, companies };
};

export default function Home(props: any) {
  return <MainMenu />;
}
