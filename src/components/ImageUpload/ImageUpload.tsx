import React from "react";
import { FunctionComponent } from "react";

import "./ImageUpload.scss";

import Dropzone from "react-dropzone";
import { toBase64 } from "utils/image";

interface ImageUploadProps {
  onChange: any;
  value: string;
}

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const ImageUpload: FunctionComponent<ImageUploadProps> = ({
  onChange,
  value,
}) => {
  const handleChange = async (images) => {
    if (images[0]) {
      if (images[0].size > MAX_FILE_SIZE) {
        alert("File size is too big");
      } else {
        onChange(await toBase64(images[0]));
      }
    }
  };

  return (
    <Dropzone accept="image/*" maxFiles={1} onDropAccepted={handleChange}>
      {({ getRootProps, getInputProps }) => (
        <div className="dropzone" {...getRootProps()}>
          <input {...getInputProps()} />
          {value ? (
            <img src={value} />
          ) : (
            <p>Drag 'n' drop an image here, or click to select an image</p>
          )}
        </div>
      )}
    </Dropzone>
  );
};

export default ImageUpload;
