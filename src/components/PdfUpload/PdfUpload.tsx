import React from "react";
import { FunctionComponent } from "react";

import "./PdfUpload.scss";

import Dropzone from "react-dropzone";

interface PdfUploadProps {
  onChange: any;
  value: any;
}

const MAX_FILE_SIZE = 5242880; // 5MB

export const PdfUpload: FunctionComponent<PdfUploadProps> = ({
  onChange,
  value,
}) => {
  const handleChange = async (files) => {
    if (files[0]) {
      if (files[0].size > MAX_FILE_SIZE) {
        alert("File size is too big");
      } else {
        onChange(files[0]);
      }
    }
  };

  return (
    <Dropzone
      accept="application/pdf"
      maxFiles={1}
      onDropAccepted={handleChange}
    >
      {({ getRootProps, getInputProps }) => (
        <div className="dropzone" {...getRootProps()}>
          <input {...getInputProps()} />
          {value ? (
            <p>{value.name}</p>
          ) : (
            <p>Drag 'n' drop a pdf here, or click to select a pdf</p>
          )}
        </div>
      )}
    </Dropzone>
  );
};
