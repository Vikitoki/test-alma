import React from "react";
import { FC } from "react";

import "./Footer.scss";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <span className="footer__text">Copy right</span>
      </div>
    </footer>
  );
};

export { Footer };
