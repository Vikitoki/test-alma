import React from "react";
import { FC } from "react";

import "./CurrencyBlock.scss";

export const CurrencyBlock: FC = () => {
  return (
    <div className="currency-block">
      <span>1 USD</span>
      <span>24 RUb</span>
    </div>
  );
};
