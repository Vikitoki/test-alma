import React from "react";
import { FC } from "react";
import { Field, ErrorMessage } from "formik";
import { InputProps } from "../../../types/form";

const Input: FC<InputProps> = ({ labelText, name, addClass, ...rest }) => {
  return (
    <div className="form__item">
      {labelText ? (
        <label htmlFor={name} className="form__label">
          {labelText}
        </label>
      ) : null}

      <Field
        {...rest}
        name={name}
        id={name}
        className={`form__input ${addClass && `${addClass}`}`}
      />
      <ErrorMessage name={name!}>
        {(errorMessage) => <span className="form__error">{errorMessage}</span>}
      </ErrorMessage>
    </div>
  );
};

export { Input };
