import React from "react";
import { FC } from "react";
import { Field, ErrorMessage } from "formik";
import { SelectProps } from "../../../types/form";

const Select: FC<SelectProps> = ({
  name,
  labelText,
  options,
  addClass,
  ...rest
}) => {
  return (
    <div className="form__item">
      {labelText ? (
        <label htmlFor={name} className="form__label">
          {labelText}
        </label>
      ) : null}
      <Field
        as="select"
        className={`form__select ${addClass && `${addClass}`}`}
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
