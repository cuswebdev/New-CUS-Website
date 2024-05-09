import { ImageLeftCTA } from "components/CTAComponents/ImageLeftCTA";
import React, { useEffect } from "react";

const StudentLife = () => {
  return (
    <ImageLeftCTA
      image="https://admin.cus.ca/wp-content/uploads/2021/08/ubc_sauder_march_22nd_stock_photos_full_resolution-0959_51172520816_o-768x512.jpg"
      title="Student Life"
      text="There’s more to university than academics and career development—it’s the place for you to meet your friends of a lifetime and make meaningful connections! Come visit our student lounge and explore our guides and discounts to see what other benefits we have in store for you!"
      button1={{
        url: "/student-life",
        text: "Learn More",
      }}
    />
  );
};

export default StudentLife;
