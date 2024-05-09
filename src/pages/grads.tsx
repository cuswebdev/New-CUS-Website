import React from "react";
import { Layout, ContentSection } from "components";
import { PageTitle } from "components/PageTitle";
import { ImageSection } from "components/ImageSection";
import { ImageRightCTA } from "components/CTAComponents";
import { Heading, Link, Text } from "@chakra-ui/react";
import { Email } from "components/Email";

const GetInvolvedPage = () => {
  return (
    <Layout seoTitle="Grads">
      <PageTitle title="Grads" />
      <ImageSection img="https://admin.cus.ca/wp-content/uploads/2021/08/ubc_sauder_march_22nd_stock_photos_full_resolution-1028_51173318834_o-scaled.jpg" />
      <ContentSection>
        <ImageRightCTA image="https://admin.cus.ca/wp-content/uploads/2021/08/19826353090_f68554c92e_c.jpg">
          <Heading py={4}>Yearbook Showcase!</Heading>
          {/* <Heading size="md" pb={4}>
            Get a sneak peak of what our Sauder School of Business yearbook
            looks like!
          </Heading>
          <Text>
            Yearbooks are given free of charge to SAUDER GRADS ONLY. The
            yearbook shown here is the 2020-2021 one that is given to BCom grads
            of 2021. 2020 and 2021 yearbooks are now AVAILABLE for pick up or
            international delivery.
          </Text> */}
          <Text>Coming soon 2022</Text>
        </ImageRightCTA>
      </ContentSection>
      <ImageSection img="https://admin.cus.ca/wp-content/uploads/2021/08/ubc_sauder_march_22nd_stock_photos_full_resolution-0667_51173622550_o.jpg" />
      <ContentSection>
        <Heading py={4}>Graduation Portraits Artona’s 2022</Heading>
        <Text>Coming soon 2022</Text>
        {/* <Heading size="md" pb={4}>
          Hey Sauder 2022 Graduates! You can now book a session for your
          Artona’s Graduation Portraits HERE from now through April ___, 2022.
        </Heading>
        <Text pb={4}>
          Note: Only graduation photos taken by MARCH ___, 2022 will be included
          in the Yearbook! Please make sure that your appointment is booked
          before that deadline if you wish to be included in the Yearbook.
        </Text>
        <Heading size="md" pb={4}>
          Book your photo here:{" "}
          <Link href="https://www.artona.com/schools/UBC-COMM/programs/graduation">
            https://www.artona.com/schools/UBC-COMM/programs/graduation
          </Link>
        </Heading>
        <Text>
          **Please note that all appointments available online on a first-come,
          first-served basis. The photo session includes grad portraits and
          casual and dressy outfits. A $60 refundable deposit is collected at
          your appointment. When you login online to select your yearbook photo
          and order your photos there will be a $60 credit in your account.
          <br />
          <br />
          Questions? Contact Artona below: <br />
          <Link href="https://www.artona.com/faqs">
            https://www.artona.com/faqs
          </Link>
          <br />
          <Link href="https://www.artona.com/contact">
            https://www.artona.com/contact
          </Link>
          <br />
          <Email>csr@artona.com</Email>
          <br />
          (604) 872-7272 or +1 (800) 668-3866 <br />
          <br />
          Hours of Operation: <br />
          September - February: 9:00am - 9:00pm (All Days) <br />
          March - August: 9:00am - 5:00pm (Mon - Sat) <br />
          Closed on statutory holidays, and Christmas Eve and New Years eve at
          4PM.
        </Text>
        <Heading width="100%" textAlign="right" pt={3} size="md">
          Deadline:{" "}
        </Heading> */}
      </ContentSection>
      <ContentSection>
        <Heading pb={4}>Grad Night</Heading>
        <Text>Coming soon 2022</Text>
      </ContentSection>
    </Layout>
  );
};

export default GetInvolvedPage;
