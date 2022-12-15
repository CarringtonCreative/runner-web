import React from "react";
import "./logo.css";
// import Image from "next/image";

// import LOGOIMAGE from "../public/sneakers.png";

interface LogoProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Logo contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Logo = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: LogoProps) => {
  const logoMode = primary ? "logo-light" : "logo-dark";
  const dashMode = primary ? "dash-light" : "dash-dark";
  return (
    <div className="logo-container">
      {/* <Image src={LOGOIMAGE} alt="" width={100} height={100} /> */}
      <div className="dashes">
        <div className={["dash", "dash-top", dashMode].join(" ")}></div>
        <div className={["dash", "dash-center", dashMode].join(" ")}></div>
        <div className={["dash", "dash-bottom", dashMode].join(" ")}></div>
      </div>
      <span
        className={["logo", `logo-${size}`, logoMode].join(" ")}
        style={{ backgroundColor }}
        {...props}
      >
        {label}
      </span>
    </div>
  );
};
