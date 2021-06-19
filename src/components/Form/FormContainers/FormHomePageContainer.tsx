import React from "react";
import { FC } from "react";
import { FormControl } from "../UI/FormControl";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

interface IFormHomePageContainerState {
  clientCurrency: string;
  currencyFrom: string;
  currencyInto: string;
}

const FormHomePageContainer: FC = () => {
  const [warning, setWarning] = useState(false);

  const initialValues: IFormHomePageContainerState = {
    clientCurrency: "",
    currencyFrom: "rub",
    currencyInto: "rub",
  };

  const validationSchema = Yup.object({
    clientCurrency: Yup.string().required("Обязательное поле для заполнения"),
    currencyFrom: Yup.string(),
    currencyInto: Yup.string(),
  });

  const onSubmit = (values: IFormHomePageContainerState) => {
    if (values.currencyFrom === values.currencyInto) {
      setWarning(true);
    } else {
      setWarning(false);
      console.log(values);
    }
  };

  const options = [{ value: "rub" }, { value: "eng" }, { value: "sas" }];

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form className="form">
            <div className="form__items">
              <FormControl
                control="input"
                type="text"
                labelText="Введите желаемое кол-во валюты"
                name="clientCurrency"
              />
              <FormControl
                control="select"
                labelText="Выберите исходную валюту"
                options={options}
                name="currencyFrom"
              />
              <FormControl
                control="select"
                labelText="Выберите конечную валюту"
                options={options}
                name="currencyInto"
              />
            </div>
            <div className="form__btns">
              <button
                disabled={!formik.isValid}
                type="submit"
                className="btn btn_white-outline"
              >
                Конвертировать
              </button>
            </div>
            {warning ? (
              <span className="form__error form__error_center">
                Вы не можете конвертировать две совпадающие валюты
              </span>
            ) : null}
          </Form>
        );
      }}
    </Formik>
  );
};

export { FormHomePageContainer };
