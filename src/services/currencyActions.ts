import { Dispatch } from "react";
import {
  changeSelectCurrencyValue,
  convertOneToAnother,
  fetchCurrenciesFailure,
  fetchCurrenciesRequest,
  fetchCurrenciesSuccess,
} from "../store/currency/action-creators";
import { CurrencyActions } from "../types/currency";
import { IFormHomePageContainerState } from "../types/form";

export const getAllCurrency = () => {
  return async (dispatch: Dispatch<CurrencyActions>) => {
    try {
      dispatch(fetchCurrenciesRequest());
      const response = await fetch(`http://localhost:3004/rates`);

      if (!response.ok) {
        throw new Error(
          "Извините, что-то пошло не так, повторите попытку через 5 секунд"
        );
      }

      const data = await response.json();
      dispatch(fetchCurrenciesSuccess(data));
    } catch (error) {
      dispatch(fetchCurrenciesFailure(error.message));
    }
  };
};

export const convertCurrenies = (values: IFormHomePageContainerState) => {
  return async (dispatch: Dispatch<CurrencyActions>) => {
    dispatch(convertOneToAnother(values));
  };
};

export const changeSelectCurrency = (value: string) => {
  return async (dispatch: Dispatch<CurrencyActions>) => {
    dispatch(changeSelectCurrencyValue(value));
  };
};
