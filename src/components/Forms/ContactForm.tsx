import React, { FunctionComponent } from "react";
import { Formik, Form, Field } from "formik";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { FieldBuilder, FormField, FormFieldType } from "./FieldBuilder";

const fields: FormField[] = [
  {
    name: "name",
    type: FormFieldType.Text,
    label: "Name",
    placeholder: "Name",
    isRequired: false,
  },
  {
    name: "description",
    type: FormFieldType.TextArea,
    label: "How can we help!",
    placeholder: "How can we help!",
    isRequired: true,
  },
  {
    name: "student_leaders_request",
    type: FormFieldType.TextArea,
    label:
      "Are there any other student leaders that you would like us to contact and make known of your request?",
    placeholder: "Description",
    isRequired: false,
  },
  {
    name: "email",
    type: FormFieldType.Text,
    label:
      "Please provide your email if you would like an update or direct response.",
    placeholder: "Email",
    isRequired: false,
  },
];

export const ContactForm: FunctionComponent = () => {
  const toast = useToast();

  const initialValues = {
    name: "",
    email: "",
    student_leaders_request: "",
    description: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await axios.post(
        "https://ubc-cus-wordpress-api.herokuapp.com/contactFormSubmissions",
        { ...values, title: values.name }
      );
      toast({
        title: "Successfully submitted!",
        description:
          "We've received your request. Someone will reach out to you shortly.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      resetForm();
    } catch (error) {
      toast({
        title: "Error submitting contact form",
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
