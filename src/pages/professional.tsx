import React from "react";
import { Layout, ContentSection } from "components";
import { PageTitle } from "components/PageTitle";
import { ImageSection } from "components/ImageSection";
import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { PortalBox } from "components/PortalBox";

const professionalResources = [
  {
    name: "The Hari B. Varshney Business Career Centre (BCC)",
    link: "https://mybcom.sauder.ubc.ca/bcc",
    image: "https://admin.cus.ca/wp-content/uploads/2021/08/bcc_sauder.jpeg",
    description:
      "The BCC plays a crucial role in your UBC Sauder experience. Through one-on-one coaching with our experienced career advisors, and tailored workshops and programs focused on career development, you’ll explore, discover, and realize your career aspirations.",
  },
  {
    name: "Career Toolkits",
    link: "https://mybcom.sauder.ubc.ca/career-experience/career-toolkits",
    image:
      "https://admin.cus.ca/wp-content/uploads/2021/08/resume-1024x480.png",
    description:
      "The BCC has designed Career Toolkits specifically for UBC Sauder students to develop career-ready skills employers are looking for. Based on competencies defined by hundreds of employers, as well as career development expertise from BCC, these toolkits give you the resources to feel comfortable, confident, and capable in your career with everything you need to be successful to find your ideal career.",
  },
  {
    name: "Interview Skills Toolkit",
    link: "https://mybcom.sauder.ubc.ca/career-experience/career-toolkits/interview-skills-toolkit",
    image: "https://admin.cus.ca/wp-content/uploads/2021/08/int.jpeg",
    description:
      "It is often said that interviews are as much an opportunity for you to assess the company recruiting you as they are for the company to assess you. This toolkit will teach you how to ace the various stages and forms of the interview process so you can land your dream job.",
  },
  {
    name: "COOL Career Resources Database",
    link: "https://mybcom.sauder.ubc.ca/career-experience/career-resources/cool-0",
    image: "https://admin.cus.ca/wp-content/uploads/2021/08/coo-1024x576.jpeg",
    description:
      "COOL (Career Options On-Line) is an online career management system, available exclusively to UBC Sauder students and alumni. Managed by the Hari B. Varshney Business Career Centre, COOL offers key resources to help you thrive in your professional development journey.",
  },
  {
    name: "Career & Experience",
    link: "https://mybcom.sauder.ubc.ca/careers",
    image:
      "https://admin.cus.ca/wp-content/uploads/2021/08/career-1024x328.jpeg",
    description:
      "Get an overview of all the resources, tools, and opportunities that the Hard B. Varshney Business Centre (BCC) offers you.",
  },
];

const ProfessionalPage = () => {
  return (
    <Layout seoTitle="Professional">
      <PageTitle title="Professional" />
      <ImageSection img="https://admin.cus.ca/wp-content/uploads/2021/08/IMG_1302-scaled.jpg" />
      <ContentSection>
        <Text pb={8}>
          We are dedicated to help you achieve your professional goals. We have
          a multitude of toolkits that can help you with most aspects of your
          professional career, as well as a Career Portal. Check it out below.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} spacing={10}>
          {professionalResources.map(({ image, link, description, name }) => (
            <PortalBox
              img={image}
              url={link}
              description={description ?? ""}
              title={name}
            />
          ))}
        </SimpleGrid>
      </ContentSection>
    </Layout>
  );
};

export default ProfessionalPage;
