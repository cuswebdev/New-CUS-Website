import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { FunctionComponent } from "react";
import YouTube from "react-youtube";

export interface VideoModalProps {
  title: string;
  isOpen: boolean;
  videoId: string;
  onOpen: () => void;
  onClose: () => void;
}

export const VideoModal: FunctionComponent<VideoModalProps> = ({
  title,
  isOpen,
  videoId,
  onOpen,
  onClose,
}) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size="3xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" justifyContent="center" alignItems="center">
          <YouTube videoId={videoId} />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
