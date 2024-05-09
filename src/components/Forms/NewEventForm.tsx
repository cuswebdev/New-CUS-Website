import React, { FunctionComponent } from "react";
import { Formik, Form } from "formik";
import { Button, Stack, useToast } from "@chakra-ui/react";
import axios from "axios";
import { FieldBuilder, FormField, FormFieldType } from "./FieldBuilder";
import { EventType } from "types/Event";
import { convertToVancouverTime } from "utils/timezoneUtils";

const fields: FormField[] = [
  {
    name: "event_title",
    type: FormFieldType.Text,
    label: "Event Title",
    placeholder: "Event Title",
    isRequired: true,
  },
  {
    name: "event_type",
    type: FormFieldType.Select,
    label: "Event Type",
    placeholder: "Select Event Type",
    options: Object.keys(EventType),
    isRequired: true,
  },
  {
    name: "organization_name",
    type: FormFieldType.Text,
    label: "Club / Service / Organization Name",
    placeholder: "Club / Service / Organization Name",
    isRequired: false,
  },
  {
    name: "description",
    type: FormFieldType.TextArea,
    label: "Event Description",
    placeholder: "Event Description",
    isRequired: true,
  },
  {
    name: "date_from",
    type: FormFieldType.DateTime,
    label: "Start Date",
    placeholder: "Start Date",
    isRequired: true,
  },
  {
    name: "date_to",
    type: FormFieldType.DateTime,
    label: "End Date",
    placeholder: "End Date",
    helperText: "Leave blank if the event is on a single day",
  },
  {
    name: "url",
    type: FormFieldType.Text,
    label: "Event URL",
    placeholder: "Event URL",
    isRequired: true,
    helperText:
      "Can be a link to the facebook event or to your personal website",
  },
  {
    name: "image",
    type: FormFieldType.Image,
    label: "Promotional Banner",
    helperText:
      "Max file size: 5MB. Please resize/compress the image (jpgs work well) if it is too large. Try your best to upload an image with an aspect ratio of 1.46, or make sure all the content is in the center.",
    isRequired: true,
  },
  {
    name: "location",
    type: FormFieldType.Text,
    label: "Location / Zoom Link",
    placeholder: "Location / Zoom Link",
    isRequired: false,
  },
  {
    name: "creator_full_name",
    type: FormFieldType.Text,
    label: "Contact Name",
    placeholder: "Contact Name",
    isRequired: true,
  },
  {
    name: "email",
    type: FormFieldType.Text,
    label: "Contact Email",
    placeholder: "Contact Email",
    isRequired: true,
  },
  {
    name: "note",
    type: FormFieldType.TextArea,
    label: "Notes, Comments, or Special Requests",
    placeholder: "Notes, Comments, or Special Requests",
    isRequired: false,
  },
];

export const NewEventForm: FunctionComponent = () => {
  const toast = useToast();

  const initialValues = {
    event_title: "",
    event_type: "",
    description: "",
    date_from: "",
    date_to: "",
    url: "",
    image: "",
    organization_name: "",
    creator_full_name: "",
    email: "",
    location: "",
    note: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await axios.post(
        "https://ubc-cus-wordpress-api.herokuapp.com/events",
        convertToVancouverTime(values)
      );
      toast({
        title: "Successfully submitted!",
        description:
          "We've received your event request. Someone will reach out to you shortly.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      resetForm();
    } catch (error) {
      toast({
        title: "Error submitting event form",
        description: "Please try submitting again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {(props) => (
        <Form>
          <Stack spacing={4}>
            <FieldBuilder fields={fields} />
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
