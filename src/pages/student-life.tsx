import React from "react";
import { Layout, ContentSection } from "components";
import { PageTitle } from "components/PageTitle";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { PortalBox } from "components/PortalBox";

const studentLifeResources = [
  {
    title: "Student Lounge",
    description:
      "This is an exclusive place for UBC Sauder students to chill between classes. We got a pool table and fresh coffee for you. Come stay for a while!",
    url: "/student-lounge",
    img: "https://admin.cus.ca/wp-content/uploads/2021/08/IMG_1241-768x512.jpg",
  },
  {
    title: "CUSavings",
    description:
      "Being a part of the CUS also means that you get exclusive deals and perks from local brands and on-campus food places. Check it out!  ",
    url: "/cus-savings",
    img: "https://admin.cus.ca/wp-content/uploads/2021/09/CUSavings-768x508.jpg",
  },
  {
    title: "Student Discounts",
    description:
      "Being a student means that you get access to a lot of cool perks that may be useful for your university activities. Take a peek at what those are!  ",
    url: "/general-student-discounts",
    img: "https://admin.cus.ca/wp-content/uploads/2021/09/Student-Discounts-768x489.jpg",
  },
  {
    title: "Guides",
    description:
      "Our guides are designed to help you navigate your university journey and provide you with more information about different resources available for you.",
    url: "/guides",
    img: "https://admin.cus.ca/wp-content/uploads/2021/09/Guides-768x512.jpg",
  },
  {
    title: "Yearbook & Prospectus",
    description:
      "Excited to get your yearbook and prospectus? You can find the latest updates on how to get yours here.",
    url: "/yearbook-and-prospectus",
    img: "https://admin.cus.ca/wp-content/uploads/2021/09/Yearbook-Prospectus-768x359.jpg",
  },
  {
    title: "Grads",
    description:
      "Are you graduating this year? Get to learn more about Grad Portraits and Grad Night here.",
    url: "/grads",
    img: "https://admin.cus.ca/wp-content/uploads/2021/09/Grads-768x386.jpg",
  },
  {
    title: "The CUS Broadcast",
    description:
      "We want to keep you informed about our latest news, activities and decision-making! Keep up with what we are doing through our articles.",
    url: "/cus-broadcast",
    img: "https://admin.cus.ca/wp-content/uploads/2021/09/ubc_sauder_march_22nd_stock_photos_full_resolution-2955_51172791128_o-1-768x512.jpg",
  },
  {
    title: "Merch Store",
    description:
      "Yes that’s right, we have our own merch. What are you waiting for? Check it out!",
    url: "/merch-store",
    img: "https://admin.cus.ca/wp-content/uploads/2021/08/IMG_1256-768x512.jpg",
  },
];

const StudentLifePage = () => {
  return (
    <Layout seoTitle="Student Life">
      <PageTitle
        title="Student Life"
        description="There’s more to university than academics and career development—it’s the place for you to meet your friends of a lifetime and make meaningful connections! Come visit our student lounge and explore our guides and discounts to see what other benefits we have in store for you!"
      />
      <ContentSection>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {studentLifeResources.map(({ img, url, description, title }) => (
            <PortalBox
              img={img}
              url={url}
              description={description ?? ""}
              title={title}
            />
          ))}
        </SimpleGrid>
      </ContentSection>
    </Layout>
  );
};

export default StudentLifePage;
