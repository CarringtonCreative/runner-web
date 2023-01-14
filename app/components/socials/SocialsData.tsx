import LinkedInIcon from "../../../public/linkedin.png";
import GitHubIcon from "../../../public/github.png";
import TwitterIcon from "../../../public/twitter.png";
import EmailIcon from "../../../public/email.png";
import WebsiteIcon from "../../../public/website.png";
import { SocialProps } from "./Social";
import { SocialsProps } from "./Socials";

export const social = {
  primary: true,
  imagePath: WebsiteIcon,
  name: "Website",
  alt: "Website",
  imageWidth: 20,
  imageHeight: 20,
  url: "https://google.com",
} as SocialProps;

export const socials = {
  primary: false,
  socials: [
    {
      primary: true,
      imagePath: WebsiteIcon,
      name: "Website",
      alt: "Website",
      imageWidth: 20,
      imageHeight: 20,
      url: "https://google.com",
    },
    {
      primary: true,
      imagePath: LinkedInIcon,
      name: "LinkedIn",
      alt: "LinkedIn Profile",
      imageWidth: 20,
      imageHeight: 20,
      url: "https://linkedin.com",
    },
    {
      primary: true,
      imagePath: GitHubIcon,
      name: "Github",
      alt: "Github Profile",
      imageWidth: 20,
      imageHeight: 20,
      url: "https://github.com",
    },
    {
      primary: true,
      imagePath: TwitterIcon,
      name: "Twitter",
      alt: "Twitter Profile",
      imageWidth: 20,
      imageHeight: 20,
      url: "https://twitter.com",
    },
    {
      primary: true,
      imagePath: EmailIcon,
      name: "Email",
      alt: "Email",
      imageWidth: 20,
      imageHeight: 20,
      url: "https://mailto:hey@hirerunner.co",
    },
  ],
} as SocialsProps;
