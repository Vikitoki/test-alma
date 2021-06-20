// Containers

import { ReactNode } from "react";

export interface IFormHomePageContainerState {
  clientCurrencyAmount: string;
  firstCurrency: string;
  secondCurrency: string;
}

// UI

export interface InputProps {
  [key: string]: string | ReactNode;
  name?: string;
  addClass?: string;
  labelText?: string;
}

export interface SelectProps {
  [key: string]: string | ReactNode;
  name?: string;
  options?: any[];
  addClass?: string;
  labelText?: string;
}
