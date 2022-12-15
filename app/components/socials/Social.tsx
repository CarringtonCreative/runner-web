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

const Social = (props: SocialProps) => {
  const { alt, imagePath, imageWidth, imageHeight, url } = props;
  return (
    <div className="social-container">
      <Link href={url}>
        <Image
          src={imagePath}
          alt={alt}
          width={imageWidth}
          height={imageHeight}
        />
      </Link>
    </div>
  );
};

export default Social;
