import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import "./Avatar.css";

export interface BiographyProps {
  primary?: boolean;
  image: StaticImageData;
  imageWidth: number;
  imageHeight: number;
  alt: string;
}

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState<File>();

  return (
    <div>
      <h1>Upload and Display Image</h1>
      {selectedImage && (
        <div>
          <Image
            alt="not fount"
            height={250}
            width={250}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(undefined)}>Remove</button>
        </div>
      )}
      <br />

      <br />
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          const files = event.target.files;
          if (files) {
            const file = files[0];
            console.log(file);
            setSelectedImage(file);
          }
        }}
      />
    </div>
  );
};

const Avatar = (props: BiographyProps) => {
  const { alt, image, imageHeight, imageWidth } = props;
  return <div className="avatar-container">{UploadAndDisplayImage()}</div>;
};

export default Avatar;
