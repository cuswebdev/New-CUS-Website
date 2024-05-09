import {
  Image,
  Box,
  Heading,
  Text,
  Stack,
  Button,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "gatsby";
import React, { FunctionComponent } from "react";
import { ReactNode } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";

interface ViewMoreCardProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  content?: ReactNode;
  imageContain?: boolean;
}

export const ViewMoreCard: FunctionComponent<ViewMoreCardProps> = ({
  imageSrc,
  subtitle,
  title,
  description,
  buttonText = "View More",
  buttonLink,
  content,
  imageContain,
}) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box boxShadow="lg" p={4} display="flex" flexDirection="column">
      <Box
        display="flex"
        flex={1}
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
      >
        {imageSrc && (
          <Image
            boxSize="100px"
            objectFit={imageContain ? "contain" : "cover"}
            borderRadius="50%"
            src={imageSrc}
            fallback={<></>}
            mr={4}
          />
        )}
        <Stack
          direction={{ base: "column", lg: "row" }}
          alignItems="center"
          width="100%"
        >
          <Box>
            {subtitle && (
              <Heading size="sm" fontWeight="600">
                {subtitle}
              </Heading>
            )}
            <Heading size="lg">{title}</Heading>
            {description && <Text>{description}</Text>}
          </Box>
          <Box flex={1} display="flex" justifyContent="flex-end">
            {buttonLink ? (
              <Link to={buttonLink}>
                <Button>{buttonText}</Button>
              </Link>
            ) : (
              <>
                {content && (
                  <Button onClick={onToggle}>
                    {buttonText}
                    {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </Button>
                )}
              </>
            )}
          </Box>
        </Stack>
      </Box>
      <Collapse in={isOpen} animateOpacity>
        <Box pt={4}>{content}</Box>
      </Collapse>
    </Box>
  );
};
