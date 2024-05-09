import React, { useEffect } from "react";
import { Layout, ContentSection } from "components";
import { PageTitle } from "components/PageTitle";
import { Flex, Stack, Heading, Text } from "@chakra-ui/react";
import { ImageLeftCTA, ImageRightCTA } from "components/CTAComponents";
import AOS from "aos";
import "aos/dist/aos.css";
import { HeroTextOverlay } from "components/HeroTextOverlay";

const AboutUsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  return (
    <Layout seoTitle="About Us">
      <PageTitle title="About Us" />
      <HeroTextOverlay
        title="About Us"
        description="As a Sauder undergraduate student, you are a member of the UBC
        Commerce Undergraduate Society (CUS)."
        img="https://admin.cus.ca/wp-content/uploads/2021/08/IMG_1234-1024x683.jpg"
      />
      <ContentSection mt="-10">
        <div data-aos="slide-right">
          <Text>
            <b>
              The CUS is one of the largest business school organizations in
              Canada.
            </b>
            <br />
            <br />
            Guided by the pillars of personal, professional, and academic
            success, the CUS supports members through initiatives, services and
            clubs that host networking events, workshops, conferences, case
            competitions and many more. Beyond the 25 services run under the
            CUS, CUS also consists of 6 portfolios including Academic, Internal,
            External, Student Engagement and Marketing.
            <br />
            <br />
            Together, we strive to build an inclusive community where students
            feel empowered to discover their own journeys and unique experiences
            within the CUS and throughout their university years at UBC Sauder.
            <br />
            <br />
            We are here to invest in your success so feel free to reach out to
            us if you need support.
            <br />
            <br />
            Hope to see you attend some of our various events and initiatives
            and stay involved within the CUS community. We’re rooting for you!
          </Text>
        </div>
      </ContentSection>
      <div data-aos="fade-up">
        <ImageLeftCTA
          title="What Is CUS?"
          text="We are one of the largest business school organizations in Canada, both in terms of our $1.2 million annual operating budget and our thousands of actively-involved students within the society. Learn more about our Purpose & Mission"
          image="https://admin.cus.ca/wp-content/uploads/2021/08/IMG_1256-768x512.jpg"
          button1={{
            url: "/what-is-cus",
            text: "Learn more",
          }}
        />
      </div>
      <div data-aos="fade-up">
        <ImageRightCTA
          title="Who We Are"
          text="Our team consists of approximately 350 student leaders who each play a critical role in helping create the diverse opportunities and initiatives dedicated to Sauder students. Learn more about our team’s responsibilities."
          image="https://admin.cus.ca/wp-content/uploads/2021/08/IMG_1230-scaled.jpg"
          button1={{
            url: "/who-we-are",
            text: "View Our Members",
          }}
        />
      </div>
      <div data-aos="fade-up">
        <ImageLeftCTA
          title="How We Run"
          text="Following our Code & Constitution, we strive to be transparent and inclusive in our decision-making process so that all Sauder students can share the same opportunities and experiences. Learn more about our CUS Committees that are dedicated to addressing the different aspects of student life."
          image="https://admin.cus.ca/wp-content/uploads/2021/08/ubc_sauder_march_22nd_stock_photos_full_resolution-0856_51173621880_o-scaled.jpg"
          button1={{
            url: "/code-and-constitution/",
            text: "Learn More",
          }}
        />
      </div>
    </Layout>
  );
};

export default AboutUsPage;
