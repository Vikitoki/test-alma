import React from "react";
import { ReactNode } from "react";
import { FC } from "react";
import { Field, ErrorMessage } from "formik";

interface InputProps {
  [key: string]: string | ReactNode;
  name?: string;
  labelText?: string;
}

const Input: FC<InputProps> = ({ labelText, name, ...rest }) => {
  return (
    <div className="form__item">
      {labelText ? (
        <label htmlFor={name} className="form__label">
          {labelText}
        </label>
      ) : null}

      <Field {...rest} name={name} id={name} className={`form__input`} />
      <ErrorMessage name={name!}>
        {(errorMessage) => <span className="form__error">{errorMessage}</span>}
      </ErrorMessage>
    </div>
  );
};

export { Input };
