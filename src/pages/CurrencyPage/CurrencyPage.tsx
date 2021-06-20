import React, { ChangeEvent, useEffect } from "react";
import { useState } from "react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { CurrencyBlock } from "../../components/CurrencyBlock/CurrencyBlock";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  changeSelectCurrency,
  getAllCurrency,
} from "../../services/currencyActions";

import "./CurrencyPage.scss";

export const CurrencyPage: FC = () => {
  const { currencyData, error, loading, selectCurrency } = useTypedSelector(
    (state) => state.currency
  );
  const [selectValue, setSelectValue] = useState(
    Object.keys(currencyData)[0] || ""
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(currencyData).length === 0) {
      dispatch(getAllCurrency());
    }
  }, [dispatch, currencyData]);

  const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value);
    dispatch(changeSelectCurrency(event.target.value));
  };

  return (
    <div className="currency-page">
      <div className="currency-page__container container">
        <div className="currency-page__content">
          {loading ? (
            <span className="status-text status-text_center">Загрузка...</span>
          ) : error ? (
            <span className="status-text status-text_center">{error}</span>
          ) : (
            <>
              <div className="currency-page__top">
                <h3 className="currency-page__title">
                  Выберите интересующую вас валюту
                </h3>
                <div className="currency-page__select">
                  <select
                    value={selectValue}
                    onChange={selectHandler}
                    name="currencyName"
                    id="currencyName"
                  >
                    {Object.keys(currencyData).map((option) => {
                      return (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <ul className="currency-page__list">
                {Object.keys(currencyData).map((item) => {
                  const currencyValue = String(
                    (currencyData[selectCurrency] / currencyData[item]).toFixed(
                      4
                    )
                  );
                  return (
                    <li key={item}>
                      <CurrencyBlock
                        baseNameCurrency={selectCurrency}
                        convertNameCurrency={item}
                        convertCurrencyValue={currencyValue}
                      />
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
