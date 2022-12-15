import React from "react";
import "./MessageButton.css";
import Image from "next/image";
import ChatBubbleIcon from "../../../public/chat-bubble.png";

export interface MessageButtonProps {
  primary?: boolean;
  label: string;
  alt: string;
  iconWidth: number;
  iconHeight: number;
  onClick?: Function;
}

const handleClick = () => {
  console.log("Send a message");
};

const MessageButton = (props: MessageButtonProps) => {
  const { label, alt, iconWidth, iconHeight } = props;
  return (
    <button className="message-button-container" onClick={handleClick}>
      {label}
      <Image
        src={ChatBubbleIcon}
        alt={alt}
        width={iconWidth}
        height={iconHeight}
      />
    </button>
  );
};

export default MessageButton;
