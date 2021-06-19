import React from "react";
import { FC } from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <Link to="/" className="header__logo">
          Alma Test
        </Link>
        <nav className="header__menu">
          <ul className="header__list">
            <li>
              <Link to="/" className="header__link">
                Home page
              </Link>
            </li>
            <li>
              <Link to="/сurrency" className="header__link">
                Сurrency
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Header };
