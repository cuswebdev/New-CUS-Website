import { Box, chakra, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { FunctionComponent } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

import "./PortalBox.scss";

interface PortalBoxProps {
  title: string;
  description?: string;
  url?: string;
  img?: string;
}

export const PortalBox: FunctionComponent<PortalBoxProps> = ({
  title,
  description,
  url,
  img,
}) => {
  return (
    <Box className="portal-box">
      <Box className="gradient-overlay" />
      <chakra.a href={url} className="link-cover">
        {title}
      </chakra.a>
      <Box className="portal-box__media">
        <Image
          objectFit="cover"
          height="100%"
          width="100%"
          fallback={<Box background="gray.400" height="100%" width="100%" />}
          src={img}
          alt={title}
        />
      </Box>
      <Box className="portal-box__content">
        <div className="portal-box__content__title">
          <Heading size="md" py={2}>
            {title}
          </Heading>
        </div>
        {description && (
          <div className="portal-box__content__transition-cont">
            <Text>{description}</Text>
            {url && (
              <Link fontWeight="600" color="white" href={url}>
                Learn More{" "}
                <FaArrowAltCircleRight style={{ display: "inline" }} />
              </Link>
            )}
          </div>
        )}
      </Box>
    </Box>
  );
};
