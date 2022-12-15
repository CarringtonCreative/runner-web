import LinkedInIcon from "../../../public/linkedIn.png";
import GitHubIcon from "../../../public/github.png";
import TwitterIcon from "../../../public/twitter.png";
import EmailIcon from "../../../public/email.png";
import { SocialProps } from "./Social";
import { SocialsProps } from "./Socials";

export const social = {
  primary: true,
  imagePath: LinkedInIcon,
  name: "LinkedIn",
  alt: "LinkedIn Profile",
  imageWidth: 25,
  imageHeight: 25,
  url: "https://linkedin.com",
} as SocialProps;

export const socials = {
  primary: false,
  socials: [
    {
      primary: true,
      imagePath: LinkedInIcon,
      name: "LinkedIn",
      alt: "LinkedIn Profile",
      imageWidth: 25,
      imageHeight: 25,
      url: "https://linkedin.com",
    },
    {
      primary: true,
      imagePath: GitHubIcon,
      name: "Github",
      alt: "Github Profile",
      imageWidth: 25,
      imageHeight: 25,
      url: "https://github.com",
    },
    {
      primary: true,
      imagePath: TwitterIcon,
      name: "Twitter",
      alt: "Twitter Profile",
      imageWidth: 25,
      imageHeight: 25,
      url: "https://twitter.com",
    },
    {
      primary: true,
      imagePath: EmailIcon,
      name: "Email",
      alt: "Email",
      imageWidth: 25,
      imageHeight: 25,
      url: "https://mailto:hey@hirerunner.co",
    },
  ],
} as SocialsProps;
