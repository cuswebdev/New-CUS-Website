import React, { useEffect } from "react";
import { Layout, ContentSection } from "components";
import { PageTitle } from "components/PageTitle";
import { Flex, Stack, Heading, Text } from "@chakra-ui/react";
import { ImageLeftCTA, ImageRightCTA } from "components/CTAComponents";
import AOS from "aos";
import "aos/dist/aos.css";
import { HeroTextOverlay } from "components/HeroTextOverlay";

const YearbookAndProspectusPage = () => {
  return (
    <Layout seoTitle="Yearbook & Prospectus">
      <PageTitle title="Yearbook & Prospectus" />
      <HeroTextOverlay
        title="Yearbook & Prospectus"
        description={`The Yearbook & Prospectus service strives to build long-lasting memories for over 700 Sauder graduates each year. Our main goal is to highlight the integrity of the undergraduate experience at the Sauder School of Business. Our team consists of Digital Design Directors and External Relations Directors that assembled our annual CUS Agenda prospectus and Yearbook for 2021-2022.\n\nPlease pick up your prospectus agendas during Bizweek at our Yearbook & Prospectus booth! If you are not able to get your yearbook during that time, a pdf copy is available on our Guides page.`}
        img="https://admin.cus.ca/wp-content/uploads/2021/08/ubc_sauder_march_22nd_stock_photos_full_resolution-1303_51172765708_o-1024x683.jpg"
      />
    </Layout>
  );
};

export default YearbookAndProspectusPage;
