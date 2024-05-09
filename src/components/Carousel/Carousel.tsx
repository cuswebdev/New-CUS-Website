import {
  Box,
  HStack,
  Stack,
  Flex,
  Text,
  useColorModeValue,
  Divider,
  Button,
  Img,
  Heading,
} from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

import "./Carousel.scss";

export interface Slide {
  media: string;
  label?: string;
  subtitle: string;
  title: string;
  button1?: {
    text?: string;
    url?: string;
  };
  button2?: {
    text?: string;
    url?: string;
  };
}

interface Props {
  slides: Slide[];
}

const isImage = (url: string): boolean => {
  return url.match(/\.(jpeg|jpg|png)/) !== null;
};

const isVideo = (url: string): boolean => {
  return url.match(/\.(mp4|webm)/) !== null;
};

function Carousels({ slides }: Props) {
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => {
      nextSlide();
    },
    onSwipedRight: (eventData) => {
      prevSlide();
    },
  });

  return (
    <Flex w="full" alignItems="center" justifyContent="center" {...handlers}>
      <Flex w="full" pos="relative" overflow="hidden">
        <Flex h={{ base: "600px" }} w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box
              key={`slide-${sid}`}
              boxSize="full"
              shadow="lg"
              flex="none"
              position="relative"
            >
              <Box position="relative" w="full" h="full">
                {isImage(slide.media) && (
                  <Img
                    src={slide.media}
                    boxSize="full"
                    backgroundSize="cover"
                    alt="Main Image"
                    w="full"
                    h="full"
                    objectFit="cover"
                    objectPosition="top bottom"
                    position="absolute"
                  />
                )}
                {isVideo(slide.media) && (
                  <video
                    className="carousel-video"
                    playsInline
                    autoPlay
                    muted
                    loop
                  >
                    <source src={slide.media} type="video/mp4" />
                  </video>
                )}
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  w="full"
                  h="full"
                  bg="blackAlpha.600"
                />
              </Box>

              <Stack
                pos="absolute"
                top={{ base: "40px", sm: "110px", lg: "140px" }}
                textAlign="center"
                w="full"
                mb="8"
                color="white"
                alignItems="center"
                zIndex={1}
              >
                <HStack
                  textAlign="center"
                  justifyContent="left"
                  width={{ base: "100%", md: "60%" }}
                  px="6"
                  my="6"
                  maxWidth="840px"
                >
                  <Text
                    fontSize="md"
                    whiteSpace="nowrap"
                    textTransform="capitalize"
                  >
                    {slide.label ?? "COMMERCE UNDERGRADUATE SOCIETY"}
                  </Text>
                  <Divider color="white" opacity="1" />
                  <Divider color="white" opacity="0" />
                </HStack>
                <Heading
                  fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
                  fontWeight="extrabold"
                  maxWidth="840px"
                  px="6"
                >
                  {slide.title}
                </Heading>
                <Text
                  fontSize={{
                    base: "xl",
                    md:
                      slide.subtitle?.length > 100
                        ? "xl"
                        : slide.subtitle?.length > 70
                        ? "2xl"
                        : "3xl",
                  }}
                  fontWeight="bold"
                  maxWidth="840px"
                  px="6"
                >
                  {slide.subtitle}
                </Text>
                <HStack
                  justifyContent="center"
                  spacing={{ base: 8, md: 20 }}
                  pt={10}
                >
                  {slide.button1?.url && (
                    <Link to={slide.button1.url}>
                      <Button variant="solid" size="lg">
                        {slide.button1.text || "Learn More"}
                      </Button>
                    </Link>
                  )}
                  {slide.button2?.url && (
                    <Link to={slide.button2.url}>
                      <Button size="lg" variant="solid">
                        {slide.button2.text || "Learn More"}
                      </Button>
                    </Link>
                  )}
                </HStack>
              </Stack>
            </Box>
          ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide} zIndex={2}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide} zIndex={2}>
          &#10095;
        </Text>
        <HStack justify="center" pos="absolute" bottom="8px" w="full" mb={3}>
          {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
              className={currentSlide === slide ? "active dot" : " dot"}
              cursor="pointer"
              onClick={() => setSlide(slide)}
            >
              <Box
                key={`dots-${slide}`}
                boxSize={["8px"]}
                bg="white"
                rounded="50%"
                display="inline-block"
              />
            </Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
}

export default Carousels;
