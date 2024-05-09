import React, { useEffect } from "react";
import { Layout } from "../components/Layout";
import { Stats } from "../components/Pages/Home";
import { GetInvolved } from "../components/Pages/Home";
import { MainPageEvents } from "../components/Pages/Home";
import { Resources } from "../components/Pages/Home";
import { InquiryBox } from "components/Pages/Home/InquiryBox";
import { Carousel } from "components/Carousel";
import { StudentLife } from "components/Pages/Home/StudentLife";
import { VideoHero } from "components/Pages/Home/VideoHero";
import { LatestNews } from "components/Pages/Home/LatestNews";
import { AboutUs } from "components/Pages/Home/AboutUs";
import AOS from "aos";
import "aos/dist/aos.css";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { Slide } from "components/Carousel/Carousel";
import { ContentSection } from "components";
import Banner from "components/Banner";
const slides = [
  {
    video:
      "https://www.sauder.ubc.ca/sites/default/files/2019-12/Homepage_Compressed_0.mp4",
    label: "Welcome To The CUS",
    description: "Canada's largest business undergraduate society since 1999",
    button1: {
      text: "Learn more",
      url: "#",
    },
    button2: {
      text: "Learn more",
      url: "#",
    },
  },
  {
    img: "https://www.sauder.ubc.ca/sites/default/files/dynamic_styles/scale/750/public/2019-05/about-ubc-sauder-hero.png",
    label: "Second Slide",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: "https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    label: "Third Slide",
    description:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
  {
    img: "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    label: "Fourth Slide",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    img: "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    label: "Fifth Slide",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const IndexPage = ({ data: { allWpHomePageBanner } }) => {
  const slides: Slide[] = allWpHomePageBanner.nodes
    .sort(
      ({ homePageBanners: a }, { homePageBanners: b }) =>
        a.ordering - b.ordering
    )
    .map(({ homePageBanners }) => {
      return {
        media: homePageBanners.media.mediaItemUrl,
        subtitle: homePageBanners.subtitle,
        title: homePageBanners.title,
        button1: homePageBanners.button1,
        button2: homePageBanners.button2,
      };
    });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <Layout>
      <Helmet title="Commerce Undergraduate Society" defer={false} />
      <Banner />
      <Carousel slides={slides} />
      <ContentSection>
        <Stats />
      </ContentSection>
      <div data-aos="fade-up">
        <MainPageEvents />
      </div>
      <div data-aos="fade-up">
        <StudentLife />
      </div>
      <div data-aos="fade-right">
        <GetInvolved />
      </div>
      <div data-aos="fade-up">
        <Resources />
      </div>
      <VideoHero />
      <div data-aos="fade-up">
        <LatestNews />
      </div>
      <div data-aos="fade-up">
        <AboutUs />
      </div>
      <div data-aos="fade-up">
        <InquiryBox />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allWpHomePageBanner {
      nodes {
        homePageBanners {
          title
          subtitle
          ordering
          fieldGroupName
          button2 {
            text
            url
          }
          button1 {
            text
            url
          }
          media {
            mediaItemUrl
          }
        }
      }
    }
  }
`;

export default IndexPage;
