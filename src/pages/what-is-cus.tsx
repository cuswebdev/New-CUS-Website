import React from "react";
import { Layout, ContentSection } from "components";

import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react";

import { FullWidthCTA } from "components/CTAComponents";
import { PageTitle } from "components/PageTitle";
import { HeroTextOverlay } from "components/HeroTextOverlay";
import { ImageSection } from "components/ImageSection";
import { IconDescriptions } from "components/IconDescriptions";
import {
  FaUserFriends,
  FaSuitcase,
  FaGraduationCap,
  FaCheckCircle,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import { Icons } from "components/Icons";
import { HistoryCarousel } from "components/Pages/WhatIsCus";

const AnnualEventsPage = () => {
  return (
    <Layout seoTitle="What Is the CUS">
      <PageTitle title="What Is the CUS" />
      <HeroTextOverlay
        img="https://admin.cus.ca/wp-content/uploads/2021/08/ubc_sauder_march_22nd_stock_photos_full_resolution-0718_51172761388_o-scaled.jpg"
        title="Our Mission"
        description="To enhance the value of the UBC Sauder School of Business Bachelor of Commerce degree while cultivating the personal, professional, and academic success of students."
      />
      <ContentSection small pt={0}>
        <Text fontWeight="bold" mb={4}>
          The CUS is one of the largest business school organizations in Canada,
          both in terms of its $1.2 million annual operating budget and its
          thousands of actively-involved students within the society.
        </Text>
        <Text>
          From its inception over seventy years ago, the UBC Commerce
          Undergraduate Society (CUS) has played a pivotal role in shaping the
          success of UBC Bachelor of Commerce students in Vancouver, B.C., 
          Canada.
        </Text>
      </ContentSection>
      <ImageSection img="https://admin.cus.ca/wp-content/uploads/2021/08/ubc_sauder_march_22nd_stock_photos_full_resolution-0856_51173621880_o-scaled.jpg" />
      <ContentSection small>
        <Text fontWeight="bold" mb={4}>
          The growth of social and professional opportunities in the CUS is a
          source of inspiration for all student societies in Canada.
        </Text>
        <Text mb={4}>
          The Commerce faculty has developed an international reputation for its
          sophisticated learning atmosphere and the CUS has evolved
          significantly alongside it. With the money that it collects through
          student fees, the CUS is able to support its members through a range
          of services and clubs that cater to some variation of the personal,
          professional or academic success of its students.
        </Text>
        <Text fontWeight="bold" mb={4}>
          The CUS houses tutoring services, social functions and large-scale
          conferences that offer insights into possible careers and numerous
          networking opportunities with industry professionals.
        </Text>
        <Text mb={4}>
          If you are a student at the UBC Sauder School of Business, make sure
          that you take advantage of what the CUS offers. For some, this will be
          filling up a free cup of coffee in the student lounge or going on the
          annual ski trip. For others, it will mean joining a club and going to
          workshops on the specialization that the club is focused on. For
          others still, it will mean filling a position and gaining extremely
          valuable work experience.
        </Text>
        <Text>
          Whatever the case may be, everyone in the CUS is afforded equal
          rights; there will always be a wealth of opportunity here.
        </Text>
        <Heading mt={8}>Our Pillars</Heading>
        <IconDescriptions
          items={[
            {
              icon: FaUserFriends,
              title: "Personal",
              description:
                "The personal lives of our students are important to them, and are important to us. With a diverse student body, many of our constituents are thousands of kilometres away from home and it is our goal to make sure that all students have a place in the Sauder community. From POITS, our celebrated and legendary beer garden, and their annual ski trip, to culture night by SISA, the Commerce Undergraduate Society plans and hosts hundreds of events to ensure that BCom students will have opportunities to build friendships and families.",
            },
            {
              icon: FaSuitcase,
              title: "Professional",
              description:
                "From investment bankers on Wall Street to accountants articling here in Vancouver, the Sauder School of Business has alumnus in various industries in hundreds of cities around the world. The Commerce Undergraduate Society works to support the unique professional path of BCom students through networking opportunities, information sessions, and many events. Our support is vital to the Business Career Centre and is one of our biggest line items on our budget, year after year.",
            },
            {
              icon: FaGraduationCap,
              title: "Academic",
              description:
                "Making friends and getting jobs are important, but ultimately, our BCom students are all here to learn. The Commerce Undergraduate Society provides opportunities for UBC Sauder students to explore their academic endeavours. This is done through the Commerce Mentorship Program, a service that hosts review sessions and extra practice guides for UBC Sauder’s most requested courses. Along with that, upper year BCom students offer their expertise through PASS sessions, which are free group tutoring sessions that go over class content week by week. There is no limit to the support that the UBC Sauder community provides.",
            },
          ]}
        />
        <Heading mt={8}>Our Values</Heading>
        <Icons
          items={[
            {
              icon: FaStar,
              title: "Transparency",
              text: "It’s your student fees. You should know exactly how they’re being used.",
            },
            {
              icon: FaUsers,
              title: "Inclusivity",
              text: "It’s your second home. You should feel safe, included and welcomed.",
            },
            {
              icon: FaCheckCircle,
              title: "Empowerment",
              text: "It’s your Undergraduate Society. You should feel empowered to succeed in your own way.",
            },
          ]}
        />
      </ContentSection>
      <ImageSection img="https://admin.cus.ca/wp-content/uploads/2021/08/IMG_1230-scaled.jpg" />
      <ContentSection small>
        <Heading mb={4}>Our Commitment To Equity</Heading>
        <Text>
          The field of business today has been shaped by a history of
          colonialism that still systematically disadvantages marginalised
          communities worldwide. At the CUS, we recognise the mistakes we have
          made during our participation in that history and make a solemn
          commitment to do better.
          <br />
          <br />
          Sexism, misogyny, racism, homophobia, transphobia, ableism, or any
          other form of prejudice has no place at the CUS. We will do everything
          in our ability to help any in our community who have faced such
          behaviour. If we are to be the next generation of business leaders, we
          must build a community that values diversity and stands against the
          social, economic, and environmental injustices of our time. We still
          have a lot more work in our path to becoming a more equitable and just
          society, but we promise to continue learning and working towards that
          goal in all the ways that we can.
        </Text>
      </ContentSection>
      <ImageSection title="Our History" bg="primary" />
      <HistoryCarousel />
    </Layout>
  );
};

export default AnnualEventsPage;
