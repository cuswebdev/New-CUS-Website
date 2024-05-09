import React from "react";
import { ImageRightCTA } from "components/CTAComponents/ImageRightCTA";

function GetInvolved() {
  return (
    <ImageRightCTA
      image="https://admin.cus.ca/wp-content/uploads/2021/08/85ddd8b7212c0d55ef7bf573c27151b9.png"
      title="Get Involved"
      text="There are so many different ways for you to get involved with the UBC Sauder community, whether you enjoy finances, marketing, design, event planning, and etc., there is an opportunity for you to get involved. What are you waiting for? Let’s bring out the leader in you! :)"
      button1={{
        url: "/get-involved",
        text: "Get Involved!",
      }}
    />
  );
}

export default GetInvolved;
