import React from "react";
import { Layout, ContentSection } from "components";
import { PageTitle } from "components/PageTitle";
import StudentLife from "components/Pages/StudentLife";
import { HeroTextOverlay } from "components/HeroTextOverlay";
import { Box, Heading, Text } from "@chakra-ui/react";
import { IconDescriptions } from "components/IconDescriptions";
import { GiCoffeeCup, GiDiscussion } from "react-icons/gi";
import { FaSuitcase } from "react-icons/fa";
import { ImageSection } from "components/ImageSection";

const StudentLoungePage = () => {
  return (
    <Layout seoTitle="Student Lounge">
      <PageTitle title="Student Lounge" />
      <HeroTextOverlay
        title="The CUS Lounge"
        description="Looking for a spot to study, hangout, or grab your daily dose of caffeine in between classes? Head over to the CUS Student Lounge! Located on the second floor of the Henry Angus building, the CUS Student Lounge is your dream study and community space."
        img="https://admin.cus.ca/wp-content/uploads/2021/08/IMG_1241-1024x683.jpg"
      />
      <ContentSection small pt={0} mt={-8}>
        <IconDescriptions
          items={[
            {
              icon: GiCoffeeCup,
              title: "Coffee Machine",
              description:
                "The CUS Student Lounge now has a Nespresso coffee machine! Bring your own mug for a free cup of coffee first thing in the morning, in between classes, or before you dive into a long exam study session. Nespresso provides quality coffee that creates a positive impact. All aluminum capsules are collected by Nespresso and recycled, so that nothing goes to waste.",
            },
            {
              icon: FaSuitcase,
              title: "Pool Table",
              description:
                "Say goodbye to broken pockets and ripped up felt. The lounge now has a brand new pool table! If you’re looking to meet people and make memories, head over to the lounge and play some pool.",
            },
            {
              icon: GiDiscussion,
              title: "The CUS Boardroom",
              description:
                "The CUS Boardroom/Room 239C is located just inside the CUS Student Lounge. This is a fantastic spot for CUS affiliated clubs and services to hold team meetings throughout the year. Book the CUS Boardroom through the CUS Room Booking Form.",
            },
          ]}
        />
      </ContentSection>
      <ImageSection img="https://admin.cus.ca/wp-content/uploads/2021/08/IMG_1241-scaled.jpg" />
      <ContentSection small>
        <Heading pb={4}>Lounge Etiquette</Heading>
        <Text>
          Let’s all work together to keep the lounge looking shiny and new.
          Whether you’re storing your lunch in the fridge, grabbing a cup of
          coffee, or snacking during your team meetings, it is your
          responsibility to clean up after yourself! We want all CUS students to
          be able to enjoy a tidy community space all year long.
        </Text>
      </ContentSection>
    </Layout>
  );
};

export default StudentLoungePage;
