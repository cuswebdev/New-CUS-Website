import React, { useEffect } from "react";
import { Layout, FeatureComponent } from "components";
import { Flex, Stack, Heading, Text } from "@chakra-ui/react";
import { ImageLeftCTA, ImageRightCTA } from "components/CTAComponents";
import { FaGraduationCap, FaPuzzlePiece } from "react-icons/fa";
import { RiShieldCheckLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
import { PageTitle } from "components/PageTitle";

const ResourcesPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);
  return (
    <Layout seoTitle="Resources">
      <FeatureComponent
        title="Resources"
        text="Whether its personal, professional, or academic support that you need, we got you. We are here to see you succeed in all three areas."
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
      />
      <div data-aos="fade-up">
        <ImageRightCTA
          title="Personal"
          text="Having positive mental and physical health and feeling safe on campus is something that you deserve. We want to help you achieve it. Check out the resources we have for you."
          image="https://admin.cus.ca/wp-content/uploads/2021/08/Back-To-School-768x512.jpg"
          button1={{
            url: "/personal",
            text: "Learn More",
          }}
        />
      </div>
      <div data-aos="fade-up">
        <ImageLeftCTA
          title="Professional"
          text="Thinking about your professional development? We are too! We have prepared a resume, cover letter, and various other toolkits to help you succeed in your career journey. Check out your toolkits and visit the career portal here. "
          image="https://admin.cus.ca/wp-content/uploads/2021/08/12.-CAMH-768x383.jpg"
          button1={{
            url: "/professional",
            text: "Learn More",
          }}
        />
      </div>
      <div data-aos="fade-up">
        <ImageRightCTA
          title="Academic"
          text="Striving for academic excellence? We got you. You can access different tutoring services, study spaces, and our professional exam review program here."
          image="https://admin.cus.ca/wp-content/uploads/2021/08/IMG_1256-768x512.jpg"
          button1={{
            url: "/academic",
            text: "Learn More",
          }}
        />
      </div>
    </Layout>
  );
};

export default ResourcesPage;
