import React, { FunctionComponent } from "react";
import { Formik, Form, Field } from "formik";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Stack,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

export const InquiryForm: FunctionComponent = () => {
  const toast = useToast();

  const initialValues = {
    name: "",
    email: "",
    description: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await axios.post(
        "https://ubc-cus-wordpress-api.herokuapp.com/contactFormSubmissions",
        values
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
            <HStack spacing={4}>
              <Field name="name">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                    isRequired
                  >
                    <FormLabel htmlFor="name">Full name</FormLabel>
                    <Input {...field} id="name" placeholder="Full name" />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="email">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      type="email"
                      {...field}
                      id="email"
                      placeholder="Email"
                    />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </HStack>
            <Field name="description">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.description && form.touched.description
                  }
                  isRequired
                >
                  <FormLabel htmlFor="description">Inquiry</FormLabel>
                  <Textarea
                    {...field}
                    id="description"
                    placeholder="How can we help?"
                  />
                  <FormErrorMessage>{form.errors.description}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              maxWidth="200px"
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
