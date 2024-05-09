import React from "react";
import { Layout, ContentSection } from "components";
import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue as mode,
  Center,
  SimpleGrid,
  Link,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import { ContactForm } from "components/Forms";
import { PageTitle } from "components/PageTitle";

import { Link as GatsbyLink } from "gatsby";

import GoogleMapReact from "google-map-react";
import { ViewMoreCard } from "components/ViewMoreCard";
import { Email } from "components/Email";
interface KeyContact {
  name: string;
  position: string;
  email: string;
}
interface OfficeHour extends KeyContact {
  img: string;
  hours: {
    text: string;
    link: string;
  }[];
}

const officeHours: OfficeHour[] = [
  {
    name: "Rachel Kim",
    position: "President",
    email: "rachel.kim@cus.ca",
    img: "https://admin.cus.ca/wp-content/uploads/2021/08/RachelKim_VPExternal-1-200x300.jpg",
    hours: [
      {
        text: "Monday 6:00pm – 7:00pm PDT",
        link: "https://us06web.zoom.us/j/85333862510?pwd=QXd0WHI0MW5UWm5LK2JlamluV1puUT09",
      },
    ],
  },
  {
    name: "Aditya Surjewala",
    position: "Ombudsperson",
    email: "aditya.surjewala@cus.ca",
    img: "https://admin.cus.ca/wp-content/uploads/2021/08/IMG_3612-Aditya-Singh-300x300-1.jpeg",
    hours: [
      {
        text: "Monday 12:00pm – 2:00pm PDT (CPA Hall)",
        link: "https://www.sauder.ubc.ca/about-ubc-sauder/locations/event-conference-services/flexible-event-spaces",
      },
      {
        text: "Monday 5:30pm - 6:30pm PDT (CUS Lounge)",
        link: "https://www.cus.ca/student-lounge/",
      },
      {
        text: "Wednesday 5:30pm – 6:30pm PDT (CUS Lounge)",
        link: "https://www.cus.ca/student-lounge/",
      },
    ],
  },
  {
    name: "Harinder Gill",
    position: "4th Year Representative",
    email: "harinder.gill@cus.ca",
    img: "https://admin.cus.ca/wp-content/uploads/2021/08/Obmudsperson-Harinder-Gill-225x300.jpeg",
    hours: [
      {
        text: "Wednesday 6:30pm – 7:30pm PDT",
        link: "https://discord.gg/rny2YKnHXH",
      },
    ],
  },
  {
    name: "Michelle Sun",
    position: "3rd Year Representative",
    email: "michelle.sun@cus.ca",
    img: "https://admin.cus.ca/wp-content/uploads/2021/08/3rd-Year-Rep-Michelle-Sun-225x300.jpeg",
    hours: [
      {
        text: "Monday 6:30pm – 7:30pm PDT",
        link: "https://us06web.zoom.us/j/89228076393?pwd=Smd0aGNoZU5UMitadlo0djVpRWM4Zz09",
      },
    ],
  },
  {
    name: "Ky Sargeant",
    position: "Equity Commision",
    email: "ky.sargeant@cus.ca",
    img: "https://admin.cus.ca/wp-content/uploads/2021/08/Headshot-for-ky-216x300.jpg",
    hours: [
      {
        text: "Tuesday, Wednesday 9:30am – 10:30 am PDT",
        link: "https://us06web.zoom.us/j/6042692176",
      },
    ],
  },
];

const keyContacts = [
  {
    name: "Rachel Kim",
    position: "President",
    email: "president@cus.ca",
  },
  {
    name: "Aditya Surjewala",
    position: "Ombudsperson",
    email: "ombudsperson@cus.ca",
  },
  {
    name: "Laurence Yeung",
    position: "Vice-President, Academic Affairs",
    email: "vpacademic@cus.ca",
  },
  {
    name: "Victoria Sin",
    position: "Vice-President, Student Engagement",
    email: "vpstudentengagement@cus.ca",
  },
  {
    name: "Ryka Shahzadi",
    position: "Vice-President, External Affairs",
    email: "vpexternal@cus.ca",
  },
  {
    name: "Nikita Dao",
    position: "Vice-President, Finance",
    email: "vpfinance@cus.ca",
  },
  {
    name: "Eun Bin Moon",
    position: "Vice-President, Internal Affairs",
    email: "vpinternal@cus.ca",
  },
  {
    name: "Katrina Artes",
    position: "Vice-President, Marketing and Communications",
    email: "vpmarketing@cus.ca",
  },
  {
    name: "General",
    position: "CUS Communications",
    email: "communications@cus.ca",
  },
];

const ContactPage = () => {
  return (
    <Layout seoTitle="Contact">
      <PageTitle title="Contact Us" pb={{ base: 12, md: "250px" }} />
      <Center>
        <Box
          zIndex={20}
          mt={{ base: 0, md: "-235px" }}
          p={8}
          background="white"
          rounded="lg"
          maxW="5xl"
          w="100%"
        >
          <Heading pb={4}>We're here for you</Heading>
          <Text pb={4}>
            Our Executive Office is located at the Henry Angus Building, Sauder
            School of Business, The University of British Columbia Room 239. You
            are welcome to drop by for any questions, concerns, or assistance.
          </Text>
          <Stack direction={{ base: "column", md: "row" }}>
            <Box width={{ base: "100%", md: "lg" }}>
              <Heading size="md" pb={4} color="primary">
                General Contact Information
              </Heading>
              <Text>
                <b>Tel:</b> (604) 827 – 3772
              </Text>
              <Text pb={3}>
                <b>Email:</b> communications@cus.ca
              </Text>
              <Text>
                <b>Mailing Address:</b>
                <br />
                UBC Sauder School of Business <br />
                University of British Columbia <br />
                Henry Angus Building <br />
                2053 Main Mall <br />
                Vancouver, BC V6T 1Z2 <br />
                Canada
              </Text>
            </Box>
            <Box height="268px" width="100%">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyDy4VpVmYMmrlh0XCyf6p03RNTcxPKxohk",
                }}
                defaultCenter={{
                  lat: 49.2648239,
                  lng: -123.2537939,
                }}
                defaultZoom={11}
              ></GoogleMapReact>
            </Box>
          </Stack>
        </Box>
      </Center>
      <ContentSection>
        <Heading pb={4}>Board Office Hours</Heading>
        <Text pb={4}>
          Welcome! First of all thank you for wanting to learn more about the
          CUS, and what it does for its students. Every single Board of Director
          member will be hosting office hours according to the schedule below.
          Feel free to drop in for any questions, or just to chat with us. We
          would love to get to know you and your story. If you cannot make
          office hours, you can also email any of us at any time. Note that
          Rachel Kim will share office hour updates on Instagram{" "}
          <Link href="https://www.instagram.com/cus_prez/?hl=en">
            @cus_prez
          </Link>
          . We look forward to meeting you!
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} my={4}>
          {officeHours.map(({ name, position, email, hours, img }) => (
            <ViewMoreCard
              title={name}
              subtitle={position}
              description={`Email: ${email}`}
              imageSrc={img}
              buttonText="Office Hours"
              content={
                <Box>
                  {hours.map(({ link, text }) => (
                    <Link href={link} display="block">
                      {text}
                    </Link>
                  ))}
                </Box>
              }
            />
          ))}
        </SimpleGrid>
        <Stack
          direction={{ base: "column", md: "row" }}
          width="100%"
          py={12}
          spacing={12}
        >
          <Box
            rounded="lg"
            background="primary"
            width={{ base: "100%", lg: "150%" }}
            p={8}
            color="white"
          >
            <Heading pb={4}>Key Contacts</Heading>
            <SimpleGrid columns={{ base: 1, lg: 2 }}>
              {keyContacts.map(({ name, position, email }) => (
                <Box py={3}>
                  <Heading mb={1} size="sm" fontWeight="600">
                    {position}
                  </Heading>
                  <Heading size="md">{name}</Heading>
                  <Text>
                    Email: <Email color="white">{email}</Email>
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
          <Box width="100%">
            <Box rounded="base" boxShadow="xl" p={8}>
              <HStack alignItems="center">
                <Box>
                  <Heading size="md" pb={3}>
                    Want to work with us?
                  </Heading>
                  <Text>
                    We are thankful for the support from our partners and
                    sponsors.
                  </Text>
                </Box>
                <GatsbyLink to="/sponsors">
                  <Button>Sponsor Us</Button>
                </GatsbyLink>
              </HStack>
            </Box>
            <Box rounded="base" boxShadow="xl" p={8} background="white" my={6}>
              <HStack alignItems="center">
                <Box>
                  <Heading size="md" pb={3}>
                    Want to get involved?
                  </Heading>
                  <Text>
                    We got 40 services and clubs within the CUS. Maybe you will
                    find your interest/passion with us!
                  </Text>
                </Box>
                <GatsbyLink to="/get-involved">
                  <Button>Join Us</Button>
                </GatsbyLink>
              </HStack>
            </Box>
          </Box>
        </Stack>
        <Heading>We want to hear from you!</Heading>
        <Box as="section">
          <Stack
            direction={{ base: "column", lg: "row" }}
            spacing={{ base: "3rem", lg: "2rem" }}
            mt="8"
            align={{ lg: "center" }}
            justify="space-between"
          >
            <Box flex="1" maxW={{ lg: "420px" }}>
              <Heading
                as="h1"
                size="3xl"
                color="primary"
                mt="4"
                fontWeight="extrabold"
                letterSpacing="tight"
              >
                Contact us
              </Heading>
              <Text
                color={mode("gray.600", "gray.400")}
                mt="4"
                fontSize="lg"
                fontWeight="medium"
              >
                Hello! I'm Aditya Surjewala, your Ombudsperson for the CUS. Got
                feedback or questions for us? I'm here to answer them :) Fill
                out the form!
              </Text>
            </Box>
            <Box pos="relative" w={{ base: "full", lg: "660px" }}>
              <ContactForm />
            </Box>
          </Stack>
        </Box>
        <Heading mt={12} pb={4}>
          Learn More
        </Heading>
        <Stack direction={{ base: "column", md: "row" }}>
          <GatsbyLink to="/about-us">
            <Button my={2}>About CUS</Button>
          </GatsbyLink>
          <GatsbyLink to="/get-to-know">
            <Button my={2}>About Clubs/Services</Button>
          </GatsbyLink>
          <GatsbyLink to="/annual-events">
            <Button my={2}>Annual Events</Button>
          </GatsbyLink>
        </Stack>
      </ContentSection>
    </Layout>
  );
};

export default ContactPage;
