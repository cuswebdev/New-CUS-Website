import React from "react";
import { Layout, ContentSection, EmbededPdf } from "components";
import { PageTitle } from "components/PageTitle";
import { Box, Heading, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { HeroTextOverlay } from "components/HeroTextOverlay";
import { PortalBox } from "components/PortalBox";
import { CusAccordion } from "components/CusAccordion";
import { Email } from "components/Email";
import { ImageSection } from "components/ImageSection";

interface Resource {
  link?: string;
  image?: string;
  name: string;
  description?: string;
}

const mentalWellnessResources: Resource[] = [
  {
    name: "Thrive 5",
    link: "https://wellbeing.ubc.ca/thrive-5",
    image:
      "https://admin.cus.ca/wp-content/uploads/2021/08/1.-Thrive-5--1024x320.jpg",
    description:
      "Check out the five ways that can help promote a healthy mind. They are simple, easy-to-implement ways to help support your mental health.",
  },
  {
    name: "Student Health Service",
    link: "https://students.ubc.ca/health/student-health-service",
    image:
      "https://admin.cus.ca/wp-content/uploads/2021/08/2.-student_health-1024x576.jpg",
    description:
      "Offers a wide range of health assessments and treatments provided by doctors, nurse practitioners, nurses and other medical professionals virtually or in-person.",
  },
  {
    name: "UBC Counselling Services",
    link: "https://students.ubc.ca/health/counselling-services",
    image:
      "https://admin.cus.ca/wp-content/uploads/2021/08/3.-UBC_counselling_services.jpg",
    description:
      "Provides virtual drop-in sessions, appointments, group counselling programs, and support for Indigenous students.",
  },
  {
    name: "Here2Talk",
    link: "https://here2talk.ca/home",
    image: "https://admin.cus.ca/wp-content/uploads/2021/08/4.-here2talk.png",
    description:
      "Here2Talk connects students with mental health support when they need it. All UBC students have access to free, confidential counselling and community referral services, conveniently available 24/7 via app, phone and web.",
  },
  {
    name: "UBC Wellness Centre",
    link: "https://students.ubc.ca/health/wellness-centre",
    image:
      "https://admin.cus.ca/wp-content/uploads/2021/08/5.-UBC_wellness_centre.jpg",
    description:
      "Connect with trained students to navigate campus services, talk to a peer about what is going on for you, and learn about managing stress, sleep, eating well and living well as a student.",
  },
  {
    name: "UBC Trans and Non-binary Student Guide",
    link: "https://drive.google.com/file/d/18WClONQyBLp8syI-L_FrX_B1XbjuDZuC/view",
    image:
      "https://admin.cus.ca/wp-content/uploads/2021/08/5.-UBC_wellness_centre.jpg",
    description:
      "The UBC Trans & Non-binary Student guide is a collaborative project between the Equity & Inclusions Office. It’s an honest guide regarding the types of support available to you, and how others have navigated their experience.",
  },
];

const mentalHealthResources: Resource[] = [
  {
    name: "UBC Wellness Centre",
    link: "https://students.ubc.ca/health/wellness-centre",
    image:
      "https://admin.cus.ca/wp-content/uploads/2021/08/9.-ubc-wellness-centre-2.jpg",
    description:
      "This resource provides several tips on stress management and navigating university life. You can connect with trained students through the Wellness Centre and they will help you navigate campus services and learn more about health topics and wellness resources.",
  },
  {
    name: "The Colour Project",
    link: "https://www.thecolourproject.ca",
    image:
      "https://admin.cus.ca/wp-content/uploads/2021/08/10.-the-colour-project-option-2-1024x387.jpg",
    description:
      "The Colour Project is a free anonymous text-based peer support resource where students can be connected to trained volunteers. You are able to communicate with someone one-on-one and can disconnect whenever you decide. ",
  },
  {
    name: "Anxiety Canada",
    link: "https://www.anxietycanada.com",
    image:
      "https://admin.cus.ca/wp-content/uploads/2021/08/11.-anxiety-canada.jpg",
    description:
      "This resource focuses on providing coping mechanisms for dealing with anxiety. They offer a step-by-step guide for anxiety management as well as a free scientifically based anxiety tool that can help you navigate how to deal with different uncertainties in your life.",
  },
  {
    name: "CAMH",
    link: "https://www.camh.ca/",
    image:
      "https://admin.cus.ca/wp-content/uploads/2021/08/12.-CAMH-1024x511.jpg",
    description:
      "CAMH provides access to several different mental health programs and services for all ages. There are also plenty of learning resources on different mental health topics that you can discover through their website.",
  },
  {
    name: "UBC Student Assistance Program (SAP)",
    link: "https://students.ubc.ca/health/ubc-student-assistance-program-sap",
    image:
      "https://admin.cus.ca/wp-content/uploads/2021/08/13.-ubc-student-assistant-program.jpg",
    description:
      "UBC SAP is a free 24/7 wellness resource for students that include personal counselling, life coaching, group programs and more based on your needs. SAP focuses on helping students with their mental, emotional, physical and financial health.",
  },
  {
    name: "Campus Lightbox",
    link: "https://campuslightbox.com",
    image:
      "https://admin.cus.ca/wp-content/uploads/2021/08/14.campus_lightbox-1024x479.png",
    description:
      "This resource provides a guide to all of UBC’s Mental Health Resources. Their website also features a search filter where you are able to find the resource that best fits your needs.",
  },
  {
    name: "Crisis Centre",
    link: "https://crisiscentre.bc.ca",
    image:
      "https://admin.cus.ca/wp-content/uploads/2021/08/15.crisis-centre.jpg",
    description:
      "The Crisis Centre is a 24/7 phone line to support vulnerable individuals and provides immediate access to barrier-free, non-judgemental, confidential support and follow-up to all ages.",
  },
  {
    name: "Be There",
    link: "https://bethere.org/Home",
    image:
      "https://admin.cus.ca/wp-content/uploads/2021/08/16.be-there-1024x269.jpg",
    description:
      "This resource outlines the various ways on how you can support a friend who may be struggling with their mental health. On their website, they list 5 golden rules that are important to learn and remember when you are supporting someone.",
  },
];

const physicalResources: Resource[] = [
  {
    name: "UBC Recreation",
    link: "https://recreation.sites.olt.ubc.ca/",
    image:
      "https://admin.cus.ca/wp-content/uploads/2021/08/7.-UBC-Recreation-1024x320.jpg",
    description:
      "Explore virtual and in-person fitness and recreation experiences available at UBC for students. Doing some indoor and outdoor exercise will help you relax and free from stress!",
  },
  {
    name: "UBC Get Active At Home",
    link: "https://recreation.ubc.ca/get-moving/active-at-home",
    image:
      "https://admin.cus.ca/wp-content/uploads/2021/08/8.-active-at-home.jpg",
    description:
      "Drop in to virtual fitness classes, see tips for exercises, and more, from UBC Recreation.",
  },
  {
    name: "CUSafety in Henry Angus Building",
    link: "",
    image:
      "https://admin.cus.ca/wp-content/uploads/2021/08/6.-CUSafety-at-the-Henry-Angus-Building.jpg",
    description:
      "The main building for UBC Sauder students, where students attend class, study, and socialize. In the CUSafety Map, we highlight locations of all safety equipment, as well as emergency routes.",
  },
];

const PersonalPage = () => {
  return (
    <Layout seoTitle="Personal">
      <PageTitle
        title="Personal"
        description="We are invested in your personal wellbeing — your physical and mental health matters. We are here to help. Check out the resources we have for you below."
      />
      <HeroTextOverlay
        img="https://admin.cus.ca/wp-content/uploads/2021/08/IMG_1077-scaled.jpg"
        title="Personal"
        description={`Being a student is hard, and we are here to support you through your journey! The wellness of our students remains our top priority. We would like to share our safety, wellness, and finances that are connected with UBC. We hope you’ll find them useful!`}
      />
      <ContentSection pt={0}>
        <Heading pb={4}>Mental Wellness</Heading>
        <Text>
          Mental wellness is as important as physical health, especially during
          back-to-school and exam season. CUSafety mental wellness guide
          highlights some tips from professors and UGO to guide you through
          stressful times.
        </Text>
      </ContentSection>
      <ContentSection pt={0}>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={10}>
          {mentalWellnessResources.map(({ image, link, description, name }) => (
            <PortalBox
              img={image}
              url={link}
              description={description ?? ""}
              title={name}
            />
          ))}
        </SimpleGrid>
      </ContentSection>
      <ContentSection pt={0}>
        <Heading pb={4}>Physical Health/Wellness</Heading>
        <Text>
          After studying all those hours for your exams, it’s important to get
          up and get active! Exercise will help you perform even better.
        </Text>
      </ContentSection>
      <ContentSection pt={0}>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={10}>
          {physicalResources.map(({ image, link, description, name }) => (
            <PortalBox
              img={image}
              url={link}
              description={description ?? ""}
              title={name}
            />
          ))}
        </SimpleGrid>
      </ContentSection>
      <ContentSection pt={0}>
        <Heading pb={4}>Mental Health Resources</Heading>
        <Text>
          Sauder Health and Wellness strives to create an environment that
          encourages students to continuously reflect on their mental health and
          ensure that they are receiving the resources that are necessary for
          achieving mental wellness. This year, Sauder Health and Wellness plan
          to incorporate more mental health-focused aspects into their events as
          they believe that mental health plays a major role in one’s ability to
          succeed in all areas of life. Below you will find some mental health
          resources that can assist you in your mental health journey. All of
          these resources and more are also located on the Sauder Health and
          Wellness website. In addition, they have several blogs that focus on
          different mental health and wellness topics that you can read at any
          time.{" "}
          <Link url="https://sauderhewe.squarespace.com/new-page-1">
            https://sauderhewe.squarespace.com/new-page-1
          </Link>
        </Text>
      </ContentSection>
      <ContentSection pt={0}>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={10}>
          {mentalHealthResources.map(({ image, link, description, name }) => (
            <PortalBox
              img={image}
              url={link}
              description={description ?? ""}
              title={name}
            />
          ))}
        </SimpleGrid>
      </ContentSection>
      <ContentSection small>
        <Heading pb={4}>Safety Resources</Heading>
        <Text pb={4}>
          Your safety is our priority. We want you to have the support and
          resources you need to be at a safe place.
        </Text>
        <Link
          display="block"
          py={1}
          href="https://www.ams.ubc.ca/student-services/health-dental/"
        >
          Intro to Sexual Violence Prevention and Response - CUS
        </Link>
        <Link
          display="block"
          py={1}
          href="https://www.ams.ubc.ca/student-services/health-dental/"
        >
          Inclusive/Safer Online Spaces &#38; Event Planning
        </Link>
        <Link
          display="block"
          py={1}
          href="https://www.ams.ubc.ca/student-services/health-dental/"
        >
          Sexual Consent and Culture of Consent
        </Link>
        <Heading py={4}>Survivor’s Guide</Heading>
        <Text>
          Navigating the sexual misconduct reporting process through UBC is a
          topic that many students are unfamiliar with. CUS Clarify recognized
          how complex the process may be for survivors and/or supporters of
          survivors, and wanted to create a guide that provided an overview of
          what reporting through UBC looks like, so that survivors of sexual
          violence can make the best decision that’s right for them in terms of
          healing. <br />
          <br />
          Our Survivor’s Guide has been reviewed and edited with the support of
          both SVPRO and UBC’s Investigations Office. It contains both on-campus
          resource information (e.g SVPRO), as well as detailed summaries of the
          steps involved in reporting sexual misconduct through UBC’s
          Investigations Office. <br />
          <br />
          As a service, the CUS Clarify’s mission is to help promote a culture
          of consent and transparency at UBC Sauder, as well as provide
          meaningful resources and support to survivors. We are thrilled to see
          the Survivor’s Guide be published, and wanted to take this opportunity
          to voice that if you have experienced any form of sexual violence, it
          was not your fault and you are not alone. We believe you and are here
          to support you and connect you to resources.
        </Text>
        <CusAccordion
          items={[
            {
              title: "Survivor’s Guide",
              content: (
                <Box py={4} px={{ base: 4, md: 8 }} color="black" bg="white">
                  <Text>
                    SVPRO Contact: Educator, Sexual Violence Prevention and
                    Response Office <Email>svpro.vancouver@ubc.ca</Email>{" "}
                    604-822-1588
                  </Text>
                  <EmbededPdf url="https://admin.cus.ca/wp-content/uploads/2021/08/391768BC-85A3-490E-8D6B-AE0773AD241E-Malia-Bryson.pdf" />
                </Box>
              ),
            },
          ]}
        />
        <Heading py={4}>Historical Document</Heading>
        <Text>
          The health and safety of our community is and will always remain our
          top priority. One of the commitments include working closely with our
          CUS Clarify service to improve transparency with our constituents on
          the CUS’ historical events that relate to sexual misconduct.
        </Text>
        <CusAccordion
          items={[
            {
              title: "Historical Document",
              content: (
                <EmbededPdf url="https://admin.cus.ca/wp-content/uploads/2021/08/Sexual-Violence-History-Document-2020.pdf" />
              ),
            },
          ]}
        />
      </ContentSection>
      <ImageSection img="https://admin.cus.ca/wp-content/uploads/2021/08/IMG_1077-1024x683.jpg" />
      <ContentSection small>
        <Heading py={4}>Medical Support</Heading>
        <Text>
          <Link
            display="block"
            py={1}
            href="https://www.ams.ubc.ca/student-services/health-dental/"
          >
            Ams Medical Insurance
          </Link>
          <Link
            display="block"
            py={1}
            href="https://students.ubc.ca/health/student-health-service"
          >
            UBC Student Health Service
          </Link>
        </Text>
      </ContentSection>
      <ContentSection small>
        <Heading>Scholarship/Funds</Heading>
        <CusAccordion
          items={[
            {
              title: "Financial Resourecs",
              content: (
                <Box py={4} px={{ base: 4, md: 8 }} color="black" bg="white">
                  <Text>
                    Stay tuned for our Financial Workshops! For any general
                    inquiries, email <Email>finance.general@cus.ca</Email> with
                    [Inquiry-StudentName-TopicofInquiry].
                  </Text>
                </Box>
              ),
            },
            {
              title: "IBPOC Scholarship",
              content: (
                <Box py={4} px={{ base: 4, md: 8 }} color="black" bg="white">
                  <Text>
                    We are proud to fund the CUS IBPOC Award in Business which
                    totals to $20,000 annually. It is available for UBC Bachelor
                    of Commerce students who identify as Indigenous, Black or a
                    person of colour and are in good academic standing. To
                    ensure full fairness, the applications will be independently
                    reviewed by the UGO (Undergraduate Office). Learn more by
                    going to: https://bit.ly/2XqwCHj
                  </Text>
                </Box>
              ),
            },
            {
              title:
                "Commerce Student Intiative Fund Committee (CSIF) *Applications open November 1*",
              content: (
                <Box py={4} px={{ base: 4, md: 8 }} color="black" bg="white">
                  <Text>
                    <b>
                      Do you aspire to create a meaningful project that
                      contributes to the undergraduate experience? The Commerce
                      Undergraduate Society is eager to hear your ideas.{" "}
                    </b>
                    <br />
                    <br />
                    The <b>Commerce Student Initiative Fund (CSIF)</b> was
                    established this year where Conference Affiliation and Clubs
                    Innovation Grant merged together. CSIF aims to encourage and
                    support all CUS Services, Clubs, and students to ignite new
                    initiatives. Working closely with the Board of Directors,
                    CSIF ensures that all applications are assessed fairly.{" "}
                    <br />
                    <br />
                    With the funding of $50,000, this committee looks forward to
                    hearing from CUS Services, Clubs, and Students and
                    supporting new initiatives and opportunities for the Sauder
                    community. By receiving Society sponsorship and monetary
                    funding, student ventures unlock access to a wealth of
                    resources for operational success and development. <br />
                    <br />
                    Please refer to{" "}
                    <Link href="https://docs.google.com/document/d/1qPrwUwa65Yo3JnldEvVlHLKKdWXKxqnYxtBREtDlaVY/edit">
                      this
                    </Link>{" "}
                    document, which includes all necessary documents you would
                    need to understand before proceeding to apply. Questions?
                    Please email <Email>noah.dall@cus.ca</Email>
                    <br />
                    <br />
                    <b>
                      Application Processes: Applications are now OPEN.
                    </b>{" "}
                    <br />
                    <br />
                    <b>The Decision Process</b>
                    <br />
                    After applications close, there will be invitations to
                    present. Following the presentations will be a three-day
                    time gap where the committee will make a decision. After a
                    decision has been communicated with the applicant, there
                    will be a seven-day time gap to appeal.
                    <br />
                    <br />
                    <b>The Funding Process</b>
                    <br />
                    Once an application has been approved by the committee, the
                    funds will be transferred to their corresponding AMS Club
                    account within seven to fourteen days.
                  </Text>
                </Box>
              ),
            },
          ]}
        />
      </ContentSection>
    </Layout>
  );
};

export default PersonalPage;
