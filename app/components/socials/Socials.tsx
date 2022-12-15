import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import "./Social.css";

export interface SocialProps {
  primary?: boolean;
  alt: string;
  name: string;
  imagePath: StaticImageData;
  imageWidth: number;
  imageHeight: number;
  url: string;
}

export interface SocialsProps {
  primary?: boolean;
  socials: SocialProps[];
}

const getSocial = (data: SocialProps) => {
  const { alt, imagePath, imageWidth, imageHeight, url } = data;
  return (
    <Link href={url}>
      <Image
        src={imagePath}
        alt={alt}
        width={imageWidth}
        height={imageHeight}
      />
    </Link>
  );
};

const Socials = (props: SocialsProps) => {
  const { socials } = props;
  return (
    <ul className="socials-container">
      {socials.map((social, index) => (
        <li key={index}>{getSocial(social)}</li>
      ))}
    </ul>
  );
};

export default Socials;
