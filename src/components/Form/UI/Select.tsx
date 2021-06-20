import React, { ReactNode } from "react";
import { FC } from "react";
import { Field, ErrorMessage } from "formik";

interface SelectProps {
  [key: string]: string | ReactNode;
  name?: string;
  options?: any[];
  labelText?: string;
}

const Select: FC<SelectProps> = ({ name, labelText, options, ...rest }) => {
  return (
    <div className="form__item">
      {labelText ? (
        <label htmlFor={name} className="form__label">
          {labelText}
        </label>
      ) : null}
      <Field
        as="select"
        className="form__select"
        id={name}
        name={name}
        {...rest}
      >
        {options?.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name!}>
        {(errorMessage) => <span className="form__error">{errorMessage}</span>}
      </ErrorMessage>
    </div>
  );
};

export { Select };
