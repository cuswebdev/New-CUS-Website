import React from "react";

import { FaGraduationCap, FaPuzzlePiece } from "react-icons/fa";
import { RiShieldCheckLine } from "react-icons/ri";
import { FeatureComponent } from "components/FeatureComponent";

const Resources = () => (
  <FeatureComponent
    title="Resources"
    text="We are invested in your personal, professional and academic success. Take advantage of the opportunities and resources we have created to elevate your experience at UBC Sauder!"
    icon1={{
      icon: <RiShieldCheckLine />,
      text: "Personal",
    }}
    icon2={{
      icon: <FaGraduationCap />,
      text: "Professional",
    }}
    icon3={{
      icon: <FaPuzzlePiece />,
      text: "Academic",
    }}
    button={{
      url: "/resources",
      text: "All Resources",
    }}
  />
);

export default Resources;
