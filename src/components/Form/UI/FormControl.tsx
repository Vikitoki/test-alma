import React from "react";
import { FC } from "react";
import { Input } from "./Input";
import { Select } from "./Select";

interface FormControlProps {
  control: string;
  [key: string]: string | any[];
}

const FormControl: FC<FormControlProps> = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "select":
      return <Select {...rest} />;
    default:
      return null;
  }
};

export { FormControl };
