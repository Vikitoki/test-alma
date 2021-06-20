import React, { useMemo } from "react";
import { FC } from "react";
import { FormControl } from "../UI/FormControl";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { IFormHomePageContainerState } from "../../../types/form";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { convertCurrenies } from "../../../services/currencyActions";
import { useDispatch } from "react-redux";

const FormHomePageContainer: FC = () => {
  const [warning, setWarning] = useState(false);
  const { currencyData } = useTypedSelector((state) => state.currency);
  const dispatch = useDispatch();

  const initialValues: IFormHomePageContainerState = {
    clientCurrencyAmount: "",
    firstCurrency: `${Object.keys(currencyData)[0]}`,
    secondCurrency: `${Object.keys(currencyData)[0]}`,
  };

  const validationSchema = Yup.object({
    clientCurrencyAmount: Yup.string().required(
      "Обязательное поле для заполнения"
    ),
    firstCurrency: Yup.string(),
    secondCurrency: Yup.string(),
  });

  const onSubmit = (values: IFormHomePageContainerState) => {
    if (values.firstCurrency === values.secondCurrency) {
      setWarning(true);
    } else {
      setWarning(false);
      dispatch(convertCurrenies(values));
    }
  };

  const options = useMemo(() => Object.keys(currencyData), [currencyData]);

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
                name="clientCurrencyAmount"
              />
              <FormControl
                control="select"
                labelText="Выберите исходную валюту"
                options={options}
                name="firstCurrency"
              />
              <FormControl
                control="select"
                labelText="Выберите конечную валюту"
                options={options}
                name="secondCurrency"
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
