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

export interface EventCardsProps {
  events: EventCardProps[];
  title: string;
}

const getEvent = (data: EventCardProps) => {
  const {
    alt,
    label,
    subject,
    event,
    timestamp,
    imageSrc,
    imageWidth,
    imageHeight,
  } = data;
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

const EventCards = (props: EventCardsProps) => {
  const { events, title } = props;
  return (
    <div className="event-section-container">
      <h3 className="event-section-title">{title}</h3>
      <ul className="event-cards-container">
        {events.map((event, index) => (
          <li key={index}>{getEvent(event)}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventCards;
