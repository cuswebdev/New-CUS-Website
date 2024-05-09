import { Box, Heading, Text } from "@chakra-ui/react";
import { ContentSection } from "components/ContentSection";
import React from "react";
import Slider from "react-slick";

import "./HistoryCarousel.scss";

const items = [
  {
    year: "1932",
    text: "Students of Commerce in the Faculty of Arts formed a student club under the wing of the UBC Alma Mater Society, called the Commerce Club",
  },
  {
    year: "1936",
    text: "Commerce Club was disbanded due to lack of interest",
  },
  {
    year: "1939",
    text: "Creation of the Department of Commerce",
  },
  {
    year: "1940",
    text: "Subsequent split from the Department of Economics led to renewed interest and  Commerce students elected Ernest C. Harvey as class president. A more robust, but still unofficial, student government formed shortly after, with a group of students forming the Commerce Executives under Commerce president Jack Moxon",
  },
  {
    year: "1942",
    text: "President Hugh Hall reformed the Commerce Club, bringing the group under the wing of the AMS once again",
  },
  {
    year: "1944",
    text: "The club thrived, and after two years of negotiations and effort, the Commerce Undergraduate Society was officially formed on October 10th. The CUS quickly gained legitimacy, hosting popular events and launching campus-wide initiatives. The Commerce Undergraduate Society Banquet became the organization’s flagship annual event, hosting thousands of attendees at the Hotel Vancouver downtown",
  },
  {
    year: "1947",
    text: "The CUS, along with other undergraduate societies, received stewardship of several of the war huts behind Brock Hall, unused since the end of the war, to serve as their offices",
  },
  {
    year: "1950’s",
    text: "The CUS initiated many long standing traditions in the following years, first publishing the Ledger Magazine (precursor to the Cavalier newspaper) and the Balance Sheet Newsletter (precursor to the CUSunday)",
  },
  {
    year: "1960's",
    text: "With the enthusiastic support of the Dean, POITS (the CUS’ beer garden) was founded",
  },
  {
    year: "1970’s",
    text: "Costs of running the society were increasing, and a referendum was held to raise a $2.00/year student fee. The referendum garnered 83% approval, and the student fee was successfully levied",
  },
  {
    year: "1990’s",
    text: "With the money raised from increased student fees during this decade, the turn of the millennium brought about many notable events still recognizable today. Me Inc, Imprint, Enterprize, and many other conferences were first launched, and when JDC West came to life. The composition of the CUS changed drastically as well, with the implementation of a constitution and a code of procedures to set out our goals, visions, and practices",
  },
  {
    year: "1990’s",
    text: "With the money raised from increased student fees during this decade, the turn of the millennium brought about many notable events still recognizable today. Me Inc, Imprint, Enterprize, and many other conferences were first launched, and when JDC West came to life. The composition of the CUS changed drastically as well, with the implementation of a constitution and a code of procedures to set out our goals, visions, and practices",
  },
  {
    year: "2004",
    text: "The Faculty of Commerce and Business Administration at UBC was renamed the UBC Sauder School of Business under the tenure of Dean Dan Muzyka",
  },
  {
    year: "2010",
    text: "CUS passed a referendum of a building fee of $500/student for the mortgage of the new and current building of Henry Angus",
  },
  {
    year: "2020",
    text: "Global pandemic (Covid-19) hits and CUS starts operating an unprecedented online year",
  },
  {
    year: "2021",
    text: "CUS stands with 25 services and 15 affiliated clubs and will be returning to in person events",
  },
];

export const HistoryCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box bg="black" color="white" className="history-carousel">
      <ContentSection>
        <Slider {...settings}>
          {items.map((item) => (
            <Box height="100%" p={3}>
              <Heading>{item.year}</Heading>
              <Text>{item.text}</Text>
            </Box>
          ))}
        </Slider>
      </ContentSection>
    </Box>
  );
};
