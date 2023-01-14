import React, { useState, useEffect, MouseEventHandler } from "react";
import data from "../app/utils/data";
import Home from "../app/components/home/Home";

// App.getInitialProps = async () => {
//   const companies = Object.values(data.matches.companies);
//   return { data, companies };
// };

export default function MainMenu(props: any) {
  return <Home />;
}
