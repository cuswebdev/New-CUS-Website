import React from "react";
import { HStack, IconButton, Heading, Text } from "@chakra-ui/react";
import { CarouselCard } from "components/CarouselCard";
import { Blog } from "components/Pages/Home/LatestNews/LatestNews";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { ContentSection } from "components/ContentSection";
import { useState, useEffect } from "react";
import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby";

interface MediumPost {
  category: string;
  media: string;
  title: string;
  description: string;
  href: string;
}

interface Props {
  limit?: number;
}

const CusBroadcast = ({ limit }: Props) => {
  const [mediumPosts, setMediumPosts] = useState<Array<MediumPost>>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMediumPosts = async () => {
      try {
        let response = await fetch("/api/medium");

        if (!response.ok) {
          throw new Error(
            "Error retrieving medium posts. Code: " + response.status
          );
        }
        let data = await response.json();
        setMediumPosts(JSON.parse(data)["posts"]);
      } catch (err) {
        console.log(err);
      }
    };

    getMediumPosts();
  }, []);

  // graphql

  if (!isLoading && mediumPosts.length === 0) {
    return <Text align="center">No Articles to show</Text>;
  }

  return (
    <CarouselCard>
      {mediumPosts &&
        mediumPosts
          .slice(0, limit)
          .map((post) => (
            <Blog
              category={post.category}
              media={
                post.media.includes("https://medium.com/_/stat")
                  ? "https://admin.cus.ca/wp-content/uploads/2021/08/image.jpeg"
                  : post.media
              }
              title={post.title}
              description={post.description}
              href={post.href}
            />
          ))}
    </CarouselCard>
  );
};

export default CusBroadcast;
