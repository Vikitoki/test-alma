import React from "react";
import { FC } from "react";
import { FormHomePageContainer } from "../../components/Form/FormContainers/FormHomePageContainer";

import "./HomePage.scss";

const HomePage: FC = () => {
  return (
    <div className="home-page">
      <div className="home-page__container container">
        <div className="home-page__content">
          <h2 className="home-page__title">Конвертатор валюты</h2>
          <div className="home-page__form">
            <FormHomePageContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export { HomePage };
