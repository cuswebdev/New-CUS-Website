import React from "react";
import { FunctionComponent } from "react";
import Flatpickr from "react-flatpickr";

import "flatpickr/dist/themes/light.css";
import "./DatePicker.scss";
import { Input } from "@chakra-ui/react";

interface DatePickerProps {
  onChange: any;
  enableTime?: boolean;
  placeholder?: string;
}

const DatePicker: FunctionComponent<DatePickerProps> = ({
  enableTime,
  placeholder,
  onChange,
}) => {
  return (
    <Flatpickr
      options={{ enableTime, allowInput: true }}
      onChange={(e) => {
        if (e[0]?.toISOString()) {
          onChange(e[0].toISOString());
        }
      }}
      render={(_, ref) => {
        return <Input ref={ref} placeholder={placeholder} />;
      }}
    />
  );
};

export default DatePicker;
