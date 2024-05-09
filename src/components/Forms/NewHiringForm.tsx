import React, { FunctionComponent } from "react";
import { Formik, Form } from "formik";
import { Button, Stack, useToast } from "@chakra-ui/react";
import axios from "axios";
import { FieldBuilder, FormField, FormFieldType } from "./FieldBuilder";
import { HiringType } from "types/HiringOpportunity";
import { convertToVancouverTime } from "utils/timezoneUtils";

const fields: FormField[] = [
  {
    name: "position",
    type: FormFieldType.Text,
    label: "Position / Hiring Title",
    placeholder: "Position / Hiring Title",
    isRequired: true,
  },
  {
    name: "organization",
    type: FormFieldType.Text,
    label: "Club / Service / Organization Name",
    placeholder: "Club / Service / Organization Name",
    isRequired: true,
  },
  {
    name: "event_type",
    type: FormFieldType.Select,
    label: "Hiring Type",
    placeholder: "Select Hiring Type",
    options: Object.keys(HiringType),
    isRequired: true,
  },
  {
    name: "description",
    type: FormFieldType.TextArea,
    label: "Description",
    placeholder: "Description",
    isRequired: true,
    helperText:
      "Include any info related to your hiring. This blurb will be posted on a page.",
  },
  {
    name: "image",
    type: FormFieldType.Image,
    label: "Hiring Banner",
    isRequired: true,
    helperText:
      "Max file size: 5MB. Please resize/compress the image (jpgs work well) if it is too large.",
  },
  {
    name: "pdf",
    type: FormFieldType.Pdf,
    label: "Hiring Package (pdf)",
    isRequired: false,
    helperText:
      "Max file size: 5MB. Please resize/compress the image (jpgs work well) if it is too large. Try your best to upload an image with an aspect ratio of 1.46, or make sure all the content is in the center.",
  },
  {
    name: "start_date",
    type: FormFieldType.Date,
    label: "Starting Date",
    placeholder: "Starting Date",
    isRequired: true,
  },
  {
    name: "end_date",
    type: FormFieldType.Date,
    label: "Due Date (11:59 PM)",
    placeholder: "Due Date",
    isRequired: true,
    helperText: "Hiring post must last for at least 10 days long",
  },
  {
    name: "url",
    type: FormFieldType.Text,
    label: "Link",
    placeholder: "Link",
    helperText: "This can be the link to your website or application",
  },
  {
    name: "contact_name",
    type: FormFieldType.Text,
    label: "Contact Name",
    placeholder: "Contact Name",
    isRequired: true,
  },
  {
    name: "contact_email",
    type: FormFieldType.Text,
    label: "Contact Email",
    placeholder: "Contact Email",
    isRequired: true,
  },
  {
    name: "note",
    type: FormFieldType.TextArea,
    label: "Any comments or notes?",
    placeholder: "Other comments / notes",
    isRequired: false,
  },
];

export const NewHiringForm: FunctionComponent = () => {
  const toast = useToast();

  const initialValues = {
    position: "",
    organization: "",
    image: "",
    pdf: undefined,
    description: "",
    start_date: "",
    end_date: "",
    url: "",
    contact_name: "",
    contact_email: "",
    note: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    const formData = new FormData();
    Object.entries(convertToVancouverTime(values)).forEach(([name, value]) => {
      formData.append(name, value as any);
    });
    try {
      await axios.post(
        "https://ubc-cus-wordpress-api.herokuapp.com/hiring",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      toast({
        title: "Successfully submitted!",
        description:
          "We've received your hiring request. Someone will reach out to you shortly.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      resetForm();
    } catch (error) {
      toast({
        title: "Error submitting hiring form",
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
