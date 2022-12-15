import React from "react";
import Image, { StaticImageData } from "next/image";

import "./EventCard.css";

export interface EventCardProps {
  primary?: boolean;
  alt: string;
  label: string;
  timestamp: string;
  subject: string;
  event: string;
  imageSrc: StaticImageData;
  imageWidth: number;
  imageHeight: number;
}

const EventCard = (props: EventCardProps) => {
  const {
    alt,
    label,
    subject,
    event,
    timestamp,
    imageSrc,
    imageWidth,
    imageHeight,
  } = props;
  return (
    <div className="event-card-container">
      <div className="event-card-header-container">
        <div className="event-card-header">
          <Image
            src={imageSrc}
            alt={alt}
            width={imageWidth}
            height={imageHeight}
          />
          <p className="event-card-title">{label}</p>
        </div>
        <p className="event-card-timestamp">{timestamp}</p>
      </div>
      <div className="event-card-content-container">
        <p className="event-card-event">
          <span className="event-card-subject">{subject} </span>
          {event}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
