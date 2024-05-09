import {
  Box,
  Circle,
  Img,
  VisuallyHidden,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaPlay } from "react-icons/fa";
import { VideoModal } from "components/VideoModal";

const VideoHero = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex width="100%" height={{ base: "350px", md: "500px" }}>
      <Box
        className="group"
        cursor="pointer"
        position="relative"
        rounded="lg"
        overflow="hidden"
        onClick={onOpen}
        width="100%"
      >
        <Img
          alt="Sauder Tour"
          src="https://img.youtube.com/vi/vt0Qf8ZsAqQ/maxresdefault.jpg"
          objectFit="cover"
          w="100%"
          h="100%"
        />
        <Circle
          size="20"
          as="button"
          bg="white"
          shadow="lg"
          color="#4DBBEE"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate3d(-50%, -50%, 0)"
          fontSize="xl"
          transition="all 0.4s"
          _groupHover={{
            transform: "translate3d(-50%, -50%, 0) scale(1.10)",
          }}
        >
          <VisuallyHidden>Play demo video</VisuallyHidden>
          <FaPlay />
        </Circle>
      </Box>
      <VideoModal
        title="Sauder Tour"
        videoId="vt0Qf8ZsAqQ"
        onOpen={onOpen}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Flex>
  );
};

export default VideoHero;
