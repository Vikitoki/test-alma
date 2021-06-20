import React from "react";
import { useEffect } from "react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { FormHomePageContainer } from "../../components/Form/FormContainers/FormHomePageContainer";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getAllCurrency } from "../../services/currencyActions";

import "./HomePage.scss";

const HomePage: FC = () => {
  const dispatch = useDispatch();
  const { error, loading, currencyData, convertOneToAnother } =
    useTypedSelector((state) => state.currency);

  useEffect(() => {
    if (Object.keys(currencyData).length === 0) {
      dispatch(getAllCurrency());
    }
  }, [dispatch, currencyData]);

  return (
    <div className="home-page">
      <div className="home-page__container container">
        <div className="home-page__content">
          <h2 className="home-page__title">Конвертатор валюты</h2>
          <div className="home-page__form">
            {loading ? (
              <span className="status-text status-text_center">
                Загрузка...
              </span>
            ) : error ? (
              <span className="status-text status-text_center">{error}</span>
            ) : (
              <FormHomePageContainer />
            )}
          </div>
          {convertOneToAnother ? (
            <span className="home-page__result status-text status-text_center">
              Результат конвертации: {convertOneToAnother}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export { HomePage };
