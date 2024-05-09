import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/form-control";
import { Input, Select, Textarea } from "@chakra-ui/react";
import DatePicker from "components/DatePicker/DatePicker";
import ImageUpload from "components/ImageUpload/ImageUpload";
import { PdfUpload } from "components/PdfUpload/PdfUpload";
import { Field } from "formik";
import React, { FunctionComponent } from "react";

export enum FormFieldType {
  Text,
  TextArea,
  Date,
  DateTime,
  Image,
  Pdf,
  Select,
}

export interface FormField {
  name: string;
  type: FormFieldType;
  label: string;
  placeholder?: string;
  isRequired?: boolean;
  helperText?: string;
  options?: string[];
}

export interface FieldBuilderProps {
  fields: FormField[];
}

export const getFieldTypeComponent = (formField: FormField, field, form) => {
  switch (formField.type) {
    case FormFieldType.Text:
      return (
        <Input
          {...field}
          id={formField.name}
          placeholder={formField.placeholder}
        />
      );
    case FormFieldType.TextArea:
      return (
        <Textarea
          {...field}
          id={formField.name}
          placeholder={formField.placeholder}
        />
      );
    case FormFieldType.Date:
      return (
        <DatePicker
          onChange={(date) => form.setFieldValue(formField.name, date)}
          placeholder={formField.placeholder}
        />
      );
    case FormFieldType.DateTime:
      return (
        <DatePicker
          enableTime={true}
          onChange={(date) => form.setFieldValue(formField.name, date)}
          placeholder={formField.placeholder}
        />
      );
    case FormFieldType.Image:
      return (
        <ImageUpload
          onChange={(img) => form.setFieldValue(formField.name, img)}
          value={field.value}
        />
      );
    case FormFieldType.Pdf:
      return (
        <PdfUpload
          onChange={(pdf) => form.setFieldValue(formField.name, pdf)}
          value={field.value}
        />
      );
    case FormFieldType.Select:
      return (
        <Select
          value={field.value}
          placeholder={formField.placeholder}
          onChange={(e) => form.setFieldValue(formField.name, e.target.value)}
        >
          {formField.options?.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </Select>
      );
  }
};

export const FieldBuilder: FunctionComponent<FieldBuilderProps> = ({
  fields,
}) => {
  return (
    <>
      {fields.map((formField) => {
        const { name, label, isRequired, helperText } = formField;

        return (
          <Field key={name} name={name}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors[name] && form.touched[name]}
                isRequired={isRequired}
              >
                <FormLabel htmlFor={name}>{label}</FormLabel>
                {getFieldTypeComponent(formField, field, form)}
                {helperText && <FormHelperText>{helperText}</FormHelperText>}
                <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
        );
      })}
    </>
  );
};
