import React from "react";
import {
  Heading,
  Text,
  Center,
  Box,
  SimpleGrid,
  ListItem,
  UnorderedList,
  Link,
} from "@chakra-ui/react";

import { ContentSection } from "components/ContentSection";
import {
  FaBookReader,
  FaMicroscope,
  FaStar,
  FaTrophy,
  FaUserTie,
} from "react-icons/fa";
import { FullWidthCTA } from "components/CTAComponents";
import { ImageSection } from "components/ImageSection";
import { CusAccordion } from "components/CusAccordion";
import { EmbededPdf } from "components";

export const JoinTheCus = () => {
  return (
    <>
      <Box
        as="section"
        position="relative"
        bgImage={`url("https://admin.cus.ca/wp-content/uploads/2021/08/ubc_sauder_march_22nd_stock_photos_full_resolution-0667_51173622550_o.jpg")`}
        bgSize="cover"
        bgPosition="center"
        h={{ base: "350px", lg: "400px" }}
        _after={{
          content: `""`,
          display: "block",
          w: "full",
          h: "full",
          bg: "blackAlpha.500",
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      />
      <ContentSection>
        <Box textAlign="center">
          <Heading size="2xl" mb={4}>
            Why CUS?
          </Heading>
          <Text>
            There are so many opportunities to get involved on campus, so why be
            part of the CUS?
          </Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={12} my={12}>
          <Box display="flex">
            <Box mr={5}>
              <FaMicroscope size={45} color="#4DBBEE" />
            </Box>
            <Box pt={1}>
              <Heading size="md" mb={4}>
                Exploration and Discovery
              </Heading>
              <Text>
                CUS is one of the largest business school organizations in
                Canada and operates 25 Services and 14 Clubs. Whether you are
                interested in conferences, competitions or social events, the
                CUS has opportunities at all levels of involvement to help you
                discover your passion and interests.
              </Text>
            </Box>
          </Box>
          <Box display="flex">
            <Box mr={5}>
              <FaUserTie size={45} color="#4DBBEE" />
            </Box>
            <Box pt={1}>
              <Heading size="md" mb={4}>
                Camaraderie and Mentorship
              </Heading>
              <Text>
                CUS is run and operated by business students, like yourself!
                We’ve either been through what you have or are currently on the
                same boat with you. This is a great space to meet new friends,
                find others who share similar interest and goals and get some
                advice.
              </Text>
            </Box>
          </Box>
          <Box display="flex">
            <Box mr={5}>
              <FaBookReader size={45} color="#4DBBEE" />
            </Box>
            <Box pt={1}>
              <Heading size="md" mb={4}>
                Continuous Learning and Development
              </Heading>
              <Text>
                The best learning sometimes happens outside of the classroom.
                CUS offers training for student leaders so you will get to learn
                more about yourself, others, your campus and life in general.
                You will also build a foundation of transferable skills and
                capability which will be proven useful when you venture out in
                the real world.
              </Text>
            </Box>
          </Box>
          <Box display="flex">
            <Box mr={5}>
              <FaStar size={45} color="#4DBBEE" />
            </Box>
            <Box pt={1}>
              <Heading size="md" mb={4}>
                Direct Impact on Sauder Community
              </Heading>
              <Text>
                By leading or supporting events, you have a direct impact on
                students and can enhance the BCom student experience, whether
                it’s helping them cope with homesickness or smoothing the
                university transition process. You have the opportunity to build
                a sense of community and belonging for your fellow peers.
              </Text>
            </Box>
          </Box>
          <Box display="flex">
            <Box mr={5}>
              <FaTrophy size={45} color="#4DBBEE" />
            </Box>
            <Box pt={1}>
              <Heading size="md" mb={4}>
                It’s Rewarding and Fun!
              </Heading>
              <Text>
                CUS recognizes hard work and celebrates excellence! There are
                many fun events throughout the year exclusively for CUS student
                leaders including Retreat, Awards Gala, and other holiday
                festivities and events.
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
        <Heading pb={12}>CUS Involvement Guide</Heading>
        <Text>
          ​​Not sure where to get started but want to get involved? This
          involvement brochure is the perfect place for you! In this brochure,
          you will find tips, tricks, and advice on where to get started. We
          discuss getting involved in the CUS, services, clubs, and many more
          ways to explore your passions and interests. Getting involved in
          university can be daunting, but we hope with this brochure, we make it
          a little easier for you. Have a great start to your school year!
        </Text>
        <CusAccordion
          items={[
            {
              title: "CUS Involvement Guide",
              content: (
                <EmbededPdf url="https://admin.cus.ca/wp-content/uploads/2021/08/CUS-Involvement-Guide_2021.pdf" />
              ),
            },
          ]}
        />
      </ContentSection>
      <ImageSection img="https://admin.cus.ca/wp-content/uploads/2021/08/IMG_1121-1024x683.jpg" />
      <ContentSection small>
        <Box textAlign="center">
          <Heading size="2xl" mb={8}>
            General Application Process
          </Heading>
        </Box>
        <Text mb={1}>
          <b>Step 1:</b> Find opportunities that pique your interest (CUS
          website, CUSunday, Facebook, word of mouth). Involvement opportunities
          will be posted on the CUS website for a minimum of 7 days. Don’t be
          afraid to coffee chat with past/present CUS members to learn more
          about the role!
        </Text>
        <Text mb={1}>
          <b>Step 2:</b> Apply! You’ll likely need to submit a resume and cover
          letter for the position(s) of your interest.{" "}
        </Text>
        <Text mb={1}>
          <b>Step 3:</b> Wait and hear back shortly after the deadline about
          whether you have been shortlisted for an interview.{" "}
        </Text>
        <Text mb={1}>
          <b>Step 4:</b> Interview. A member from CUS HR Commission will be
          present throughout the entire recruitment process to ensure hiring is
          conducted fairly and equitably. All candidates will be notified of
          their application status within 72 hours of the last interview for
          each role.
        </Text>
        <Text mb={1}>
          <b>Step 5:</b> Make your mark on the CUS and Sauder community.
        </Text>
        <Box textAlign="center" my={12}>
          <Heading size="2xl">Resources</Heading>
        </Box>
        <Text>
          Here are a few links to useful resources that can equip you with the
          skills and knowledge to succeed in the interview process:
        </Text>
        <UnorderedList>
          <ListItem>
            <Link
              href="https://mybcom.sauder.ubc.ca/career-experience/career-toolkits/resume-toolkit"
              color="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume Tips
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://mybcom.sauder.ubc.ca/career-experience/career-toolkits/cover-letter-toolkit"
              color="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cover Letter Tips
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://mybcom.sauder.ubc.ca/career-experience/career-toolkits/interview-skills-toolkit"
              color="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Interview Tips
            </Link>
          </ListItem>
          <ListItem>
            Book a Coaching Appointment through BCC via{" "}
            <Link
              href="https://sauder-ubc-csm.symplicity.com/"
              color="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              COOL.
            </Link>
          </ListItem>
          <ListItem>
            For more career-related events and workshops, click{" "}
            <Link
              href="https://mybcom.sauder.ubc.ca/career-experience/workshops-and-events"
              color="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              here.
            </Link>
          </ListItem>
        </UnorderedList>
      </ContentSection>
      <FullWidthCTA
        title="Hiring Opportunities"
        text="Get Involved with the CUS starting today!"
        button1={{ text: "Get Involved", url: "/hiring-opportunities" }}
      />
    </>
  );
};
