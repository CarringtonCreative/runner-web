import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import "./ExternalLink.css";

export interface ExternalLinkProps {
  primary?: boolean;
  alt: string;
  url: string;
  image: StaticImageData;
  imageWidth: number;
  imageHeight: number;
  label: string;
  onClick?: () => void;
}

const ExternalLink = (props: ExternalLinkProps) => {
  const { alt, url, image, imageHeight, imageWidth, label } = props;
  return (
    <div className="external-link-container">
      <h3 className="external-link-title">
        <Link href={url}>{label}</Link>
      </h3>
      <Image alt={alt} src={image} width={imageWidth} height={imageHeight} />
    </div>
  );
};

export default ExternalLink;
