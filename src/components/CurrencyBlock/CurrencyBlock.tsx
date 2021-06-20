import React from "react";
import { FC } from "react";

import "./CurrencyBlock.scss";

interface CurrencyBlockProps {
  baseNameCurrency: string;
  convertNameCurrency: string;
  convertCurrencyValue: string;
}

export const CurrencyBlock: FC<CurrencyBlockProps> = ({
  baseNameCurrency,
  convertNameCurrency,
  convertCurrencyValue,
}) => {
  return (
    <div className="currency-block">
      <span>1 {baseNameCurrency}</span>
      <span>
        {convertCurrencyValue} {convertNameCurrency}
      </span>
    </div>
  );
};
