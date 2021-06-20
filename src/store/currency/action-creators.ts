import { CurrencyActions, ICurrencyData } from "../../types/currency";
import { IFormHomePageContainerState } from "../../types/form";
import {
  CHANGE_SELECT_CURRENCY_VALUE,
  CONVERT_ONE_TO_ANOTHER,
  FETCH_CURRENCIES_FAILURE,
  FETCH_CURRENCIES_REQUEST,
  FETCH_CURRENCIES_SUCCESS,
} from "./action-variables";

export const fetchCurrenciesRequest = (): CurrencyActions => ({
  type: FETCH_CURRENCIES_REQUEST,
});

export const fetchCurrenciesFailure = (message: string): CurrencyActions => ({
  type: FETCH_CURRENCIES_FAILURE,
  payload: message,
});

export const fetchCurrenciesSuccess = (
  data: ICurrencyData
): CurrencyActions => ({
  type: FETCH_CURRENCIES_SUCCESS,
  payload: data,
});

export const changeSelectCurrencyValue = (value: string): CurrencyActions => ({
  type: CHANGE_SELECT_CURRENCY_VALUE,
  payload: value,
});

export const convertOneToAnother = (
  data: IFormHomePageContainerState
): CurrencyActions => ({
  type: CONVERT_ONE_TO_ANOTHER,
  payload: data,
});
