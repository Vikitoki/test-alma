import React from "react";
import { FC } from "react";

import "./HomePage.scss";

const HomePage: FC = () => {
  return (
    <div className="home-page">
      <div className="home-page__container container">
        <div className="home-page__content">
					<h2 className="home-page__title">Конвертатор валюты</h2>
          <form action="#" className="home-page__form form">
            <div className="form__items">
              <div className="form__item">
                <label className="form__label">Введите значение</label>
                <input type="text" className="form__input"></input>
              </div>
            </div>
            <div className="form__btns">
              <button type="submit" className="btn btn_white-outline">
                Конвертировать
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { HomePage };
