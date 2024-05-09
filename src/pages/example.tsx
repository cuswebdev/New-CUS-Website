import React from "react";
import { Layout, ContentSection } from "components";
import { PageTitle } from "components/PageTitle";
import StudentLife from "components/Pages/StudentLife";
import { HeroTextOverlay } from "components/HeroTextOverlay";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { CarouselCard } from "components/CarouselCard";
import { Blog } from "components/Pages/Home/LatestNews/LatestNews";
import { IconDescriptions } from "components/IconDescriptions";
import { FaUserFriends, FaSuitcase, FaGraduationCap } from "react-icons/fa";
import { ViewMoreCard } from "components/ViewMoreCard";
import { ExpandableCardGrid } from "components/ExpandableCardGrid";
import { CusAccordion } from "components/CusAccordion";

const ExamplePage = () => {
  return (
    <Layout seoTitle="Example Page">
      <PageTitle title="Example Page" />
      <HeroTextOverlay
        title="Student Lounge"
        description="Lorem ipsum"
        img="https://3k7by215ywuf340yi3alsfso-wpengine.netdna-ssl.com/wp-content/uploads/sites/5/2016/10/010.jpg"
      />
      <ContentSection>
        <CarouselCard>
          {Array(6)
            .fill(0)
            .map((_) => (
              <Blog
                category="JULY 10, 2021"
                media="https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjaWFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                title="CPA IS KEWL"
                description="learn how to count"
                href="#"
              />
            ))}
        </CarouselCard>
        <IconDescriptions
          items={[
            {
              icon: FaUserFriends,
              title: "Personal",
              description: "2",
            },
            {
              icon: FaSuitcase,
              title: "Professional",
              description: "3",
            },
            {
              icon: FaGraduationCap,
              title: "Academic",
              description: "1",
            },
          ]}
        />
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <ViewMoreCard
            title="title"
            description="Some description here"
            imageSrc="https://bit.ly/prosper-baba"
            content="lol"
          />
          <ViewMoreCard
            title="title"
            description="Some description here"
            imageSrc="https://bit.ly/prosper-baba"
          />
          <ViewMoreCard
            title="title"
            description="Some description here"
            imageSrc="https://bit.ly/prosper-baba"
            buttonLink="https://google.com"
            buttonText="Go to google"
          />
          <ViewMoreCard title="title" content="lol" />
        </SimpleGrid>
        <ExpandableCardGrid
          items={Array(20).fill({
            title: "title",
            description: "description",
            data: {},
          })}
          renderMore={() => <div>Should put data here</div>}
        />
        <CusAccordion
          items={[
            {
              title: "Title",
              content: "YEET",
              innerItems: [
                { title: "1", content: "2" },
                { title: "1", content: "2" },
              ],
            },
            {
              title: "Title",
              content: "YEET",
              innerItems: [
                { title: "1", content: "2" },
                { title: "2", content: "2" },
                { title: "3", content: "2" },
              ],
            },
            {
              title: "Title",
              content: "YEET",
            },
          ]}
        />
      </ContentSection>
    </Layout>
  );
};

export default ExamplePage;
