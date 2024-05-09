import React from "react";
import { Layout, ContentSection } from "components";
import { PageTitle } from "components/PageTitle";
import { ViewMoreCard } from "components/ViewMoreCard";
import { SimpleGrid } from "@chakra-ui/react";

const ForServicesAndClubsPage = () => {
  return (
    <Layout seoTitle="Services and Clubs">
      <PageTitle title="For Services and Clubs" />
      <ContentSection>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <ViewMoreCard
            title="Room Booking"
            description=""
            imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/roomBooking.png"
            buttonText="Book Now"
            buttonLink="https://cus.forms-db.com/view.php?id=11668"
            content=""
            imageContain
          />
          <ViewMoreCard
            title="Reimbursement"
            description=""
            imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/Reimbursement.png"
            buttonText="Get Reimbursed"
            buttonLink="http://internal.cus.ca/finance/reimbursement/"
            content=""
            imageContain
          />
          <ViewMoreCard
            title="Visual Media"
            description=""
            imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/Visual-Media.png"
            buttonText="Request Now"
            buttonLink="http://internal.cus.ca/marketing/visual-media/"
            content=""
            imageContain
          />
          <ViewMoreCard
            title="CUSunday Request"
            description=""
            imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/CUSunday.png"
            buttonText="Request Now"
            buttonLink="https://forms.gle/PMx5HKU6dEjXcCWX8"
            content=""
            imageContain
          />
          <ViewMoreCard
            title="Sauder BigScreen"
            description=""
            imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/BigScreen.png"
            buttonText="Submit Now"
            buttonLink="https://forms.cus.ca/view.php?id=4"
            content=""
            imageContain
          />
          <ViewMoreCard
            title="Human Resources"
            description=""
            imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/HR.png"
            buttonText="Book Now"
            buttonLink="https://forms.cus.ca/view.php?id=1"
            content=""
            imageContain
          />
          <ViewMoreCard
            title="Information Technology"
            description=""
            imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/IT.png"
            buttonText="Learn More"
            buttonLink="http://it.cus.ca/"
            content=""
            imageContain
          />
          <ViewMoreCard
            title="External"
            description=""
            imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/External.png"
            buttonText="External"
            buttonLink="http://internal.cus.ca/external/corporate-relations/"
            content=""
            imageContain
          />
          <ViewMoreCard
            title="More Services"
            description=""
            imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/Other.png"
            buttonText="Services"
            buttonLink="http://internal.cus.ca/"
            content=""
            imageContain
          />
          <ViewMoreCard
            title="Events Calendar"
            description=""
            imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/Other.png"
            buttonText="Services"
            buttonLink="https://www.cus.ca/new-event/"
            content=""
            imageContain
          />
          <ViewMoreCard
            title="Accessibility and Inclusion"
            description=""
            buttonText="Learn More"
            buttonLink="https://docs.google.com/presentation/d/1dvTnitx7-Cr66DxIvBZL6KhA490B8w8AvYcD678Wnws/edit?usp=sharing"
            content=""
            imageContain
          />
        </SimpleGrid>
      </ContentSection>
    </Layout>
  );
};

export default ForServicesAndClubsPage;
