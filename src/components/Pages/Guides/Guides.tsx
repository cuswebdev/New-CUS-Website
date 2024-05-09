import React from "react";
import { Flex, Stack, Heading, Text } from "@chakra-ui/react";
import { CusAccordion } from "components/CusAccordion";
import { EmbededPdf } from "components/EmbededPdf";

const Guides = () => {
  return (
    <>
      <Heading pb={4}>2022 Prospectus</Heading>
      <Text>
      If you came to our booth during Spark Day or Bizweek and we ran out, dont worry because this year we launched a digital version of the agenda! These digital agendas are compatible with Goodnotes and Notability with hyperlinked tabs! We have three colour options below (the only difference is the cover colour, the content remains the same) 
      <p>
        <b>Hyperlink navigation instructions:</b>
        <br />
        Month tabs → goes directly to the monthly calendar
        Info tab → goes directly to the beginning of the help book section
      </p>
      <p>
        <b>GoodNotes app:</b>
        <br />
        Go to the GoodNotes app → On the top left side of the screen click “+” → import → Click on the pdf file → import as a new document.
        Note: To click on the hyperlinks, make sure you select the following tool (red square):
      </p>
      <p>
        <b>Notability app:</b>
        <br />
        Go to the Notability app - On the top right of the screen select import (the icon with an arrow pointing down) → Click on the pdf file → choose new note → open.
      </p>
      </Text>
      <CusAccordion
        items={[
          {
            title: "2022 Prospectus Blue Version",
            content: (
              <EmbededPdf url="https://drive.google.com/file/d/1FvS1Tjp8WpHr-h3UuTZEY75i35D-I084/view" />
            ),
          },
          {
            title: "2022 Prospectus Green Version",
            content: (
              <EmbededPdf url="https://drive.google.com/file/d/1OJQaNWbVkqzVLX5x1uflPlz69fH17YaA/view" />
            ),
          },
          {
            title: "2022 Prospectus Brown Version",
            content: (
              <EmbededPdf url="https://drive.google.com/file/d/1D1rNg8U4zBzmHsa6P3hY0ECGO_pd7qUi/view" />
            ),
          },
        ]}
      />

      <Heading pb={4}>First Year Survival Guide</Heading>
      <Text>
        The First Year Survival Guide features all our wonderful CUS Affiliated
        clubs & services, student experiences & recommendations, resources and
        much more!
      </Text>

      <CusAccordion
        items={[
          {
            title: "First Year Survival Guide",
            content: (
              <EmbededPdf url="https://admin.cus.ca/wp-content/uploads/2021/09/First-Year-Survival-Guide-Master-Final-1.pdf"></EmbededPdf>
            ),
          },
        ]}
      />
      <Heading pb={4}>CUS Involvement Guide</Heading>
      <Text>
        ​​Not sure where to get started but want to get involved? This
        involvement brochure is the perfect place for you! In this brochure, you
        will find tips, tricks, and advice on where to get started. We discuss
        getting involved in the CUS, services, clubs, and many more ways to
        explore your passions and interests. Getting involved in university can
        be daunting, but we hope with this brochure, we make it a little easier
        for you. Have a great start to your school year!
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
      <Heading pb={4}>Vancouver Survival Guide</Heading>
      <Text>
        Have you been wanting to explore the beautiful city of Vancouver, but
        don't know where to start? Get inspired by our Vancouver Survival Guide!
        The guide provides you with not only the hiddens gems of Vancouver, but
        also useful tips and tricks to make the most out of your time at UBC!
      </Text>
      <CusAccordion
        items={[
          {
            title: "Vancouver Survival Guide",
            content: (
              <EmbededPdf url="https://drive.google.com/file/d/18eQGBLs4Tp4znhnDE8xP_HiJTFumHEye/view" />
            ),
          },
        ]}
      />
      <Heading pb={4}>CUS Volunteer Guide</Heading>
      <Text>
      Your one-stop shop to learn about ways to give back to your community!
      </Text>
      <CusAccordion
        items={[
          {
            title: "CUS Volunteer Guide",
            content: (
              <EmbededPdf url="https://drive.google.com/file/d/1j84kwrOzWvHBuKS-p007FsO4CywDqELo/view?usp=drivesdk" />
            ),
          },
        ]}
      />
    </>
  );
};

export default Guides;
