import { AspectRatio, Box, Center, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { FunctionComponent } from "react";
import Slider from "react-slick";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { FaInstagram } from "react-icons/fa";

import "./InstagramFeed.scss";

interface InstagramFeedProps {
  posts: IgPost[];
}

export interface IgPost {
  id: string;
  likes: number;
  localFile: { childImageSharp: { fluid: any } };
}

export const InstagramFeed: FunctionComponent<InstagramFeedProps> = ({
  posts,
}) => {
  return (
    <SimpleGrid columns={{ base: 2, md: 3 }}>
      {posts.map((post) => (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to={`https://www.instagram.com/p/${post.id}`}
        >
          <Box className="instagram-post" position="relative">
            <Center className="instagram-post__overlay" color="white">
              <FaInstagram size={30} />
            </Center>
            <Img
              fluid={{
                ...post.localFile.childImageSharp.fluid,
                aspectRatio: 1,
              }}
            />
          </Box>
        </Link>
      ))}
    </SimpleGrid>
  );
};
