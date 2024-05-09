import React, { FunctionComponent } from "react";
import { Layout, ContentSection } from "components";
import { PageTitle } from "components/PageTitle";
import { ExpandableCardGrid } from "components/ExpandableCardGrid";
import { PageMenuBar } from "components/PageMenuBar";
import { MeetTheTeamPageMenu } from "components/PageMenuBar/_data";
import { graphql } from "gatsby";
import { Box, Heading, Text } from "@chakra-ui/react";

import parse from "html-react-parser";
import { toKebabCase } from "utils/kebab";

interface TeamMember {
  category;
  description;
  image: { localFile: any };
  name;
  order;
  position;
}

interface MemberCardsProps {
  title: string;
  id?: string;
  teamMembers: TeamMember[];
  smallTitle?: boolean;
}

const MemberCards: FunctionComponent<MemberCardsProps> = ({
  title,
  id,
  teamMembers,
  smallTitle,
}) => {
  return (
    <>
      <Heading
        size={smallTitle ? "md" : undefined}
        mt={4}
        id={id}
        className="scroll-margin-top"
      >
        {title}
      </Heading>
      <ExpandableCardGrid
        items={teamMembers
          .sort((a, b) => a.order - b.order)
          .map((teamMember) => ({
            title: teamMember.name,
            image: teamMember.image
              ? teamMember.image.localFile?.childImageSharp.fluid 
              : undefined,
            description: teamMember.position,
            data: {
              description: teamMember.description,
              position: teamMember.position,
              name: teamMember.name,
            },
          }))}
        renderMore={(data) => (
          <Box color="white">
            <Heading size="md">{data.name}</Heading>
            <Text size="sm" mb={4}>
              {data.position}
            </Text>
            {parse(data.description as string)}
          </Box>
        )}
      />
    </>
  );
};

const MeetTheTeamPage = ({ data }) => {
  const teamMembers: TeamMember[] = data.allWpTeamMember.nodes.map(
    ({ teamMember }) => teamMember
  );

  const teamMembersByCategory = teamMembers.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = [];
    }
    acc[curr.category].push(curr);
    return acc;
  }, {} as { [key: string]: TeamMember[] });

  const services = [
    "Academic Portfolio",
    "External Portfolio",
    "Internal Portfolio",
    "Marketing Portfolio",
    "Student Engagement Portfolio",
  ];

  return (
    <Layout seoTitle="Meet The Team">
      <PageTitle
        title="Meet the Team"
        description="The leaders behind the organization"
      />
      <PageMenuBar items={MeetTheTeamPageMenu} />
      <ContentSection>
        {[
          "Board of Directors",
          "Executive Council",
          "Presidential Portfolio",
        ].map((category) => (
          <MemberCards
            title={category}
            id={toKebabCase(category)}
            teamMembers={teamMembersByCategory[category] ?? []}
          />
        ))}
        <MemberCards
          title={"Associate Vice Presidents"}
          id={toKebabCase("Associate Vice Presidents")}
          teamMembers={
            [...teamMembersByCategory["Vice Presidents & AVPs"]] ?? []
          }
        />
        <Heading id="services" my={4} className="scroll-margin-top">
          Services
        </Heading>
        {services.map((category) => (
          <MemberCards
            smallTitle
            title={category}
            teamMembers={teamMembersByCategory[category] ?? []}
          />
        ))}
        {["Commissions"].map((category) => (
          <MemberCards
            title={category}
            id={toKebabCase(category)}
            teamMembers={teamMembersByCategory[category] ?? []}
          />
        ))}
      </ContentSection>
    </Layout>
  );
};

export const query = graphql`
  query {
    allWpTeamMember {
      nodes {
        teamMember {
          category
          description
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 220) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          name
          order
          position
        }
      }
    }
  }
`;

export default MeetTheTeamPage;
